const inputLink = document.getElementById('inputLink');
const botaoGenerator = document.getElementById('botaoGenerator');
const codeImg = document.getElementById('codeImg');
const containerCode = document.getElementById('containerCode');

botaoGenerator.addEventListener('click', () => {
    let conteudo = inputLink.value;

    if (conteudo == '') {
        alert('Insira um link válido');
    } else {
        botaoGenerator.innerText = 'Gerando QR Code! Aguarde...';

        let qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${conteudo.trim()}`;
    
        console.log(qrcode)
        containerCode.classList.add('container__code-activated');

        codeImg.classList.add('code__imagem-activated');
        codeImg.src = qrcode;
    }

    codeImg.addEventListener('load', () => {
        botaoGenerator.innerText = 'CONCLUIDO'
        botaoGenerator.classList.add('generator__botao-concluded')
    })
})