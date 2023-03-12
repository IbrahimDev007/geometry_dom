// global variable  
let serial = 0;
let table = document.getElementById('table-container');
// // next blog page And heder section
function nextpage() {
    window.location.href = "./answer.html"
}

// area calculation

function geomatryArea(num, num2) {
    return num * num2
}
// validation
function validation(num, num2) {
    if ((num || num2) === '' || isNaN(num) || isNaN(num2) || num < 0 || num2 < 0) {
        alert("input valid number")
    }

}
// table added  function
function tableAdd(name, area) {
    serial = serial + 1;
    let tableRow = document.createElement('tr');
    tableRow.innerHTML = `<th class ='table-head'>${serial}</th>
    <td>${name}</td>
    <td><span class='area-table' id='area-table'>${area}</span>cm<sup>2</sup></td>
    <td><button id ="meter-square"class="w-full border-none bg-sky-500 mx-1 rounded-md btn btn-sm">M<sup>2</sup></button></td>
   `;
    table.appendChild(tableRow);

}
let tableHead = document.getElementsByClassName('table-head');
for (const td of tableHead) {
    td.addEventListener('click', function (e) {
        console.log(e.target);
    })
}


// if (document.getElementById('meter-square')) {

// document.getElementById('meter-square').addEventListener('click',function (e) {
//     console.log(e.target);
// })}


//  answer rough
let answer = [
    {
        Q: "What is DOM and what is the purpose of DOM",
        Ans: "DOM means Document Object Model.dom is made by javascrip to interect wih website.dom manupulate and interect wiyh website its like tree obkect model and all element as node .When you 'console.log(document)'  you show all DOM tree and that easy to acess"

    },
    {
        Q: "How will you select HTML elements using DOM? Name the DOM methods",
        Ans: "their are several mathod to selection here some example- 1.getElementById ()=you select  by id ,2.getElementsByClassName() you select by class name 3.getgetElementsByTagName() you select by tag name 4.querySelector() is select the node first element 4.querySelectorAll() you find colection of this selected node you use for id # and class use .,'ther also some eselection likr getatribut() to specefic classlist ,atribut   "
    },
    {
        Q: "What is event bubble",
        Ans: "Event bubble is important things in js dom.it s macanisum of which event is perfrom first  when it nested .when event trigired it first nested element then way up to parrent.so when you trigred as element it find al event triger its   all ocure in children  "
    },
    {
        Q: "What is a callback function and why will you use it",
        Ans: "call back function is a function pass a argument another function and this function is call .this is use for less code reusable and also use like for loop and in js it also use for asyncrones ths is so useful  "
    },


]
// Get the card element from the DOM
let cards = document.querySelectorAll('#card');

// Add event listeners for the mouseenter and mouseleave events
for (const card of cards) {


    card.addEventListener('mouseenter', function () {
        // Generate a random hex color code
        const randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // Set the card background color to the random color
        card.style.backgroundColor = randColor;
    });

    card.addEventListener('mouseleave', function () {
        // Reset the card background color to the initial color
        card.style.backgroundColor = '#fff';
    });

}
