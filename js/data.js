// js/data.js
// Dummy user data to simulate a database
// js/data.js
const users = [
    {
        id: 1,
        username: "Alex Carter",
        email: "alex.carter@example.com",
        password: "password123",
        bio: "Graphic designer who thrives on late-night coffee runs and sketching under starlight. I’m hunting for someone to brainstorm wild ideas with, share bad puns, and maybe steal my fries. Life’s too short for boring dates—let’s make art and chaos together.",
        image: "images/user1.jpg",
        interests: ["Art", "Coffee", "Hiking"],
        prompts: [
            "Two truths, one lie: I’ve designed a viral app, I hate pizza, I ran a marathon.",
            "Perfect date: Rooftop sketching with tacos and a sunset.",
            "Weird talent: I can name every Pantone color blindfolded."
        ],
        online: true
    },
    {
        id: 2,
        username: "Brianna Patel",
        email: "brianna.patel@example.com",
        password: "password123",
        bio: "Indie musician with a knack for getting lost on forest trails. My guitar’s my best friend, but I’m looking for someone to duet with—on hikes or in life. Bonus points if you can keep up with my playlist and my sarcasm.",
        image: "images/user2.jpg",
        interests: ["Music", "Nature", "Sarcasm"],
        prompts: [
            "Two truths, one lie: I’ve written 50 songs, I’m scared of heights, I’ve hiked the Rockies.",
            "Perfect date: Acoustic jam session by a campfire.",
            "Weird talent: I can whistle any song perfectly."
        ],
        online: false
    },
    {
        id: 3,
        username: "Chris Nguyen",
        email: "chris.nguyen@example.com",
        password: "password123",
        bio: "Tech startup guy who burns more calories in the kitchen than the gym. I code apps by day and whip up spicy ramen by night. Seeking a partner who’s down for food experiments and existential debates over wine.",
        image: "images/user3.jpg",
        interests: ["Tech", "Cooking", "Philosophy"],
        prompts: [
            "Two truths, one lie: I built an app at 16, I hate spicy food, I’ve pitched to VCs.",
            "Perfect date: Cooking class with a side of witty banter.",
            "Weird talent: I can chop onions without crying."
        ],
        online: true
    },
    {
        id: 4,
        username: "Diana Lopez",
        email: "diana.lopez@example.com",
        password: "password123",
        bio: "Book nerd who’s traveled 20 countries chasing stories and cozy libraries. I’m all about deep talks and spontaneous adventures—think midnight bookstore runs. Looking for a curious soul who’s ready to write the next chapter with me.",
        image: "images/user4.jpg",
        interests: ["Books", "Travel", "History"],
        prompts: [
            "Two truths, one lie: I’ve read 100 books this year, I hate planes, I’ve been to Japan.",
            "Perfect date: Bookshop crawl ending with coffee and debates.",
            "Weird talent: I can quote entire pages of Austen."
        ],
        online: true
    },
    {
        id: 5,
        username: "Ethan Kim",
        email: "ethan.kim@example.com",
        password: "password123",
        bio: "Photographer who sees the world through lenses and late-night stargazing. I’m happiest chasing sunsets or editing shots with lo-fi beats. Seeking someone who’s cool with impromptu road trips and doesn’t mind my terrible puns.",
        image: "images/user5.jpg",
        interests: ["Photography", "Travel", "Music"],
        prompts: [
            "Two truths, one lie: I’ve shot for Nat Geo, I hate beaches, I’ve camped in 10 states.",
            "Perfect date: Starlit picnic with a Polaroid session.",
            "Weird talent: I can spot a perfect frame in seconds."
        ],
        online: false
    },
    {
        id: 6,
        username: "Sofia Mendes",
        email: "sofia.mendes@example.com",
        password: "password123",
        bio: "Yoga teacher by day, aspiring stand-up comic by night. I’m all about balance—on the mat and in life—but my jokes might throw you off. Looking for someone who laughs at my puns and joins me for sunrise flows.",
        image: "images/user6.jpg",
        interests: ["Yoga", "Comedy", "Wellness"],
        prompts: [
            "Two truths, one lie: I’ve done yoga in Bali, I’m scared of clowns, I’ve bombed on stage.",
            "Perfect date: Morning yoga, evening open mic.",
            "Weird talent: I can do a headstand while reciting jokes."
        ],
        online: true
    },
    {
        id: 7,
        username: "Liam O’Connor",
        email: "liam.oconnor@example.com",
        password: "password123",
        bio: "Craft beer brewer who’s always chasing the perfect IPA. I love live music and late-night talks about the universe. Need a partner who’s down for brewery hops and doesn’t mind my dog stealing the spotlight.",
        image: "images/user7.jpg",
        interests: ["Brewing", "Music", "Dogs"],
        prompts: [
            "Two truths, one lie: I’ve brewed 50 beers, I hate dogs, I’ve seen 100 concerts.",
            "Perfect date: Brewery tour with live indie bands.",
            "Weird talent: I can name any beer’s hops blind."
        ],
        online: false
    },
    {
        id: 8,
        username: "Aisha Khan",
        email: "aisha.khan@example.com",
        password: "password123",
        bio: "Food blogger with a weakness for spicy street tacos. I’m always exploring new cuisines and hidden gem eateries. Looking for someone to share plates and witty banter—bonus if you can handle the heat!",
        image: "images/user8.jpg",
        interests: ["Food", "Travel", "Writing"],
        prompts: [
            "Two truths, one lie: I’ve eaten in 30 countries, I hate spice, I run a food blog.",
            "Perfect date: Food truck festival and stargazing.",
            "Weird talent: I can guess a dish’s spices by smell."
        ],
        online: true
    },
    {
        id: 9,
        username: "Noah Gupta",
        email: "noah.gupta@example.com",
        password: "password123",
        bio: "Gamer and coder who’s probably spent too much time in virtual worlds. I’m looking for a co-op partner for life’s adventures—online or IRL. Bonus points if you can beat me at Mario Kart.",
        image: "images/user9.jpg",
        interests: ["Gaming", "Coding", "Movies"],
        prompts: [
            "Two truths, one lie: I’ve coded a game, I hate sci-fi, I’m a speedrunner.",
            "Perfect date: Arcade night with pizza and trash talk.",
            "Weird talent: I can button-mash faster than anyone."
        ],
        online: true
    },
    {
        id: 10,
        username: "Emma Rossi",
        email: "emma.rossi@example.com",
        password: "password123",
        bio: "Florist with a passion for turning chaos into beauty. I spend my days arranging blooms and my nights dreaming of far-off places. Seeking someone who’s ready to grow a connection and doesn’t mind a little dirt.",
        image: "images/user10.jpg",
        interests: ["Gardening", "Travel", "Art"],
        prompts: [
            "Two truths, one lie: I’ve grown 100 roses, I hate flowers, I’ve been to Italy.",
            "Perfect date: Botanical garden walk and gelato.",
            "Weird talent: I can name any flower by petal shape."
        ],
        online: false
    },
    {
        id: 11,
        username: "Jamal Washington",
        email: "jamal.washington@example.com",
        password: "password123",
        bio: "Fitness coach who’s all about lifting weights and spirits. I love sunrise runs and deep talks over protein shakes. Looking for someone to keep pace with my hustle and share some laughs along the way.",
        image: "images/user11.jpg",
        interests: ["Fitness", "Running", "Motivation"],
        prompts: [
            "Two truths, one lie: I’ve run 10 marathons, I hate gyms, I coach pros.",
            "Perfect date: Morning jog, evening smoothie date.",
            "Weird talent: I can plank for 10 minutes straight."
        ],
        online: true
    },
    {
        id: 12,
        username: "Clara Jensen",
        email: "clara.jensen@example.com",
        password: "password123",
        bio: "History buff who’d rather explore ancient ruins than scroll social media. I’m all about stories—old ones or new ones we write together. Seeking a partner for museum dates and witty banter.",
        image: "images/user12.jpg",
        interests: ["History", "Travel", "Reading"],
        prompts: [
            "Two truths, one lie: I’ve visited Pompeii, I hate museums, I teach history.",
            "Perfect date: Museum tour with coffee debates.",
            "Weird talent: I can recite Roman emperors in order."
        ],
        online: false
    },
    {
        id: 13,
        username: "Mateo Alvarez",
        email: "mateo.alvarez@example.com",
        password: "password123",
        bio: "Biker and poet who finds freedom on two wheels and in words. I’m chasing sunsets and someone to share the ride with. If you love open roads and late-night verses, let’s roll.",
        image: "images/user13.jpg",
        interests: ["Biking", "Poetry", "Adventure"],
        prompts: [
            "Two truths, one lie: I’ve biked Route 66, I hate poetry, I’ve published a book.",
            "Perfect date: Motorcycle ride to a hidden diner.",
            "Weird talent: I can write a poem in 5 minutes."
        ],
        online: true
    },
    {
        id: 14,
        username: "Layla Chen",
        email: "layla.chen@example.com",
        password: "password123",
        bio: "Baker who’s always got flour on her apron and a story to tell. I love creating desserts and cozy nights in. Looking for someone to taste-test my recipes and spice up my life.",
        image: "images/user14.jpg",
        interests: ["Baking", "Storytelling", "Cozy Vibes"],
        prompts: [
            "Two truths, one lie: I’ve baked for celebs, I hate chocolate, I own a bakery.",
            "Perfect date: Baking cookies and watching old movies.",
            "Weird talent: I can ice a cake blindfolded."
        ],
        online: true
    },
    {
        id: 15,
        username: "Omar Hassan",
        email: "omar.hassan@example.com",
        password: "password123",
        bio: "Astronomer who’s spent too many nights staring at stars instead of profiles. I’m all about cosmic connections and bad sci-fi flicks. Seeking someone to share telescope time and galaxy-sized dreams.",
        image: "images/user15.jpg",
        interests: ["Astronomy", "Sci-Fi", "Dreaming"],
        prompts: [
            "Two truths, one lie: I’ve found a comet, I hate sci-fi, I teach astronomy.",
            "Perfect date: Stargazing with hot cocoa and blankets.",
            "Weird talent: I can name 50 constellations on sight."
        ],
        online: false
    },
    {
        id: 16,
        username: "Zoe Parker",
        email: "zoe.parker@example.com",
        password: "password123",
        bio: "Dancer who moves through life with rhythm and a little chaos. I’m all about late-night dance sessions and spontaneous adventures. Looking for a partner who can keep up on the floor and in life.",
        image: "images/user16.jpg",
        interests: ["Dance", "Adventure", "Music"],
        prompts: [
            "Two truths, one lie: I’ve danced on stage, I hate music, I teach salsa.",
            "Perfect date: Dance class followed by street food.",
            "Weird talent: I can freestyle to any beat."
        ],
        online: true
    },
    {
        id: 17,
        username: "Elijah Brooks",
        email: "elijah.brooks@example.com",
        password: "password123",
        bio: "Carpenter who builds furniture and dreams in equal measure. I love quiet hikes and loud debates about life’s big questions. Seeking someone to craft memories with—sawdust optional.",
        image: "images/user17.jpg",
        interests: ["Woodworking", "Hiking", "Philosophy"],
        prompts: [
            "Two truths, one lie: I’ve built a cabin, I hate nature, I sell furniture.",
            "Perfect date: Forest walk and a picnic.",
            "Weird talent: I can carve a spoon in 30 minutes."
        ],
        online: false
    },
    {
        id: 18,
        username: "Maya Singh",
        email: "maya.singh@example.com",
        password: "password123",
        bio: "Journalist who’s always chasing the next big story or sunset. I love rooftop bars and deep conversations about everything and nothing. Looking for someone to share headlines and heartbeats.",
        image: "images/user18.jpg",
        interests: ["Writing", "Travel", "Debates"],
        prompts: [
            "Two truths, one lie: I’ve interviewed a president, I hate news, I’ve been to 15 countries.",
            "Perfect date: Rooftop drinks with city views.",
            "Weird talent: I can type 120 words per minute."
        ],
        online: true
    },
    {
        id: 19,
        username: "Lucas Ferreira",
        email: "lucas.ferreira@example.com",
        password: "password123",
        bio: "Surfer who’s happiest riding waves or chilling with vinyl records. I’m all about salty air and soulful music. Seeking a partner for beach days and late-night jam sessions.",
        image: "images/user19.jpg",
        interests: ["Surfing", "Music", "Beach Life"],
        prompts: [
            "Two truths, one lie: I’ve surfed Pipeline, I hate the ocean, I collect vinyl.",
            "Perfect date: Beach bonfire with acoustic tunes.",
            "Weird talent: I can balance on a board forever."
        ],
        online: true
    },
    {
        id: 20,
        username: "Amara Diallo",
        email: "amara.diallo@example.com",
        password: "password123",
        bio: "Environmentalist who’s fighting for the planet and a good time. I love kayaking and debating climate policy over craft coffee. Looking for someone to paddle through life with—activism optional.",
        image: "images/user20.jpg",
        interests: ["Environment", "Kayaking", "Coffee"],
        prompts: [
            "Two truths, one lie: I’ve planted 1,000 trees, I hate water, I’ve lobbied Congress.",
            "Perfect date: Kayaking and coffee by the river.",
            "Weird talent: I can identify any bird by its call."
        ],
        online: false
    },
    {
        id: 21,
        username: "Isaac Morales",
        email: "isaac.morales@example.com",
        password: "password123",
        bio: "Illustrator who draws inspiration from city streets and quiet nights. I’m all about sketching dreams and sharing stories over pizza. Seeking someone who’s cool with my doodle-filled life.",
        image: "images/user21.jpg",
        interests: ["Art", "City Life", "Food"],
        prompts: [
            "Two truths, one lie: I’ve illustrated a book, I hate pizza, I’ve shown in galleries.",
            "Perfect date: Street art tour and pizza night.",
            "Weird talent: I can draw your portrait in 5 minutes."
        ],
        online: true
    },
    {
        id: 22,
        username: "Nia Thompson",
        email: "nia.thompson@example.com",
        password: "password123",
        bio: "Podcaster who’s always got a mic and a million thoughts. I love diving into weird topics and laughing over late-night snacks. Looking for someone to co-host life’s adventures with.",
        image: "images/user22.jpg",
        interests: ["Podcasting", "Humor", "Food"],
        prompts: [
            "Two truths, one lie: I’ve interviewed a rockstar, I hate talking, I have 10k listeners.",
            "Perfect date: Recording a podcast over tacos.",
            "Weird talent: I can mimic any accent perfectly."
        ],
        online: true
    },
    {
        id: 23,
        username: "Hugo Silva",
        email: "hugo.silva@example.com",
        password: "password123",
        bio: "Cyclist who lives for the thrill of the ride and good coffee. I’m happiest pedaling through new cities or chilling with a book. Seeking someone to race through life with—helmets optional.",
        image: "images/user23.jpg",
        interests: ["Cycling", "Coffee", "Books"],
        prompts: [
            "Two truths, one lie: I’ve biked across Europe, I hate coffee, I’ve read 200 books.",
            "Perfect date: Bike ride to a cozy café.",
            "Weird talent: I can fix a flat tire in 3 minutes."
        ],
        online: false
    },
    {
        id: 24,
        username: "Leila Bahrami",
        email: "leila.bahrami@example.com",
        password: "password123",
        bio: "Potter who finds peace in clay and chaos in life. I love crafting ceramics and late-night talks about dreams. Looking for someone to shape something beautiful with—messy hands welcome.",
        image: "images/user24.jpg",
        interests: ["Pottery", "Art", "Dreaming"],
        prompts: [
            "Two truths, one lie: I’ve sold pottery globally, I hate art, I teach ceramics.",
            "Perfect date: Pottery class and wine night.",
            "Weird talent: I can throw a perfect vase in one try."
        ],
        online: true
    },
    {
        id: 25,
        username: "Finn Murphy",
        email: "finn.murphy@example.com",
        password: "password123",
        bio: "Barista by day, poet by night, dreamer 24/7. I’m all about crafting the perfect latte and chasing deep connections. Seeking someone who loves coffee, poetry, and laughing at life’s absurdities.",
        image: "images/user25.jpg",
        interests: ["Coffee", "Poetry", "Humor"],
        prompts: [
            "Two truths, one lie: I’ve won a poetry slam, I hate coffee, I’ve worked at 10 cafés.",
            "Perfect date: Coffee shop poetry reading.",
            "Weird talent: I can make latte art in 10 seconds."
        ],
        online: true
    }
];

// Store in localStorage (unchanged from your setup)
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}