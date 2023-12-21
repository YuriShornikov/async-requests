const progress = document.getElementById('progress');
const form = document.querySelector('form');

// progress.value = 0.7;

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
})

const upload = new XMLHttpRequest();

const formData = new FormData();



formData.append('file', inputFileElement.files[0]);

upload.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')




upload.addEventListener('readystatechange', () => {
    if (upload.readyState === upload.DONE) {
            
            const btn = document.getElementById('send');
            btn.addEventListener('click', () => {
                console.log('ok')
            })
    }
})

upload.send(formData);