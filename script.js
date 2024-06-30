let player = document.querySelector('.player');
let xPlayer = 0;
let yPlayer = 0;
let ground = 0;
let teclas = {};
let desligargravidade = 0;
let verificador = 0;
let jumpHigh = 130 + ground;



document.addEventListener('keydown', (event) => {
    teclas[event.code] = true;
});

document.addEventListener('keyup', (event) => {
    teclas[event.code] = false;
});


function WalkingRight (){
    if(!paredes() && xPlayer <440){
        xPlayer+=2;
    }
}

function WalkingLeft (){
    if(!paredes() && xPlayer >0){
        xPlayer-=2;
    }
}

function jump (){
    if(!atrito() && yPlayer <= jumpHigh){
        yPlayer+=4;
        setTimeout(jump, 1);
    } else {
        desligargravidade = 0;
        verificador = 0;
        }
    }

    function gravity (){
        if(!plataforma() && yPlayer > ground && desligargravidade == 0){
        yPlayer-=2;
    }
}

function atrito (){
    if(yPlayer >=40 && yPlayer <99 && xPlayer >= 241){
        return true;
    } else {
        return false;
    }
}

function paredes (){
    if(xPlayer >= 241 && yPlayer >=40 && yPlayer < 100 || xPlayer <=200 && yPlayer>=150 && yPlayer <=190){
        return true;
    } else {
        return false;
    }
}

function plataforma (){
    if(xPlayer >= 241 && yPlayer == 100 || xPlayer <= 200 && yPlayer == 200){
        ground = yPlayer;
        jumpHigh = 130 + ground;
        return true;
    } else {
        console.log("nao está mais")
        ground = 0;
        verificador = 0
        desligargravidade = 0;
        jumpHigh = 130 + ground;
        return false;
    }
}
    ////// checar se está dentro da box

const rodando = () => {

    player.style.left = `${xPlayer}px`;
    player.style.bottom = `${yPlayer}px`;

    if(yPlayer > ground && desligargravidade == 0){
        console.log("gravidade")
        gravity();
    }

    ////// verifica se a seta ^ foi pressionada e chama o jump
    if(teclas['ArrowUp'] && verificador == 0 && ground==yPlayer){
        desligargravidade = 1;
        verificador = 1;
        jump()
    } else if (!teclas['ArrowUp']){
        verificador = 0;
    }
    /////// verifica seta >> direita
    if(teclas['ArrowRight']){
        WalkingRight();
    }

    /////// verifica seta >> direita
    if(teclas['ArrowLeft']){
        WalkingLeft();
    }

    if(xPlayer >190 && xPlayer <240){
        ground=0;
    }
    atrito()

    requestAnimationFrame(rodando);
    }

requestAnimationFrame(rodando);