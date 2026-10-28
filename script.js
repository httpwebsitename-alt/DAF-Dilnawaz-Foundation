// Dilnawaz Foundation Modern Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // Theme Switcher Logic
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlElement = document.documentElement;

  // Check saved theme or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    htmlElement.classList.remove('dark');
  } else {
    htmlElement.classList.add('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      
      // Re-initialize icons if necessary
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  }

  // Initialize Lucide Icons across dynamic components
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
