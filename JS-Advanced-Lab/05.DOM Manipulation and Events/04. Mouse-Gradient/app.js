function attachGradientEvents() {
    
    let btnElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    btnElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percent}%`
    })

}