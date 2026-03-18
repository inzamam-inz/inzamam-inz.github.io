// =============== THEME SWITCHER ===============
const themes = {
    blue: { primary: '#2563eb', light: '#3b82f6', dark: '#1d4ed8' },
    purple: { primary: '#7c3aed', light: '#8b5cf6', dark: '#6d28d9' },
    teal: { primary: '#0891b2', light: '#06b6d4', dark: '#0e7490' },
    orange: { primary: '#ea580c', light: '#f97316', dark: '#c2410c' },
    green: { primary: '#059669', light: '#10b981', dark: '#047857' },
    indigo: { primary: '#4f46e5', light: '#6366f1', dark: '#4338ca' },
    rose: { primary: '#e11d48', light: '#f43f5e', dark: '#be123c' },
    amber: { primary: '#d97706', light: '#f59e0b', dark: '#b45309' },
    slate: { primary: '#475569', light: '#64748b', dark: '#334155' },
    emerald: { primary: '#047857', light: '#059669', dark: '#065f46' }
};

const themeBtn = document.getElementById('themeBtn');
const mobileThemeBtn = document.getElementById('mobileThemeBtn');
const themeModal = document.getElementById('themeModal');
const themeModalClose = document.getElementById('themeModalClose');
const themeOptions = document.querySelectorAll('.theme-option');

// Load saved theme
const savedTheme = localStorage.getItem('portfolioTheme') || 'green';
applyTheme(savedTheme);
updateActiveTheme(savedTheme);

// Open theme modal
function openThemeModal() {
    themeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

if (themeBtn) {
    themeBtn.addEventListener('click', openThemeModal);
}

if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', openThemeModal);
}

// Close theme modal
function closeThemeModal() {
    themeModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (themeModalClose) {
    themeModalClose.addEventListener('click', closeThemeModal);
}

// Close on overlay click
if (themeModal) {
    themeModal.addEventListener('click', (e) => {
        if (e.target === themeModal) {
            closeThemeModal();
        }
    });
}

// Theme selection
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        applyTheme(theme);
        updateActiveTheme(theme);
        localStorage.setItem('portfolioTheme', theme);
        closeThemeModal();
    });
});

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (theme) {
        document.documentElement.style.setProperty('--color-primary', theme.primary);
        document.documentElement.style.setProperty('--color-primary-light', theme.light);
        document.documentElement.style.setProperty('--color-primary-dark', theme.dark);
    }
}

function updateActiveTheme(themeName) {
    themeOptions.forEach(option => {
        if (option.dataset.theme === themeName) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// =============== MOBILE MENU ===============
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

// Open mobile menu
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    });
}

// Close mobile menu
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    });
}

// Close menu when clicking overlay
if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close menu when clicking nav items
mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// =============== SMOOTH SCROLLING ===============
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

// =============== ACTIVE NAVIGATION ===============
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Update desktop nav
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
            
            // Update mobile nav
            mobileNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
