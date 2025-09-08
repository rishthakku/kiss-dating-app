// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // Determine the current page to run the correct logic
    const currentPage = window.location.pathname.split("/").pop();
    
    // Router logic
    if (currentPage === "index.html" || currentPage === "") {
        initIndexPage();
    } else if (currentPage === "profile.html") {
        initProfilePage();
    } else if (currentPage === "chat.html") {
        initChatPage();
    }
});

// --- HELPERS ---
const getUsers = () => {
    try {
        return JSON.parse(localStorage.getItem('users')) || [];
    } catch (e) {
        console.error('Error loading users:', e);
        return [];
    }
};
const getLoggedInUser = () => {
    try {
        return JSON.parse(sessionStorage.getItem('loggedInUser')) || null;
    } catch (e) {
        console.error('Error loading logged-in user:', e);
        return null;
    }
};
const setLoggedInUser = (user) => sessionStorage.setItem('loggedInUser', JSON.stringify(user));
const logoutUser = () => sessionStorage.removeItem('loggedInUser');

// --- INDEX PAGE LOGIC ---
function initIndexPage() {
    const loggedInUser = getLoggedInUser();

    // DOM Elements
    const loginView = document.getElementById("login-view");
    const registerView = document.getElementById("register-view");
    const dashboardView = document.getElementById("dashboard-view");
    const appHeader = document.getElementById("app-header");

    if (loggedInUser) {
        // Show dashboard if logged in
        if (loginView) loginView.classList.add("hidden");
        if (registerView) registerView.classList.add("hidden");
        if (dashboardView) dashboardView.classList.remove("hidden");
        if (appHeader) appHeader.classList.remove("hidden");
        renderDashboard();
    } else {
        // Show login form if not logged in
        if (loginView) loginView.classList.remove("hidden");
        if (appHeader) appHeader.classList.add("hidden");
        if (dashboardView) dashboardView.classList.add("hidden");
    }

    // Event Listeners for switching views and forms
    document.getElementById("show-register")?.addEventListener("click", () => {
        if (loginView) loginView.classList.add("hidden");
        if (registerView) registerView.classList.remove("hidden");
    });

    document.getElementById("show-login")?.addEventListener("click", () => {
        if (registerView) registerView.classList.add("hidden");
        if (loginView) loginView.classList.remove("hidden");
    });
    
    document.getElementById("logout-button")?.addEventListener("click", () => {
        logoutUser();
        window.location.reload();
    });

    // Handle Login Form
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const users = getUsers();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            setLoggedInUser(user);
            window.location.reload();
        } else {
            alert("Invalid email or password.");
        }
    });
    
    // Handle Register Form (Fixed: Match new schema with interests/prompts/online)
    document.getElementById("register-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        const users = getUsers();
        if (users.some(u => u.email === email)) {
            alert("User with this email already exists.");
            return;
        }

        const newUser = {
            id: Date.now(), // Unique ID to avoid duplicates
            username,
            email,
            password,
            bio: "A little about me...", // From form if you add a bio input later
            image: "images/default.jpg",
            interests: [], // Empty array for new users
            prompts: [], // Empty array
            online: true // Default online
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration successful! Please login.");
        if (registerView) registerView.classList.add("hidden");
        if (loginView) loginView.classList.remove("hidden");
    });
}

function renderDashboard() {
    const users = getUsers();
    const currentUser = getLoggedInUser();
    const grid = document.getElementById("user-grid-container");
    if (!grid) {
        console.error('Grid container not found!');
        return;
    }
    grid.innerHTML = ""; // Clear existing grid

    if (!currentUser) {
        console.error('No logged-in user!');
        return;
    }

    const filteredUsers = users.filter(user => user.id !== currentUser.id);
    console.log(`Rendering ${filteredUsers.length} profiles...`); // Debug log

    filteredUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        const bioSnippet = (user.bio || 'No bio yet...').substring(0, 50) + '...';
        const statusIcon = (user.online || false) ? '●' : '○';
        const interestsPreview = (user.interests || []).slice(0, 2).map(i => `<span class="interest">${i}</span>`).join('') || '';
        card.innerHTML = `
            <a href="profile.html?userId=${user.id}">
                <img src="${user.image}" alt="${user.username}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI2MCIgY3k9IjYwIiByPSI2MCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjYwIiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QPC90ZXh0Pjwvc3ZnPg==';">
                <h2>${user.username} ${statusIcon}</h2>
                <p>${bioSnippet}</p>
                <div class="interests-preview">${interestsPreview}</div>
            </a>
        `;
        grid.appendChild(card);
    });

    if (filteredUsers.length === 0) {
        grid.innerHTML = '<p>No other users yet—invite friends!</p>';
    }
}


