const form = document.querySelector('form');

// console.log(form);
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("i am submitting")
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector("#result")

    if(weight < 1 || isNaN(weight) || weight === ''){
        alert("Weight is required and should be a number greater than 0");
        return;
    }else if(height < 1 || isNaN(height) || height === ''){
        alert("Height is required and should be a number greater than 0");
        return;
    }else{
        const heightM = height / 100
        const bmi = (weight / (heightM * heightM)).toFixed(2)
        console.log(bmi);

        result.value = `${bmi}`;
    }
})

console.log("hello world")