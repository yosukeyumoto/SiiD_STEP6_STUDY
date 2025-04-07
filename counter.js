(() => {
    const $counter = document.getElementById("js-counter");
    let powerUpText = '';

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if ($targetButton.textContent === '-') {
            $counter.textContent = currentCount - 1;
        } else if ($targetButton.textContent === '+') {
            $counter.textContent = currentCount + 1;
        } else if ($targetButton.textContent === '-10') {
            $counter.textContent = currentCount - 10;
        } else if ($targetButton.textContent === '-50') {
            $counter.textContent = currentCount -50;
        } else if ($targetButton.textContent === '-100') {
            $counter.textContent = currentCount - 100;
        } else if ($targetButton.textContent === '+') {
            $counter.textContent = currentCount + 1;
        } else if ($targetButton.textContent === '+10') {
            $counter.textContent = currentCount + 10;
        } else if ($targetButton.textContent === '+50') {
            $counter.textContent = currentCount + 50;
        } else if ($targetButton.textContent === '+100') {
            $counter.textContent = currentCount + 100;
        }

        currentCount = parseInt($counter.textContent);
        // if (document.getElementById('power-up') !== null && document.getElementById('power-up') !== undefined &&
        // document.getElementById('power-up').textContent !== undefined) {
        if (document.getElementById('power-up') !== null) {
            powerUpText = document.getElementById('power-up').textContent;
        } else {
            powerUpText = '';
        }
        
        if (currentCount > 1000) {
            
            if(powerUpText === undefined || powerUpText.length === 0) {
                if(confirm('1000より大きくなるとパワーアップしますが宜しいですか？')) {
                    alert('僕らはどこまでも強くなれるお。');
                    $counter.textContent = 1000;
                    let $powerUpHtml = document.createElement('div');
                    $powerUpHtml.setAttribute('id', 'power-up');
                    $powerUpHtml.innerText = 'Power Up Now';
                    document.getElementsByClassName('counter')[0].append($powerUpHtml);
                    document.getElementsByClassName('counter')[0].setAttribute('style', 'color:#f00');
                    powerUpText = document.getElementById('power-up').textContent;
                    for(let i = 0; i < document.getElementsByClassName('js-button-minus').length; i++){
                        document.getElementsByClassName('js-button-minus')[i].setAttribute('style','display:none');
                    }
                } else {
                    alert('進む勇気のないものは立ち去れ。');
                    $counter.textContent = 1000;
                }
            }
         // document.getElementsByClassName('js-button-minus')[0].setAttribute('style','display:none');
            
        } else if (currentCount < -999) {
            
            if(confirm('-1000以降小さくなると消滅しますが宜しいですか？')) {
                $counter.textContent = -1000;
                for(let j = 0; j < document.getElementsByClassName('js-button').length; j++){
                    document.getElementsByClassName('js-button')[j].setAttribute('style','display:none');
                    document.getElementById("js-counter").setAttribute('style','display:none');
                }

                setTimeout(() => {
                    alert('消滅しました。Resetボタンを押せばもう一度やり直せますよ。');
                }, 500); 
            } else {
                alert('あと一歩で命拾いしたな。');
                $counter.textContent = -999;
            }
        }

    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener('click', (e) => clickHandler(e));
    }

})();