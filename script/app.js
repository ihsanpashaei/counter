function operat (mode) {
    const myInput = document.getElementById('input');
    let counter = myInput.value;  
    if (mode == 'minus') {
        if (counter > 0) {
            
            counter--;
        }
    }else {
        counter++;
    }
    myInput.value = counter;

}

document.getElementById('minus').addEventListener(
    'click',
    function () {
        operat('minus')

    }
)

document.getElementById('plus').addEventListener(
    'click',
    function () {
        operat('plus')

    }

)