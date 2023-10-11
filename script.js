let wrapAttach = document.querySelector('.wrap-attach');
let input = document.getElementById('file');


const trigger = () => {
    input.click();
}
wrapAttach.addEventListener('click', trigger);

let prev = document.querySelector('.picture-loaded')

function download(input) {
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let img = document.createElement('img');
        prev.appendChild(img);
        img.src = reader.result;

        const close = document.createElement('div');
        close.classList.add('close-sign-div');
        const redClose = document.createElement('img');
        redClose.src = './pics/images.png';
        redClose.classList.add('close-sign-red');

        const p = document.querySelector('.picture-loaded');
        p.appendChild(close);
        close.appendChild(redClose);
        function removeImg() {
            img.remove();
            close.remove();
        }

        close.onclick = removeImg;
    }

}


const stars = document.querySelectorAll('.star');
const starsArray = Array.prototype.slice.call(stars);

starsArray.forEach(item => item.addEventListener('click', () =>
    item.parentNode.dataset.sumValue = item.dataset.starVal

)
)


