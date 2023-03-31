const h2 = document.querySelector('.titleName');

const typing = function (e, counter = 0) {
    const text = `SONAGI GAME`;
    setInterval(() => {

        if (text.length === counter) {
            return;
        };
        h2.textContent += text[counter];

        counter++;
    }, 200);
};
typing();


function nextPage() {

    setTimeout(page, 4000) 

}
const page = () => {

    location.href = "../../html/mainGame/main.html"

}
nextPage();  