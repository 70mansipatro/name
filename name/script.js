document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            window.location.href = 'display.html';
        });
    }

    
    if (window.location.pathname.includes('display.html')) {
        document.getElementById('displayFirstName').textContent = localStorage.getItem('firstName') || '';
        document.getElementById('displayLastName').textContent = localStorage.getItem('lastName') || '';
        
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
    }
});