import greeting from './templates/greeting.hbs'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    const result = greeting({username: 'Savva Siry'});


    root.innerHTML = result

    setTimeout(()=> {
        root.innerHTML = greeting({username: 'Obi Wan Kenobi'})},
        5000);
})