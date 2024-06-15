let darkMode = true;

const toggleBtn = document.getElementById('mode');

toggleBtn.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    event.currentTarget.querySelector('span').textContent = `${mode} Mode ativado!`;
    darkMode = !darkMode;
})