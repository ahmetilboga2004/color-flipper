let button = document.querySelector(".change");
let span = document.querySelector(".color-code");

button.addEventListener("click", function(){
    let randomColor = genHexString(6);
    document.body.style.backgroundColor = `#${randomColor}`;
    span.textContent = `#${randomColor}`;
});


function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}
