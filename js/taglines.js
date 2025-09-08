// Rotating taglines
document.addEventListener("DOMContentLoaded", () => {
  const taglines = [
    "Because therapy's cheaper, but less fun.",
    "Not your average swipe—promise. 😏",
    "Mom-approved... mostly.",
    "Social app? Nah, the one without the endless scroll.",
    "Loneliness now has better WiFi.",
    "Keep it simple, keep it real. 💕",
    "Swipe right if you can handle my sarcasm level.",
    "Therapy's overrated—let's fix each other instead.",
    "Mom says I'm a catch; let's see if you agree.",
    "No drama, just good vibes and bad puns.",
    "WiFi strong, heart open—let's connect.",
    "Simple dates, complicated feelings? Sign me up.",
    "Because 'single' doesn't mean 'solo' forever.",
    "Mom's cooking is great, but your company? Better.",
    "Endless scrolls end here—real talks start.",
    "WiFi whispers: Your match is just a swipe away.",
    "Keep it casual, keep it kind, keep it coming.",
    "Therapy bills piling up? Try swiping instead.",
    "Mom-approved matches only (kidding, all welcome).",
    "Ditch the scroll, find the spark.",
    "Loneliness upgraded: Now with better connections.",
    "Simple swipes for not-so-simple stories.",
    "Because life's too short for boring bios.",
    "Mom's radar says you're a keeper—let's chat.",
    "No filters needed, just real and ready.",
    "WiFi got me here; you keep me staying.",
    "Keep it light, keep it right, keep it us.",
    "Therapy's fine, but coffee dates? Priceless.",
    "Mom's got opinions; I've got an open heart.",
    "Scroll less, smile more—starting now.",
    "Loneliness level: Expert. Upgrade with me?",
    "Simple app, epic connections ahead.",
    "Because 'what if' beats 'what now' every time.",
    "Mom says swipe wisely—I'm your best bet.",
    "End the solo queue; duo mode activated.",
    "WiFi signals strong; chemistry? Let's test.",
    "Keep it fun, keep it fresh, keep swiping.",
    "Therapy's a session; this is a revolution.",
    "Mom-approved vibes, zero judgments.",
    "No endless loops—just happy endings.",
    "Loneliness? Nah, just prepping for the plot twist.",
    "Simple hearts, big adventures waiting.",
    "Because every swipe's a potential story.",
    "Mom's wisdom: Date kind, laugh often.",
    "Scroll smarter, not harder—I'm here.",
    "WiFi dreams meet real-life beams.",
    "Keep it genuine, keep it growing.",
    "Therapy's talk; we're making moves.",
    "Mom says you're out there—found you!",
    "End the wait; start the great."
  ];

  let index = 0;
  const el = document.getElementById("tagline");

  setInterval(() => {
    index = (index + 1) % taglines.length;
    el.classList.remove("fade-in");
    void el.offsetWidth; // restart animation
    el.textContent = taglines[index];
    el.classList.add("fade-in");
  }, 4000);
});