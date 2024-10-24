function sendMessage() {

}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.getElementById('chat-container').classList.toggle('dark-mode');
    document.getElementById('chat-window').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
