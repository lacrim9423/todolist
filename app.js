const add = document.querySelector('#add');
const container = document.querySelector('.container');
const hidden = document.querySelector('.hidden');
const body = document.querySelector('body');
const submit = document.querySelector('#submit');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const time = document.querySelector('#time');
const date = document.querySelector('#date');
const form = document.querySelector('.addItem');
const list = document.querySelector('#todo');
const listItem = document.querySelectorAll('.item');

add.addEventListener('click', ()=>{
    hidden.classList.remove('scale-out-center');
    container.classList.add('blur');
    hidden.classList.add('scale-in-center');
    hidden.style.display = "block";
})
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerHTML = `
    <h3 class="h3">${title.value}</h3>
            <div class="time-container">
                <span class="date">${date.value}</span>
                <span>   à  </span>
                <span class="time">${time.value}</span>
            </div>
            <div>
                <p class="description">${description.value}</p>
                <button class="close">X</button>
            </div>
    `;
    list.insertBefore(newLi, list.childNodes[-1]);
    hidden.classList.remove('scale-in-center');
    hidden.classList.add('scale-out-center');
    container.classList.remove('blur');
    time.value = "";
    title.value = "";
    date.value = "";
    description.value = "";
});


body.addEventListener('click', (e)=>{
    if(e.target.classList.contains('close')){
        e.target.parentNode.parentNode.remove()
    }
})