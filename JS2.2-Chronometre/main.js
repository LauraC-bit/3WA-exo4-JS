const main = () => {

    let isFunctionRun = false;
    let centieme = 0;
    let seconde = 0;
    let minute = 0;
    const chronoP = document.getElementById("chrono");
    const startStop = document.getElementById("startStop");
    const reset = document.getElementById("reset");

    const functionTimer = () => {
        
        let timeOut = window.setTimeout(function1, 10);

    }

    let function1 = () => {
        if (isFunctionRun === true) {
            centieme++;
            
            if (centieme === 100) {
                seconde++;
                centieme = 0;
                
            }

    

            if (seconde === 60) {
                minute++;
                seconde = 0;
            }

       
            chronoP.innerHTML = `${minute} :${seconde} :${centieme}`;
            functionTimer();
        }
    }

    

    reset.addEventListener("click", (event) => {
        minute = 0;
        seconde = 0;
        centieme = 0;
        chronoP.innerHTML = `${minute} :${seconde} :${centieme}`;
    })

    startStop.addEventListener("click", (event) => {

        
        
        if (isFunctionRun === false) {
            isFunctionRun = true;
            functionTimer()
        } else {
            isFunctionRun = false;
        }
    })
}

window.addEventListener("load", main);


