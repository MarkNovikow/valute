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
const button = document.querySelector('.select-list');
let promise = fetch('https://www.cbr-xml-daily.ru/daily_json.js').
then(res => res.json()).
then(res => {
    valuteCourseData = res.Valute;
    numInput.dispatchEvent(new Event('input'));
})


numInput.addEventListener('input', makeCount);