// --- PROFILE PAGE LOGIC ---
function initProfilePage() {
    const loggedInUser = getLoggedInUser();
    if(!loggedInUser) {
        window.location.href = "index.html";
        return;
    }
    
    const params = new URLSearchParams(window.location.search);
    const userId = parseInt(params.get("userId"));
    const users = getUsers();
    const user = users.find(u => u.id === userId);

    if (user) {
        document.getElementById("profile-header-title").textContent = `${user.username}'s Profile`;
        const container = document.getElementById("profile-container");
        if (!container) {
            console.error('Profile container not found!');
            return;
        }
        const interestsHtml = (user.interests || []).map(i => `<span class="interest">${i}</span>`).join('') || 'No interests listed.';
        const promptsHtml = (user.prompts || []).map(p => `<blockquote>${p}</blockquote>`).join('') || 'No prompts yet.';
        container.innerHTML = `
            <img src="${user.image}" alt="${user.username}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI5MCIgY3k9IjkwIiByPSI5MCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjkwIiB5PSIxMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UCA8L3RleHQ+PC9zdmc+';">
            <h1>${user.username}</h1>
            <p>${user.bio || 'No bio yet...'}</p>
            <div class="interests">${interestsHtml}</div>
            <div class="prompts">${promptsHtml}</div>
            <a href="chat.html?userId=${user.id}" class="chat-button">Chat with ${user.username}</a>
        `;
    } else {
        console.error('User not found:', userId);
        document.getElementById("profile-container").innerHTML = '<p>User not found.</p>';
    }
}


// --- CHAT PAGE LOGIC ---
function initChatPage() {
     const loggedInUser = getLoggedInUser();
     if(!loggedInUser) {
        window.location.href = "index.html";
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const receiverId = parseInt(params.get("userId"));
    const users = getUsers();
    const receiver = users.find(u => u.id === receiverId);
    
    if(!receiver) {
        console.error('Receiver not found:', receiverId);
        return; // or show an error
    }
    
    document.getElementById("chat-header-title").textContent = `Chat with ${receiver.username}`;

    renderMessages(receiverId);

    // Handle sending a message
    document.getElementById("chat-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = document.getElementById("message-input");
        if (input.value.trim() === "") return;

        saveMessage(receiverId, input.value);
        renderMessages(receiverId); // Re-render to show new message
        input.value = "";
    });
}

function renderMessages(receiverId) {
    const messageContainer = document.getElementById("message-history");
    if (!messageContainer) return;
    messageContainer.innerHTML = ""; // Clear old messages

    const loggedInUser = getLoggedInUser();
    const messages = getMessages(loggedInUser.id, receiverId);
    
    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${msg.senderId === loggedInUser.id ? 'sent' : 'received'}`;
        messageDiv.textContent = msg.content;
        messageContainer.appendChild(messageDiv);
    });

    // Auto-scroll to the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function getMessages(user1Id, user2Id) {
    try {
        const allMessages = JSON.parse(localStorage.getItem('messages')) || {};
        const chatKey = [user1Id, user2Id].sort().join('-'); // Consistent key for any chat pair
        return allMessages[chatKey] || [];
    } catch (e) {
        console.error('Error loading messages:', e);
        return [];
    }
}

function saveMessage(receiverId, content) {
    try {
        const allMessages = JSON.parse(localStorage.getItem('messages')) || {};
        const loggedInUser = getLoggedInUser();
        
        const newMessage = {
            senderId: loggedInUser.id,
            receiverId,
            content,
            timestamp: new Date()
        };
        
        const chatKey = [loggedInUser.id, receiverId].sort().join('-');
        
        if (!allMessages[chatKey]) {
            allMessages[chatKey] = [];
        }
        
        allMessages[chatKey].push(newMessage);
        localStorage.setItem('messages', JSON.stringify(allMessages));
    } catch (e) {
        console.error('Error saving message:', e);
    }
}