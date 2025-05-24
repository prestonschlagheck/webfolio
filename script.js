document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactDropdown = document.getElementById('contactDropdown');

    contactBtn.addEventListener('click', function() {
        contactDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!contactBtn.contains(event.target) && !contactDropdown.contains(event.target)) {
            contactDropdown.classList.remove('active');
        }
    });

    // Modal logic
    const modalLinks = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = 'modal-' + link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.closest('.modal').classList.remove('active');
        });
    });

    // Close modal when clicking outside modal-content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}); 