function getName() {
    //get element by id
    var n = document.getElementById('name').value;
    console.log(n);

    if (n.trim() == '') {
        document.getElementById('name-error').innerHTML = 'Please enter name';
    } else if (n.length <= 3) {
        document.getElementById('name-error').innerHTML = 'Add more characters';
    }

    document.getElementById('display').textContent = n;
    // document.getElementById('display').innerHTML = n;

    //getelement by className  

    var list = document.getElementsByClassName('item');
    console.log(list);//treat like an array

    var listArray = [];
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].innerHTML);
        listArray.push(list[i].innerHTML);
    }

    console.log(listArray);

    for (var j = 0; j < listArray.length; j++) {
        if ('html'.toLowerCase() === listArray[j].toLowerCase()) {
            console.log('item found');
        }
    }

    //get element by tagname
    var liItems = document.getElementsByTagName('li');
    console.log(liItems);//treat like an array

    //Query Selectors (css selector)
    //query selector selects the first
    document.querySelector(".example").innerHTML = 'World';

    document.querySelector("ul li").innerHTML = 'World';

    //query selector selects the all
    var items = document.querySelectorAll(".example");
    console.log(items);//treat like an array

    for (var z = 0; z < items.length; z++) {
        items[z].innerHTML = 'World';
    }

    var item = document.querySelectorAll("li");
    console.log(item);//treat like an array

    // restructuring of object

    // Create a node(html element)
    var element = document.createElement('div');
    console.log(element);
    element.innerHTML = 'DOM';
    document.body.appendChild(element);  // <div>DOM</div>

    //  update DOM node
    var newItem = document.createElement('li');
    newItem.innerHTML = 'ReactJs';
    document.querySelector('ul').appendChild(newItem);
    console.log(newItem);

    var newInput = document.createElement('input');
    newInput.type = 'text';
    document.body.appendChild(newInput);

    //delete node
    var e = document.querySelector('li:first-child');
    e.remove();

    //adding styles
    document.body.style.color = "orange";
    document.body.style.backgroundColor = "black";
    document.body.style.fontSize = '20px';
    document.body.style.fontFamily = "arial";

    document.getElementById('display').style.backgroundColor = "pink";

    document.getElementById('disply-block').style.display = "block";

}


var r=document.createElement('div')
 console.log(r)
var s=document.createElement('p')
console.log(s)
s.textContent='hi,i am p tag inside div tag'
console.log(s.textContent)

r.appendChild(s)
document.body.appendChild(r) //
console.log(r)
//  <div> 
//  //<p>hi,i am p tag inside div tag</p>
// </div>


// const div = document.createElement('div');   // <div>
// const p = document.createElement('p');       // <p>

// p.textContent = 'Hello, world!';

// div.appendChild(p);

// document.body.appendChild(div);

// const button = document.createElement('button');
// button.innerHTML = 'Click Me';
// button.className = 'btn btn-primary';

// document.body.appendChild(button);
// console.log(button)



var c=document.body.children;
console.log(c)
var f=document.getElementById('form').children;
console.log(f);

//1.getting element by id name: Selects a single element by its unique ID.
var element = document.getElementById('myElement');
console.log(element);
var elementContent = document.getElementById('myElement').textContent;
console.log(elementContent);

var h1ramesh=document.getElementById('h1ramesh')
console.log(h1ramesh);
var h1rameshContent=document.getElementById('h1ramesh').textContent;
console.log(h1rameshContent);

//2.getting element by classname :Selects all elements with a specific class name.Returns an HTMLCollection.
var elements = document.getElementsByClassName('myClass');
console.log(elements);
// var elementContent = document.getElementsByClassName('myClass').textContent;
// console.log(elementContent); //we cannot directly access textContent on the entire collection.
var elementContent = document.getElementsByClassName('myClass')[0].textContent;
console.log(elementContent);
var elements = document.getElementsByClassName('myClass');
for (var i = 0; i < elements.length; i++) {// Loop through the collection to get textContent of each element
  console.log(elements[i].textContent);
}

