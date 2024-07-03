let player = document.querySelector('.player');
let xPlayer = 0;
let yPlayer = 0;
let ground = 0;
let teclas = {};
let desligargravidade = 0;
let verificador = 0;
let jumpHigh = 130 + ground;
let TeclaPressionada = 0;
var pose = "breath";
let k = 1;
var scriptElement = document.querySelector('script[src="script.js"]');


mudarPersonagem(pose)

function mudarPersonagem(pose){
    console.log("mudou")
    player.src= `spritesAutorais/${pose}.gif`;
}

document.addEventListener('keydown', (event) => {
    teclas[event.code] = true;
    TeclaPressionada = 1
});

document.addEventListener('keyup', (event) => {
    teclas[event.code] = false;
    TeclaPressionada = 0;
});


function WalkingRight (){
    if(!paredes() && xPlayer <410){
        xPlayer+=1;
        player.style.transform = 'scaleX(1)';
        pose = 'walking'
    }
}

function WalkingLeft (){
    if(!paredes() && xPlayer >0){
        xPlayer-=1;
        player.style.transform = 'scaleX(-1)';
    }
}

function jump (){
    if(!atrito() && yPlayer <= jumpHigh){
        yPlayer+=2;
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
    if(yPlayer >=18 && yPlayer <99 && xPlayer >= 215 || yPlayer >= 220 && yPlayer <= 230 && xPlayer >=90 && xPlayer <=330){
        return true;
    } else {
        return false;
    }
}

function paredes (){
    if(xPlayer >=210 && yPlayer >=40 && yPlayer < 100 || xPlayer >=200 && xPlayer <=205 && yPlayer>=230 && yPlayer <=290){
        return true;
    } else {
        return false;
    }
}

function plataforma (){
    if(xPlayer >= 225 && yPlayer == 100 || xPlayer <= 187 && yPlayer == 200 || xPlayer >=90 && xPlayer <= 300 && yPlayer == 300){
        ground = yPlayer;
        jumpHigh = 130 + ground;
        return true;
    } else {
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
    //player.style.left = `82px`;
    //player.style.bottom = `290px`;

    if(yPlayer > ground && desligargravidade == 0){
        gravity();
    }

    /////// verifica seta >> direita
    if(teclas['ArrowRight']){
        WalkingRight();
    }

    /////// verifica seta >> direita
    if(teclas['ArrowLeft']){
        WalkingLeft();
    }

    if(xPlayer >190 && xPlayer <240 && yPlayer <300){
        ground=0;
    }
    if(xPlayer <90 && yPlayer ==300 || xPlayer >338 && yPlayer ==300){
        ground=0;
    }

    setTimeout(rodando, 1);
    }

requestAnimationFrame(rodando);

let Uppressionada = false;
let Leftpressionada = false;
let Rightpressionada = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' && !Uppressionada && ground == yPlayer) {
        desligargravidade = 1;
        verificador = 1;
        jump()
        Uppressionada = true;
        pose= 'jump'
    }
    if (event.key === 'ArrowLeft' && !Leftpressionada){
        Leftpressionada = true;
        player.style.transform = 'scaleX(-1)';
        pose= 'walking'
        mudarPersonagem(pose)
    }
    if (event.key === 'ArrowRight' && !Rightpressionada){
        Rightpressionada = true;
        player.style.transform = 'scaleX(1)';
        pose= 'walking'
        mudarPersonagem(pose)
    }
});

document.addEventListener('keyup', function(event){
    if(event.key === 'ArrowUp'){
        Uppressionada = false;
    }
    if(event.key === 'ArrowLeft'){
        Leftpressionada = false;
    }
    if(event.key === 'ArrowRight'){
        Rightpressionada = false;
    }
    if(Rightpressionada == false && Leftpressionada == false && Uppressionada == false){
        pose = 'breath'
        mudarPersonagem(pose)
    }
} )