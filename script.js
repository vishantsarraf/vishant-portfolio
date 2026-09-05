// Initialize Lucide icons
lucide.createIcons();[cite: 7]

// Theme Toggle Logic
const toggleBtn = document.getElementById('themeToggle');[cite: 7]
const htmlEl = document.documentElement;[cite: 7]

// Check and apply saved user preference from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

toggleBtn.addEventListener('click', () => {[cite: 7]
  const currentTheme = htmlEl.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlEl.setAttribute('data-theme', newTheme);[cite: 7]
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});[cite: 7]

function updateThemeIcon(theme) {
  toggleBtn.innerHTML = theme === 'light' 
    ? '<i data-lucide="sun"></i>' [cite: 7]
    : '<i data-lucide="moon"></i>';[cite: 7]
  lucide.createIcons();[cite: 7]
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});