var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = parseInt(currentNumberWrapper.innerHTML);

const addButton = document.querySelector('.add');
addButton.addEventListener("click", () => {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    // if(currentNumber >= 0) {
    //     currentNumberWrapper.style.color ='white';
    // }    

    if(currentNumber >= 0) {
        subtractButton.disabled = false;
    }
});

const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener("click", () => {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    // if(currentNumber < 0) {
    //     currentNumberWrapper.style.color ='red';
    // }

    if(currentNumber === 0) {
        subtractButton.disabled = true;
    }     

});