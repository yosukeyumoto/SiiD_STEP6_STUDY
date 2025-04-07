( () => {
    let $counter = document.querySelector('#js-counter');

    const clickHandler = () => {
        $counter.textContent = 0;
        for(let j = 0; j < document.getElementsByClassName('js-button').length; j++){
            document.getElementsByClassName('js-button')[j].setAttribute('style','display:inline');
        }

        document.getElementById("js-counter").setAttribute('style','display:block');
        if (document.getElementById('power-up') !== null) {
            document.getElementById('power-up').remove();
            document.getElementsByClassName('counter')[0].setAttribute('style', 'color:#000');
        }
    };

    document.getElementById('js-reset-button').addEventListener('click', clickHandler);
})();