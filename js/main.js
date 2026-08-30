document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        let isValid = true;
        clearError();

        
        if (nameInput.value.trim() === '') {
            showError('error-name', 'El nombre es obligatorio.');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError('error-email', 'El correo electrónico es requerido.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            showError('error-email', 'Ingrese un formato de correo válido.');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            showError('error-message', 'El mensaje no puede estar vacío.');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError('error-message', 'El mensaje debe ser al menos de 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            const status = document.getElementById('form-status');
            status.style.color = '#a78bfa';
            status.textContent = '¡Mensaje enviado correctamente!';
            form.reset();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearError() {
        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(error => error.textContent = '');
        document.getElementById('form-status').textContent = '';
    }
});