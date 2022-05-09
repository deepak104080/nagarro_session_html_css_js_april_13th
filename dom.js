
console.log('dom is loaded....')


let name_label = document.getElementById('name_label');

console.log(name_label.innerText);


document.getElementById('name_label').innerText = 'nagarro assignment';
document.querySelector('#name_label').innerText = 'nagarro assignment';

// document.getElementsByClassName - array of elements
// document.getElementsByTagName - array of elements
// document.querySelector - single element
// document.querySelectorAll - array of elements



// DOM Events and Event Handler
// click - onClick function



function click_handler() {
    let name_input = document.getElementById('name_input').value;
    console.log(name_input);


    let td = document.createElement('td');
    td.innerText = name_input;

    let tr = document.createElement('tr');

    tr.appendChild(td);


    var table = document.getElementById('table_output');
    table.appendChild(tr);
}







// let a = 5;
// console.log('a - ',a);

// data types - 
// Number, string, Boolean
// object - array

// let num1 = 5;
// let num2 = 6;

// function add(a,b) {
//     return a + b;
// }

// console.log(add(num1, num2));


// function, loops, if else, switch

// DOM - Document Object Model



// let obj = {
//     name: 'asiuf',
//     address: 'iwued',
//     state: 'osif'
// }

// let document = {
//     head: {
//         title: 'kaefh',
//     },
//     body: {
//         div_container: {
//             div_header : '<div>Header</div>',
//             div_main : '<div>Main</div>',
//             div_footer : '<div>Footer</div>'
//         }
//     }
// }


// window.document
// document
// Browser.HTML






// create all input fields
// create a function like fn_click - submit button

// fn_click{
//     pick all input values
//     how to pick values form radio and check boxes
//      creation and appending of elements
//      how to add atrributes to an element - img
//      how to store temp data in localStorage
// }

// arr = [
//     {
//         name, email, website
//     },
//     {
//         name, email, website
//     },
//     {
//         name, email, website
//     },
//     {
//         name, email, website
//     }
// ]

// mdn - mozilla developer networks 