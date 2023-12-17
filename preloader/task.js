const loader = document.getElementById('loader');
const item = document.querySelector('.item');

const course = new XMLHttpRequest();

course.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
course.send();

course.addEventListener('readystatechange', () => {
    if (course.readyState === course.DONE) {
        const jsonString = course.responseText;
        const data = JSON.parse(jsonString);
        const valutes = data.response.Valute;

        


        for (const key in valutes) {
            const currency = valutes[key].CharCode
            const currency_value = valutes[key].Value
            const item_new = document.createElement('div')
            item_new.style.display = 'flex';
            item.style.flexFlow = 'column';
            item_new.innerHTML += `<div class="item__code">${currency}</div>
                            <div class="item__value">${currency_value}</div>
                            <div class="item__currency">руб.</div>
                            `
            item.append(item_new);  
        }
    }
    loader.classList.remove('loader_active');
})
