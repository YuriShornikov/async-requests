const progress = document.getElementById('progress');
const form = document.querySelector('form');
const file = document.getElementById('file')



form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    

    const formData = new FormData();

    formData.append('file', file.files[0]);

    const uploadFile = new XMLHttpRequest();
    uploadFile.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');


    // обработчик прогресса
    uploadFile.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            const persent = (e.loaded / e.total) * 100;
            progress.value = persent;
        }
    })

    
    // обработчик запроса
    uploadFile.addEventListener('readystatechange', () => {
        if (uploadFile.readyState === uploadFile.DONE) {
            if (uploadFile.status === 200 || uploadFile.status === 201) {
                console.log('succses')
            } else {
                console.error(uploadFile.status, uploadFile.statusText)
            }
        }
    })
    
    uploadFile.send(formData);

})










