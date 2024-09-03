let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"
    //draw5CirclesWhile();
    //draw5circlesFor();
    //drawNCircles(20);
    // drawNCirclesFlexible(500,400,600,100);
    drawNShapesFlexible(100,200,200,300,"square");
    drawNShapesDirectionFlexible(200,300,100,200,"square","row");
    //drawSquare();
    drawGrid(canvasWidth, canvasHeight);
}

/*
// my first function
function draw5CirclesWhile(){
    let i = 0;
    let y = 200;
    while(i < 5){
        circle(100,y,50); 
        y+=50;
        i++;
    }
}

function draw5circlesFor(){
    let y = 200;
    for(let i=1; i<=5; i++){
        circle(200,y,50)
        y+=50;
    }
}

function drawNCircles(n){
    let y = 0;
    for(let i=0; i<n;i++){
        circle(300,y,50)
        y+=50;
    }
}

function drawNCirclesFlexible(n,size,x,y){
    for(i=0; i<n; i++){
        circle(n,size,x,y)
    }
}
*/

function drawNShapesFlexible(n,size,x,y,shape){
    for(i=0; i <n; i++){
        if (shape === "square") {
            circle(n,size,x,y)
        } else if(shape === "circle");{
            circle(n,size,x,y)
        } 
        
    }
}

   
function drawNShapesDirectionFlexible(n,size,x,y,shape, direction){
    for(i=0; i<n; i++){
        let y = 0;
        let x = 0;
        if(shape === 'square' && direction === 'row'){
            square(n,size,x,y)
            x+=50;
        }else if(shape === 'circle' && direction === 'row'){
            circle(n,size,x,y)
            x+=50;
        }
        if(shape === 'square' && direction === 'column'){
            square(n,size,x,y)
            y+=50;
        }else if (shape == 'circle' && direction === 'column'){
            circle(n,size,x,y)
            y+=50;
        }

        }
    }


/*
function drawCircles() {
   noFill();
     fill('red');
    circle(100, 200, 50); // centerX, centerY, radius

}
*/
function drawSquare() {
    noFill;
    square(320, 200, 50); // topLeftX, topLeftY, width

}

