console.log('adding sections to main tag - javaScript');

// target parent element
const getMain = document.getElementById('main-container');

// create element 
const createSection = document.createElement('section');
const createH1 = document.createElement('h1');
createH1.innerText = 'DOM Manipulation - javaScript';
const createUl = document.createElement('ul');

// styles
createSection.style.width = '400px';
createSection.style.backgroundColor = 'violet';
createSection.style.textAlign = 'center';
createSection.style.margin = '2rem auto';
createSection.style.padding = '2rem';

// add element to parent
getMain.appendChild(createSection);
createSection.appendChild(createH1);
createSection.appendChild(createUl);

// innerHTML - another way to add elements
const createLi = document.createElement('li');
createLi.style.listStyle = 'none';
createLi.style.color = 'yellow';

createLi.innerHTML = `
    <li>hello world!</li>
    <li>hello world!</li>
    <li>hello world!</li>
`;
createUl.appendChild(createLi);
