let player = document.querySelector('.player');
let player2 = document.querySelector('.player2');
let xPlayer = 0;
let yPlayer = 0;
let ground = 0;
let teclas = {};
let desligargravidade = 0;
let verificador = 0;
let jumpHigh = 130 + ground;
var pose = "breath";
let andandoDireita = false;
let andandoEsquerda = false;

mudarPersonagem(pose)

function mudarPersonagem(pose){
    if(player.src!== "spritesAutorais/breath.gif"){
    player.src= `spritesAutorais/${pose}.gif`;
}
}

function coop(){
    xPlayer2 = 60;
    yPlayer2 = 0;
    xPlayer = 0;
    yPlayer = 0;
    ground = 0;
    ground2 = 0;
    desligargravidade1 = 0;
    desligargravidade2 = 0;
    jumpHigh = 130 + ground;
    jumpHigh2 = 130 + ground2;
    player2.style.opacity = '100%';
    player.style.transform = 'scaleX(1)';
    player2.style.transform = 'scaleX(1)';
}
function singleplayer(){
    xPlayer2 = -60;
    yPlayer2 = -30;
    xPlayer = 0;
    yPlayer = 0;
    ground = 0;
    ground = -100;
    desligargravidade1 = 0;
    jumpHigh = 130 + ground;
    player2.style.opacity = '0%';
    player.style.transform = 'scaleX(1)';
}

document.addEventListener('keydown', (event) => {
    teclas[event.code] = true;
    if (event.code === 'KeyD') {
        andandoDireita = true
    }
    if (event.code === 'KeyA') {
        andandoEsquerda = true
    }
});

document.addEventListener('keyup', (event) => {
    teclas[event.code] = false;
    if (event.code === 'KeyD') {
        andandoDireita = false;
    }
    if (event.code === 'KeyA') {
        andandoEsquerda = false
    }
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
    if(xPlayer >=210 && yPlayer >=40 && yPlayer < 100 || xPlayer <=200 && yPlayer>=130 && yPlayer <=190 || xPlayer >= 80 && xPlayer <= 100 && yPlayer >=230 && yPlayer <290){
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
    //player.style.left = `340px`;
    //player.style.bottom = `280px`;

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
        if(pose!='breath'){
        pose = 'breath'
        mudarPersonagem(pose)
        }
    }
} )



































let xPlayer2 = 60;
let yPlayer2 = 0;
let ground2 = 0;
let desligargravidade2 = 0;
let verificador2 = 0;
let jumpHigh2 = 130 + ground2;
var pose2 = "breath2";

mudarPersonagem2(pose2)

function mudarPersonagem2(pose2){
    player2.src= `spritesAutorais/${pose2}.gif`;
}

function WalkingRight2 (){
    if(!paredes2() && xPlayer2 <410){
        xPlayer2+=1;
        player2.style.transform = 'scaleX(1)';
    }
}

function WalkingLeft2 (){
    if(!paredes2() && xPlayer2 >0){
        xPlayer2-=1;
        player2.style.transform = 'scaleX(-1)';
    }
}

function jump2 (){
    if(!atrito2() && yPlayer2 <= jumpHigh2){
        yPlayer2+=2;
        setTimeout(jump2, 1);
    } else {
        desligargravidade2 = 0;
        verificador2 = 0;
        }
    }

    function gravity2 (){
        if(!plataforma2() && yPlayer2 > ground2 && desligargravidade2 == 0){
        yPlayer2-=2;
    }
}

function atrito2 (){
    if(yPlayer2 >=18 && yPlayer2 <99 && xPlayer2 >= 215 || yPlayer2 >= 220 && yPlayer2 <= 230 && xPlayer2 >=90 && xPlayer2 <=330){
        return true;
    } else {
        return false;
    }
}

function paredes2 (){
    if(xPlayer2 >=210 && yPlayer2 >=40 && yPlayer2 < 100 || xPlayer2 >=200 && xPlayer2 <=205 && yPlayer2>=230 && yPlayer2 <=290){
        return true;
    } else {
        return false;
    }
}

function plataforma2 (){
    if(xPlayer2 >= 225 && yPlayer2 == 100 || xPlayer2 <= 187 && yPlayer2 == 200 || xPlayer2 >=90 && xPlayer2 <= 300 && yPlayer2 == 300){
        ground2 = yPlayer2;
        jumpHigh2 = 130 + ground2;
        return true;
    } else {
        ground2 = 0;
        verificador2 = 0
        desligargravidade2 = 0;
        jumpHigh2 = 130 + ground2;
        return false;
    }
}
    ////// checar se está dentro da box

const rodando2 = () => {
    player2.style.left = `${xPlayer2}px`;
    player2.style.bottom = `${yPlayer2}px`;
    //player.style.left = `82px`;
    //player.style.bottom = `290px`;

    if(yPlayer2 > ground2 && desligargravidade2 == 0){
        gravity2();
    }

    if(andandoDireita == true){
        WalkingRight2();
    }
    if(andandoEsquerda == true){
        WalkingLeft2();
    }

    if(xPlayer2 >190 && xPlayer2 <240 && yPlayer2 <300){
        ground2=0;
    }
    if(xPlayer2 <90 && yPlayer2 ==300 || xPlayer2 >338 && yPlayer2 ==300){
        ground2=0;
    }

    setTimeout(rodando2, 1);
}

requestAnimationFrame(rodando2);

let Uppressionada2 = false;
let Leftpressionada2 = false;
let Rightpressionada2 = false;

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 87 && !Uppressionada2 && ground2 == yPlayer2) {
        desligargravidade2 = 1;
        verificador2 = 1;
        jump2()
        Uppressionada2 = true;
        pose2= 'jump2'
    }
    if (event.keyCode === 65 && !Leftpressionada2){
        Leftpressionada2 = true;
        player2.style.transform = 'scaleX(-1)';
        pose2= 'walking2'
        mudarPersonagem2(pose2)
    }
    if (event.keyCode === 68 && !Rightpressionada2){
        Rightpressionada2 = true;
        player2.style.transform = 'scaleX(1)';
        pose2= 'walking2'
        mudarPersonagem2(pose2)
    }
});

document.addEventListener('keyup', function(event){
    if(event.keyCode === 87){
        Uppressionada2 = false;
    }
    if(event.keyCode === 65){
        Leftpressionada2 = false;
    }
    if(event.keyCode === 68){
        Rightpressionada2 = false;
    }
    if(Rightpressionada2 == false && Leftpressionada2 == false && Uppressionada2 == false){
        if(pose2!='breath2'){
        pose2 = 'breath2'
        mudarPersonagem2(pose2)
    }
    }
} )


singleplayer()