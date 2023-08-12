console.log('adding sections to main tag - javaScript');

// target parent element
const getMain = document.getElementById('main-container');

// create element 
const createSection = document.createElement('section');
// style for section
createSection.style.width = '400px';
createSection.style.backgroundColor = 'violet';
createSection.style.textAlign = 'center';
createSection.style.margin = '2rem auto';
createSection.style.padding = '2rem';

const createH1 = document.createElement('h1');
createH1.innerText = 'heading with - javaScript';
const createUl = document.createElement('ul');
const createLi = document.createElement('li');
// style for li
createLi.innerText = 'created by js';
createLi.style.listStyle = 'none';

// add element to parent
getMain.appendChild(createSection);
createSection.appendChild(createH1);
createSection.appendChild(createUl);
createUl.appendChild(createLi);


// innerHTML - another way to add elements
// createSection.innerHTML = `
// <h1>javaScript
//   <ul>
//     <li>1 hello world!</li>
//     <li>2 hello world!</li>
//     <li>3 hello world!</li>
//     <li>4 hello world!</li>
//     <li>5 hello world!</li>
//   </ul>
// </h1>
// `;
