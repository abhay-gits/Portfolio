/* Coming Soon */

function soon() {
    alert("Yet to be Set");
}

/* Music */

const music = document.getElementById('music');
const audio = document.getElementById('audio');

let flag = 0;
audio.volume = 0.3;

music.addEventListener('click', () => {
    const fn = () => {
        if (flag == 0) {
            audio.play();
            flag = 1;
        }
        else if (flag == 1) {
            audio.pause();
            audio.currentTime = 0;
            flag = 0;
        }
    }
    fn();
})
