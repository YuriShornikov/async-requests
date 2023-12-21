const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const info = new XMLHttpRequest();

info.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
info.send();

info.addEventListener('readystatechange', () => {
    if (info.readyState === info.DONE) {
        const jsonString = info.responseText;
        const dataJson = JSON.parse(jsonString);

        // находим title и answers
        const dataTitle = dataJson.data.title;
        const dataArr = dataJson.data.answers;

        pollTitle.textContent = dataTitle;

        // распаковываем данные с выбором ответа
        dataArr.forEach(element => {

            // создаем кнопку для элемента
            const btn = document.createElement('button');
            btn.classList.add('.poll__answer');
            btn.textContent = element;
            pollAnswers.append(btn);

            // описываем событие
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        });
        
    }
})