//3.getting elwmwnt by tagname:Selects all elements by their tag name (e.g., div, p, h1). Returns an HTMLCollection.
var elements = document.getElementsByTagName('div');
console.log(elements);

//4.querySelector():Selects the first element that matches a CSS selector (ID, class, tag, or combination)
var element = document.querySelector('.myClass');
console.log(element);

//5.querySelectorAll():Selects all elements that match a CSS selector and returns a NodeList (which is similar to an array).
var elements = document.querySelectorAll('.myClass');
console.log(elements);


//6. getElementsByName():Selects all elements that have a specific name attribute. Returns an HTMLCollection.
var elements = document.getElementsByName('username');
console.log(elements);

//7. Accessing the children property:Selects the child elements of a specific element (as you've used in your code).
var form = document.getElementById('form').children;
console.log(form);

//8. parentNode:Selects the parent element of a given element.
var childElement = document.getElementById('myElement');
var parentElement = childElement.parentNode;
console.log(parentElement);


var newd=document.createElement('div');
console.log(newd)
newd.textcontent='this is newd content';


//creating new element
// Step 1: Create a new div element
var newDiv = document.createElement('div');
// Step 2: Add content to the new div
newDiv.textContent = 'This is a newly created div element!';
// Step 3: Append the new div to the container element
var c = document.getElementById('container');
c.appendChild(newDiv);
console.log(c)

//styling
newDiv.style.color = 'green'; // Change text color
newDiv.setAttribute('class', 'new-class'); // Add class attribute

var newdiv=document.createElement('div');
var newh1=document.createElement('h1');
var newp=document.createElement('p');
newh1.textContent='i am javascript created h1 tag';
newp.textContent='i am javascript created p tag';
newdiv.appendChild(newh1);``
newdiv.appendChild(newp);
document.body.appendChild(newdiv);
// newdiv.style.color='green';
newh1.style.color='red';
newdiv.style.color='blue';

// Create a button
var button = document.createElement('button');
button.textContent = 'Remove Element';
document.body.appendChild(button); // Get the button and the element to remove

 var button = document.getElementById('removeButton');
 // Add a click event listener to the button
 button.addEventListener('click', function() {
     // Get the element to remove=
     var elementToRemove = document.getElementById('elementToRemove');
     // Remove the element from the DOM
     if (elementToRemove) {
         elementToRemove.remove(); // This removes the element
     }
 });

//  document.getElementById("heading").innerHTML = "Welcome Students";

function changeText(){

    document.getElementById("heading").innerHTML =
    "Welcome to JavaScript";

}


//get input value
function showValue(){

    let value =
    document.getElementById("username").value;

    console.log(value);

}

//change text color
 function changeColor(){

    document.getElementById("heading")
    .style.color = "red";

}

//diplaying user inpit value

function displayName(){

    let name =
    document.getElementById("username").value;

    document.getElementById("pp")
    .innerHTML = name;

}

//counter app
let count = 0;

function increment(){

    count++;

    document.getElementById("count")
    .innerHTML = count;

}

//query selctor
let elemen =
document.querySelector(".title");

console.log(elemen);

// var h=document.getElementsByClassName('harshith')
// console.log(h)
// var a=document.getElementsByClassName("harshith").textContent
// console.log(a)

// Accordian

//insertBefore() in js
//children property in js
// class List: addClass, removeClass, toggleClass

//Using DOM selectors: create a list in html: ask user any item from list display 'item' found. Add styling through js -->.
//what is DOM
//what is DOM selectors
//what is difference between querySelector() and querySelectorAll()
//what is difference between appendChild() and innerHTML
//what is difference between getelementbyid() and getelementsbyclassname()
//create an dom element using js
//using dom,create an ul and li under it and style it
//using dom,create an div and style it
//using dom,create an input and style it
//using dom,create an button and style it
//using dom,create an form and style it
//using dom,create an p and style it
//using dome,create an simple form and style it
//what are events in javascript
//how many types of events in javasc