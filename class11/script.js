function showMessage(){
    alert("Hello");
}


let rajkumar = document.getElementById("btn");
rajkumar.addEventListener("click", function(){
    alert("Hello");
});


function getName() {
    var n = document.getElementById('name').value;

    document.getElementById('display').textContent = n;
}

document.getElementById("myForm")
.addEventListener("submit", function(){
 console.log("Submitted");

});

document.getElementById('click-button').addEventListener('click', function (e) {
    e.preventDefault();//prevent default behavior of any event
    console.log('hi click is working');//event object
});

function focusEvent() {
    document.getElementById("input-one").style.border = "2px solid pink";
}


function keydownEvent() {
    
    document.getElementById("input-two").style.border = "2px solid yellow";
    document.getElementById("input-two").style.backgroundColor = "yellow";
}


function blurEvent() {
    document.getElementById("input-three").style.backgroundColor = "pink";

}

function keyupEvent() {
    document.getElementById("input-four").style.backgroundColor = "orange";

}

function keypressEvent() {
    document.getElementById("input-six").style.backgroundColor = "blue";

}

function handleData() {
    var n = document.getElementById('input-six').value;
    console.log(n);

    document.getElementById('display-change').innerHTML = n;
}

let butn =
document.getElementById("btn");

butn.addEventListener("click", function(){

    document.getElementById("myImage")
    .style.display = "block";

});

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    alert("Form submitted!");
  });


  document.getElementById("hoverDiv").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightgreen";
  });

//    e.preventDefault()

// document.getElementById("clickBtn").addEventListener("click", function () {
//     alert("You clicked the button!");
//   });

//   document.getElementById("hoverDiv").addEventListener("mouseover", function () {
//     this.style.backgroundColor = "lightgreen";
//   }); 

  

//   document.getElementById("liveInput").addEventListener("input", function () {
//     document.getElementById("outputText").textContent = this.value;
//   });



//attach an event through js
// addEventListerner(event name, callback function)
// function changeColor(){
//     document.getElementById("hover-button").style.backgroundColor = "orange";
// }


// function showMessage(){
//     alert('hi,button is clicked');
// }



document.getElementById('input-one').addEventListener("focus", focusEvent);

document.getElementById('check').addEventListener("click", function (event) {
    event.preventDefault();
})

document.getElementById('amazon-data').addEventListener("click", function (event) {
    event.preventDe0911111111fault();
})

// onload: body, iframe, img


// document.getElementById('form').addEventListener("submit", function(e) {
    
// });


