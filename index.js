const makeCount = ((ev) => {
if (isNaN(ev.target.value)) {
    resInput.value = "Неверные входные данные";
    return;
}
    for (const key in valuteCourseData) {
        if(valuteCourseData[key].Name === button.innerText) {
            resInput.value = numInput.value * valuteCourseData[key].Value
        }
    }
})
const numInput = document.querySelector('.num-input');
numInput.value = 1;
const resInput = document.querySelector('.result-input');
resInput.disabled = true;
let valuteCourseData = {};
const button = document.querySelector('.select-list-button');
let promise = fetch('https://www.cbr-xml-daily.ru/daily_json.js').
then(res => res.json()).
then(res => {
    valuteCourseData = res.Valute;
    numInput.dispatchEvent(new Event('input'));
})

numInput.addEventListener('input', makeCount);

let selectList = document.createElement('div');
selectList.classList.add('select-list');
promise.then(() => {
    for (const el in valuteCourseData) {
        selectList.innerHTML += '<div class="select-list-item">' + valuteCourseData[el].Name + '</div>';
    }
    const valutes = document.querySelectorAll('.select-list-item');
    for (const valuteKey of valutes) {
            valuteKey.addEventListener('click', (ev) => {
                button.innerText = ev.currentTarget.innerText;
                numInput.dispatchEvent(new Event('input'));
        })
    }
})

button.insertAdjacentElement("afterend", selectList);


button.addEventListener('click', (ev) => {
    selectList.classList.toggle('select-list-visible');
});
document.addEventListener('click', (ev) => {
    if (ev.target.className != 'select-list-item' && ev.target != button) {
        selectList.classList.remove('select-list-visible')
    }
})