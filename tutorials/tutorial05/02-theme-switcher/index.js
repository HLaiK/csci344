const defaultTheme = ev => {
    document.body.className = '';
};

const oceanTheme = ev => {
    defaultTheme();
    document.body.classList.add('ocean');  
};

const desertTheme = ev => {
    defaultTheme();
    document.body.classList.add('desert'); 
};

const highContrastTheme = ev => {
    defaultTheme();
    document.body.classList.add('high-contrast'); 
}; 
document.getElementById('default').addEventListener('click', defaultTheme);
document.getElementById('ocean').addEventListener('click', oceanTheme);
document.getElementById('desert').addEventListener('click', desertTheme);
document.getElementById('high-contrast').addEventListener('click', highContrastTheme);

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/