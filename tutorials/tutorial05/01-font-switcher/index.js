const makeBigger = () => {
   const content = document.querySelector('div.content');
   const h1 = document.querySelector('h1');
   let currentContentSize = parseFloat(window.getComputedStyle(content).fontSize);
   let currentH1Size = parseFloat(window.getComputedStyle(h1).fontSize);
 
   content.style.fontSize = (currentContentSize + 2) + 'px';
   h1.style.fontSize = (currentH1Size + 2) + 'px';
};

const makeSmaller = () => {
   const content = document.querySelector('div.content');
   const h1 = document.querySelector('h1');
   let currentContentSize = parseFloat(window.getComputedStyle(content).fontSize);
   let currentH1Size = parseFloat(window.getComputedStyle(h1).fontSize);
 
   content.style.fontSize = (currentContentSize - 2) + 'px';
   h1.style.fontSize = (currentH1Size - 2) + 'px';
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
