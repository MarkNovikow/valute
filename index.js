const handleInputChange = ((ev) => {
if (isNaN(ev.target.value)) {
    resInput.value = "Неверные входные данные";
    return;
}
    for (const key in valuteCourse) {
        if(valuteCourse[key].Name === button.innerText) {
            resInput.value = numInput.value * valuteCourse[key].Value
        }
    }
})
const numInput = document.querySelector('.num-input');
numInput.value = 1;
const resInput = document.querySelector('.result-input');
resInput.disabled = true;
let valuteCourse = {};
let promise = fetch('https://www.cbr-xml-daily.ru/daily_json.js').
then(res => res.json()).
then(res => {
    valuteCourse = res.Valute;
    numInput.dispatchEvent(new Event('input'));
})
const button = document.querySelector('.select-list');

numInput.addEventListener('input', handleInputChange);