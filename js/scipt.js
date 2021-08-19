{
    // array met de antwoorden van beide vragen 
    const firstQuestion = [`nothing`, `only coffee`, `yoghurt with muesli`, `loaf of bread with Nutella`, `fresh pastry from the bakery`, `piece of fruit`]; 
    const secondQuestion = [`running`, `go to the gym`, `yoga`, `dancing`, `jump rope`, `nothing`]; 

    // countdown instellen
    let id = 10; 

    // ophalen van het huidige nummer 
    const getNumber = () => {
        return document.querySelector(`.countdown__number`).textContent;
    }; 
    // instellen van een nieuw nummer 
    const setNumber = (number) =>
        document.querySelector(`.countdown__number`).textContent = number; 
    // een animatie starten 
    const startAnimation = () => {
        document.querySelector(`.countdown__number`).classList.add(`fade`);
    };
    // countdown programmeren 
    
    const reduceNumber = () => {
        // haal het huidige nummer op
        let currentNumber = getNumber();
        if (currentNumber > 0) {
            // verminder het getal met 1 en toon dit op het scherm
            currentNumber--;
            setNumber(currentNumber);
            // } else if (currentNumber === 0) {
            // blink class toevoegen en timer stoppen
            // document.querySelector(`.countdown__number`).classList.add(`blink`);
        } else {
            startAnimation();
            clearInterval(id);
        }
    }; 

    // deze functie wordt uigevoerd bij het verzenden van het formulier
    const handleSubmitRegistration = e => {
        // het verzenden tegenhouden
        e.preventDefault();
        // resultaten tonen wanneer de gebruiker op submit heeft geklikt 
        showResultFailed(); 
        showResultSucceed(); 
    }

    const showResultFailed = () => {
        const breakfast = convertRadioButtonsToContent(`breakfast`);
        const sport = convertRadioButtonsToContent(`sport`); 
        console.log(breakfast); 
        console.log(sport); 

        const message = ` <h2 class="information__subtitle"><span>You're</span> in <span>time</span></h2>
           <p class="information__part test__failed-content"><span>Unfortunately,</span> it looks like you can easily make a choice within 10 seconds. You went for "${breakfast}" for breakfast and you have choosen "${sport}" as activity. You don't feel the pressure to make a decision. It's obvious that you aren't an Eternal Doubter so it doens't look like you'll fit in the community DICE. </p>`

        document.querySelector(`.test__failed`).classList.remove("part--hidden"); 
        document.querySelector(`.test__failed`).innerHTML = message; 
    }

    // deze functie geeft alle geselecteerde checkboxes terug op basis van de class
    const convertRadioButtonsToContent = className => {
        const selectedRadioButton = document.querySelector(`.${className}:checked`); 
        const selectedItem = selectedRadioButton.parentElement.textContent.trim();
        return selectedItem;  
    }

    // 2x random getal aanmaken 
    const getRandomNumber = () => {
        const randomNumber = Math.floor(Math.random()*6); 
        return randomNumber; 
    }
    const showResultSucceed = () => {
        const numberOne = getRandomNumber();
        const numberTwo = getRandomNumber();
        console.log(numberOne);
        console.log(numberTwo);

        const questionOne = firstQuestion[numberOne]; 
        const questionTwo = secondQuestion[numberTwo];
        console.log(questionOne); 
        console.log(questionTwo); 

        const congrats = `<h2 class="information__subtitle"><span>You're</span> past <span>time</span></h2> 
            <p class="information__part">
                <span>Congratulations!</span> You're exactly the person we are looking for. The dice has already chosen <span>for you.</span>You'll have "${questionOne}" for breakfast and "${questionTwo}" as excercise today. Pretty great, right?
            </p>
            <p class="information__part">
                The community of DICE gets that making a personal decision isn't as easy as you would expect but we can help you.
                Embrace faith and chance in this life. Trusting your dice will make life much less stressful and you will become aware
                that there are more important parts in life than you've noticed so far.
            </p>
            <p class="information__part">
                <span>Join us</span> and win time by letting your personalised dice make the choice for you. You will feel the freedom
                within minutes.
            </p>
           <form method="get" action="quiz.html" class="form-email">
            <div class="form-email__field">
                <label>We need your email so we can update you on your registration.
                    <input type="email" required placeholder="kaat.vermeire@telenet.be" size="50">
                </label>
            </div>
            <div class="form-email__submit">
                <input type="submit" value="Register" class="form-email__submit-button">
            </div>
        </form>`;

        document.querySelector(`.test__succeeded`).classList.remove("part--hidden");
        document.querySelector(`.test__succeeded`).innerHTML = congrats;

        const $email = document.querySelector(`.form-email`);
        $email.addEventListener(`submit`, handleSubmitEmail); 
    }

    const handleSubmitEmail = e => {
        // voorkomen dat het formulier verzonden wordt 
        e.preventDefault(); 

        const succes = `<p class="registration__succes information__part"><span>Thank you</span> for your subscription, you'll hear from <span>DICE</span> soon! </p>`; 

        document.querySelector(`.email__succes`).innerHTML = succes;

    }

    const init = () => {
        // start een timer die lke seconde de functie reduceNumber zal uitvoeren 
        id = setInterval(reduceNumber, 1000)

        // luisteren naar het verzenden van het formulier
        const $form = document.querySelector('.form-register');
        $form.addEventListener(`submit`, handleSubmitRegistration); 

        getRandomNumber(); 

        

    };

    init(); 
}

