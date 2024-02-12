const words = document.querySelectorAll('.word');

    let index = 0;
    const interval = 2000; 

    function changeWord() {
        words.forEach(word => {
            word.classList.add('hidden');
        });

        words[index].classList.remove('hidden');
        document.querySelectorAll('.word').innerText = words[index].innerText;

        index++;
        if (index === words.length) {
            index = 0;
        }
    }

    changeWord();
    setInterval(changeWord, interval);