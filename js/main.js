const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', event => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});