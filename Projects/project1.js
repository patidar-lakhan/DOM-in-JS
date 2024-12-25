const button = document.querySelectorAll(".button");
// console.log(button);

const bodys = document.querySelector('body');

// console.log(bodys);

// bodys.style.backgroundColor = 'red';
button.forEach(function (button) {
    //console.log(button);
    button.addEventListener("click", function(e) {
        console.log(e.target.id)
        if(e.target.id === 'grey'){
            bodys.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            bodys.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            bodys.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            bodys.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'black'){
            bodys.style.backgroundColor = e.target.id;
        }
    })
})