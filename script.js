// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('bg-[#020617]/90', 'backdrop-blur-md');
    } else {
        nav.classList.remove('bg-[#020617]/90', 'backdrop-blur-md');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Tab Switching Logic
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active styles from all tabs
        tabs.forEach(t => {
            t.classList.remove('bg-ff-orange/20', 'text-ff-orange', 'border-ff-orange');
            t.classList.add('bg-white/5', 'text-gray-400', 'border-white/10');
        });
        
        // Add active styles to clicked tab
        tab.classList.remove('bg-white/5', 'text-gray-400', 'border-white/10');
        tab.classList.add('bg-ff-orange/20', 'text-ff-orange', 'border-ff-orange');

        // Hide all tab contents
        contents.forEach(c => c.classList.add('hidden'));
        
        // Show the target content
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// Handle Claim Button Click
function handleClaim(e) {
    e.preventDefault();
    
    const modal = document.getElementById('processingModal');
    const modalContent = document.getElementById('modalContent');
    const stepProcessing = document.getElementById('stepProcessing');
    const stepError = document.getElementById('stepError');

    // Show Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Trigger animation
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);

    // Reset steps
    stepProcessing.classList.remove('hidden');
    stepError.classList.add('hidden');

    // Simulate API Call/Processing
    setTimeout(() => {
        stepProcessing.classList.add('hidden');
        stepError.classList.remove('hidden');
    }, 2500);
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('processingModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300);
      }
