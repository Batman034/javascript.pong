function Setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(255,255,255);

    criabolinha(xbolinha, ybolinha, tamboliha);
}
// função bolinha
function criabolinha(xbolinha, ybolinha, tambolinha){
    circle (xbolinha, ybolinha, tamboliha);
}