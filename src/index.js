// // Write your code here
// const pageTitles = document.getElementById('page-title').textContent;
// console.log(pageTitles);

// const technologies = document.getElementsByClassName('technology');
// const technologiesArray = [...technologies];
// technologiesArray.forEach(function(item) {
//     console.log(item.textContent);
//   });
// technologiesArray.forEach(function(item) {
//     const siblings = item.nextSibling.nextSibling;
//     console.log("sibling:", siblings.textContent);
// })


// // nextSibling

// const images = document.getElementsByTagName('img');
// const imagesArray = [...images];
// imagesArray.forEach(function(item) {
//   const src = item.getAttribute('src');
//   console.log("src", src);
// });

// const navElements = document.getElementById('nav');
// const anchors = navElements.getElementsByTagName('a');
// [...anchors].forEach(function(item) {
//     console.log(item.textContent);
// });



// const pageTitle = document.querySelector("#page-title");

// console.log(pageTitle.textContent);

// const technology = document.querySelectorAll(".technology");

// technology.forEach(function(el) {
//  console.log(el.textContent);
// });

// technology.forEach(function(el) {
//  console.log(el.nextSibling.nextSibling.textContent);
// });

// const images = document.querySelectorAll("img");

// images.forEach(function(el) {
//  console.log(el.getAttribute("src"));
// });

// const links = document.querySelectorAll("#nav a");

// links.forEach(function(el) {
//  console.log(el.href);
// });


// const navBar = document.querySelector('#nav');
// const star = navBar.querySelectorAll('a');
// star.forEach(function(item) {
//     item.textContent = `* ${item.textContent} *`;
// });

// const textTitles = document.querySelectorAll('.technology');
// textTitles.forEach(function(item) {
//     item.innerHTML = `<i>${item.textContent}</i>`;
// });

// const subHeading = document.querySelectorAll('.sub-heading');
// subHeading.forEach(function(item) {
//     item.style.color = "blue";
// });


// const list = document.createElement("li");
// list.innerHTML = `<a href="https://www.bbc.co.uk/">BBC</a>`;

// const referenceNode = document.querySelector('.nav-icon');

// referenceNode.parentNode.insertBefore(list, referenceNode);

// const myLogo = document.querySelector("#logo");

// function hover() {
//  alert("Constructor Labs is so Ghetto");
// }

// myLogo.addEventListener("mouseenter", hover);

const navbar = document.querySelector('#nav');
const links = navbar.querySelectorAll('a');

links.forEach(function(item) {
    item.addEventListener("click", function(event) {
        alert("Clicked.");
        event.preventDefault();
    });
});


