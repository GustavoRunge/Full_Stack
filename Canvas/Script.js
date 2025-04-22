let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


function desenhar_quadrado(x,y,w,h,c){
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.fillRect(x,y,w,h);
    ctx.closePath();
}

function desenhar_linha(x1,y1,x2,y2,c){
    ctx.beginPath()
    ctx.strokeStyle = c
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function circulo(x,y,r,c,sc){
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.strokeStyle = sc;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

}

function desenhar_arco(x,y,r,ea,c){
    ctx.beginPath();
    ctx.strokeStyle = 'green' ;
    ctx.arc(x, y, r, 1 * Math.PI, ea);
    ctx.stroke();
}

function desenhar_arco2(x,y,r,sa,c){
    ctx.beginPath();
    ctx.strokeStyle = 'green' ;
    ctx.arc(x, y, r, sa, 0 * Math.PI);
    ctx.stroke();
}

desenhar_quadrado(0,0,50,50,'blue')
desenhar_quadrado(250,0,50,50,'red')

desenhar_arco(150,150,80,-2.35,'green')
desenhar_arco2(150,150,80,5.5,'green')
desenhar_arco(150,300,80,-1.56,'green')
desenhar_arco2(150,300,60,-1.56,'green')

desenhar_quadrado(0,240,30,30,'yellow')
desenhar_quadrado(0,270,30,30,'yellow')
desenhar_quadrado(30,270,30,30,'yellow')

desenhar_quadrado(270,270,30,30,'black')
desenhar_quadrado(270,240,30,30,'black')
desenhar_quadrado(240,270,30,30,'black')

desenhar_quadrado(0,120,30,30,'cyan')
desenhar_quadrado(0,150,30,30,'cyan')
desenhar_quadrado(270,135,30,30,'cyan')

desenhar_quadrado(110,150,40,40,'red')

desenhar_linha(150,150,150,300,'green')

desenhar_linha(0,150,300,150,'green')

desenhar_linha(0,0,150,150,'blue')
desenhar_linha(300,0,150,150,'red')

circulo(150,110,15,'cyan','blue')
circulo(70,220,15,'yellow','green')
circulo(220,220,15,'yellow','green')

circulo(150,300,40,'cyan','green')

desenhar_arco(150,150,60,0,'green')


desenhar_linha(0,0,0,300)
desenhar_linha(0,0,300,0)
desenhar_linha(300,0,300,300)
desenhar_linha(300,300,0,300)