document.addEventListener('DOMContentLoaded', function() {
    // Unified modal logic
    const modalOverlay = document.getElementById('unified-modal');
    const modalBox = modalOverlay.querySelector('.modal-box');
    const modalContentArea = document.getElementById('modal-content-area');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalLinks = document.querySelectorAll('.modal-link[data-modal]');

    // Modal content for each section
    const modalContent = {
        about: `
            <div class="modal-header">
                <div class="profile-circle"><img src="profile.jpeg" alt="Profile Picture"></div>
                <h2>About</h2>
            </div>
            <div class="modal-body">
                <p>I'm a Finance major and Computer Science minor at the University of South Carolina, actively involved in Sigma Phi Epsilon and Alpha Kappa Psi. With a background in the service industry and several internships, I've developed strong adaptability and problem-solving skills. I'm passionate about investments and aim to combine my interests in finance, AI, and coding to create innovative solutions in the field.</p>
            </div>
        `,
        experience: `
            <div class="modal-header"><h2>Experience</h2></div>
            <div class="modal-body">
                <p>Details about your work, internships, and leadership experience will go here.</p>
            </div>
        `,
        projects: `
            <div class="modal-header"><h2>Projects</h2></div>
            <div class="modal-body">
                <ul>
                    <li>Project 1: Description coming soon</li>
                    <li>Project 2: Description coming soon</li>
                    <li>Project 3: Description coming soon</li>
                </ul>
            </div>
        `,
        certifications: `
            <div class="modal-header"><h2>Certifications</h2></div>
            <div class="modal-body">
                <p>Details about your certifications will go here.</p>
            </div>
        `,
        interests: `
            <div class="modal-header"><h2>Interests</h2></div>
            <div class="modal-body">
                <p>Details about your interests will go here.</p>
            </div>
        `
    };

    function openModal(type) {
        // Fade out close button if visible
        closeBtn.style.opacity = 0;
        setTimeout(() => {
            modalContentArea.innerHTML = modalContent[type] || '';
            modalOverlay.classList.add('active');
            setTimeout(() => {
                closeBtn.style.opacity = 1;
            }, 150);
        }, 150);
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        closeBtn.style.opacity = 0;
    }

    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-modal');
            openModal(type);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) closeModal();
    });
}); 