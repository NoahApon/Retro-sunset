//canvas size
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 700;

let sunGlow1 = 135;
let sunGlow2 = 140;
let sunGlow3 = 145;

requestAnimationFrame(draw);

function draw () {
    // skylayers
ctx.fillStyle = "rgb(51, 0 , 102)";
ctx.fillRect(0, 0, 1000, 800);

ctx.fillStyle = "rgb(57, 0 , 115)";
ctx.fillRect(0, 10, 1000, 790);

ctx.fillStyle = "rgb(64, 0, 128)";
ctx.fillRect(0, 20, 1000, 780);

ctx.fillStyle = "rgb(70, 0, 141)";
ctx.fillRect(0, 35, 1000, 765);

ctx.fillStyle = "rgb(76, 0, 153)";
ctx.fillRect(0, 50, 1000, 750);

ctx.fillStyle = "rgb(82, 0, 166)";
ctx.fillRect(0, 65, 1000, 735);

ctx.fillStyle = "rgb(89, 0, 179)";
ctx.fillRect(0, 80, 1000, 720);

ctx.fillStyle = "rgb(95 , 0 , 191)";
ctx.fillRect(0, 95, 1000, 705);

ctx.fillStyle = "rgb(102, 0 , 204)";
ctx.fillRect(0, 110, 1000, 690);

ctx.fillStyle = "rgb(108, 0, 217)";
ctx.fillRect(0, 125, 1000, 675);

ctx.fillStyle = "rgb(115, 0, 230)";
ctx.fillRect(0, 140, 1000, 660);

ctx.fillStyle = "rgb(128, 13, 242)";
ctx.fillRect(0, 155, 1000, 645);

ctx.fillStyle = "rgb(140, 26, 255)";
ctx.fillRect(0, 170, 1000, 630);

ctx.fillStyle = "rgb(147, 39, 255)";
ctx.fillRect(0, 185, 1000, 615);

ctx.fillStyle = "rgb(153, 51, 255)";
ctx.fillRect(0, 200, 1000, 600);

ctx.fillStyle = "rgb(163, 51, 255)";
ctx.fillRect(0, 225, 1000, 585);

ctx.fillStyle = "rgb(173, 51, 255)";
ctx.fillRect(0, 230, 1000, 570);

ctx.fillStyle = "rgb(183, 51, 255)";
ctx.fillRect(0, 245, 1000, 555);

ctx.fillStyle = "rgb(193, 51, 255)";
ctx.fillRect(0, 260, 1000, 540);

ctx.fillStyle = "rgb(203, 51, 255)";
ctx.fillRect(0, 275, 1000, 525);

ctx.fillStyle = "rgb(213, 51, 255)";
ctx.fillRect(0, 300, 1000, 510);

//Sun glow

ctx.fillStyle = "rgba(255,255,0,0.6)"
ctx.beginPath();
ctx.arc(500, 390, sunGlow1, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgba(255,255,0,0.4)"
ctx.beginPath();
ctx.arc(500, 390, sunGlow2, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgba(255,255,0,0.2)"
ctx.beginPath();
ctx.arc(500, 390, sunGlow3, 0, 2 * Math.PI);
ctx.fill();

//Sun

ctx.fillStyle = "rgb(255,255,0)";
ctx.beginPath();
ctx.arc(500, 390, 130, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255,255,20)";

ctx.beginPath();
ctx.arc(500, 390, 120, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255,255,40)";

ctx.beginPath();
ctx.arc(500, 390, 110, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255,255,60)";

ctx.beginPath();
ctx.arc(500, 390, 100, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255,255,80)";

ctx.beginPath();
ctx.arc(500, 390, 90, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "rgb(255,255,100)";

ctx.beginPath();
ctx.arc(500, 390, 80, 0, 2 * Math.PI);
ctx.fill();


//Water

ctx.fillStyle = "rgb(46, 0, 154)";
ctx.fillRect(0, 390, 1000, 500);

//island 1

ctx.fillStyle = "rgb(32, 1, 37)";
ctx.beginPath();
ctx.moveTo(450, 390);
ctx.lineTo(380, 350);
ctx.lineTo(345, 370);
ctx.lineTo(270, 320);
ctx.lineTo(200, 390);
ctx.lineTo(450, 390);
ctx.fill();

//shine on island 1

ctx.fillStyle = "rgb(82, 2 , 94";
ctx.beginPath();
ctx.moveTo(450, 390);
ctx.lineTo(380, 350);
ctx.lineTo(345, 370);
ctx.lineTo(270, 320);
ctx.lineTo(300, 390);
ctx.lineTo(450, 390);
ctx.fill();

//lighter shine island 1 pt 1

ctx.fillStyle = "rgb(143, 4 , 165)";
ctx.beginPath();
ctx.moveTo(445, 390);
ctx.lineTo(385, 355);
ctx.lineTo(420, 390);
ctx.lineTo(445, 390);
ctx.fill();

//lighet shine island 1 pt 2

ctx.fillStyle = "rgb(143, 4 , 165)";
ctx.beginPath();
ctx.moveTo(365, 390);
ctx.lineTo(280, 328);
ctx.lineTo(340, 390);
ctx.lineTo(365, 390);
ctx.fill();

//digital ocean

ctx.lineWidth = 3;
ctx.strokeStyle = "rgb(255, 0 , 255)"
ctx.beginPath();

//straight lines

ctx.moveTo(0,390);
ctx.lineTo(1000,390);

ctx.moveTo(0,395);
ctx.lineTo(1000,395);

ctx.moveTo(0,405);
ctx.lineTo(1000,405);

ctx.moveTo(0,420);
ctx.lineTo(1000,420);

ctx.moveTo(0,440);
ctx.lineTo(1000,440);

ctx.moveTo(0,465);
ctx.lineTo(1000,465);

ctx.moveTo(0,495);
ctx.lineTo(1000,495);

ctx.moveTo(0,530);
ctx.lineTo(1000,530);

ctx.moveTo(0,570);
ctx.lineTo(1000,570);

ctx.moveTo(0,615);
ctx.lineTo(1000,615);

ctx.moveTo(0,665);
ctx.lineTo(1000,655);

ctx.moveTo(500, 390);
ctx.lineTo(500, 700);

ctx.moveTo(490, 390);
ctx.lineTo(480, 700);

ctx.moveTo(480, 390);
ctx.lineTo(460, 700);

ctx.moveTo(470, 390);
ctx.lineTo(440, 700);

ctx.moveTo(460, 390);
ctx.lineTo(420, 700);

ctx.moveTo(450, 390);
ctx.lineTo(400, 700);

ctx.moveTo(440, 390);
ctx.lineTo(380, 700);

ctx.moveTo(430, 390);
ctx.lineTo(360, 700);

ctx.moveTo(420, 390);
ctx.lineTo(340, 700);

ctx.moveTo(410, 390);
ctx.lineTo(320, 700);

ctx.moveTo(400, 390);
ctx.lineTo(300, 700);

ctx.moveTo(390, 390);
ctx.lineTo(280, 700);

ctx.moveTo(380, 390);
ctx.lineTo(260, 700);

ctx.moveTo(370, 390);
ctx.lineTo(240, 700);

ctx.moveTo(360, 390);
ctx.lineTo(220, 700);

ctx.moveTo(350, 390);
ctx.lineTo(200, 700);

ctx.moveTo(340, 390);
ctx.lineTo(180, 700);

ctx.moveTo(330, 390);
ctx.lineTo(160, 700);

ctx.moveTo(320, 390);
ctx.lineTo(140, 700);

ctx.moveTo(310, 390);
ctx.lineTo(120, 700);

ctx.moveTo(300, 390);
ctx.lineTo(100, 700);

ctx.moveTo(290, 390);
ctx.lineTo(80, 700);

ctx.moveTo(280, 390);
ctx.lineTo(60, 700);

ctx.moveTo(270, 390);
ctx.lineTo(40, 700);

ctx.moveTo(260, 390);
ctx.lineTo(20, 700);

ctx.moveTo(250, 390);
ctx.lineTo(0, 700);


ctx.moveTo(240, 390);
ctx.lineTo(-20, 700);

ctx.moveTo(230, 390);
ctx.lineTo(-40, 700);

ctx.moveTo(220, 390);
ctx.lineTo(-60, 700);

ctx.moveTo(210, 390);
ctx.lineTo(-80, 700);

ctx.moveTo(200, 390);
ctx.lineTo(-100, 700);

ctx.moveTo(190, 390);
ctx.lineTo(-120, 700);

ctx.moveTo(180, 390);
ctx.lineTo(-140, 700);

ctx.moveTo(170, 390);
ctx.lineTo(-160, 700);

ctx.moveTo(160, 390);
ctx.lineTo(-180, 700);

ctx.moveTo(150, 390);
ctx.lineTo(-200, 700);

ctx.moveTo(140, 390);
ctx.lineTo(-220, 700);

ctx.moveTo(130, 390);
ctx.lineTo(-240, 700);

ctx.moveTo(120, 390);
ctx.lineTo(-260, 700);

ctx.moveTo(110, 390);
ctx.lineTo(-280, 700);

ctx.moveTo(100, 390);
ctx.lineTo(-300, 700);

ctx.moveTo(90, 390);
ctx.lineTo(-320, 700);

ctx.moveTo(80, 390);
ctx.lineTo(-340, 700);

ctx.moveTo(70, 390);
ctx.lineTo(-360, 700);

ctx.moveTo(60, 390);
ctx.lineTo(-380, 700);

ctx.moveTo(50, 390);
ctx.lineTo(-400, 700);

ctx.moveTo(40, 390);
ctx.lineTo(-420, 700);

ctx.moveTo(30, 390);
ctx.lineTo(-440, 700);

ctx.moveTo(20, 390);
ctx.lineTo(-460, 700);

ctx.moveTo(10, 390);
ctx.lineTo(-480, 700);

ctx.moveTo(0, 390);
ctx.lineTo(-500, 700);

//right side

ctx.moveTo(500, 390);
ctx.lineTo(500, 700);

ctx.moveTo(510, 390);
ctx.lineTo(520, 700);

ctx.moveTo(520, 390);
ctx.lineTo(540, 700);

ctx.moveTo(530, 390);
ctx.lineTo(560, 700);

ctx.moveTo(540, 390);
ctx.lineTo(580, 700);

ctx.moveTo(550, 390);
ctx.lineTo(600, 700);

ctx.moveTo(560, 390);
ctx.lineTo(620, 700);

ctx.moveTo(570, 390);
ctx.lineTo(640, 700);

ctx.moveTo(580, 390);
ctx.lineTo(660, 700);

ctx.moveTo(590, 390);
ctx.lineTo(680, 700);

ctx.moveTo(600, 390);
ctx.lineTo(700, 700);

ctx.moveTo(610, 390);
ctx.lineTo(720, 700);

ctx.moveTo(620, 390);
ctx.lineTo(740, 700);

ctx.moveTo(630, 390);
ctx.lineTo(760, 700);

ctx.moveTo(640, 390);
ctx.lineTo(780, 700);

ctx.moveTo(650, 390);
ctx.lineTo(800, 700);

ctx.moveTo(660, 390);
ctx.lineTo(820, 700);

ctx.moveTo(670, 390);
ctx.lineTo(840, 700);

ctx.moveTo(680, 390);
ctx.lineTo(860, 700);

ctx.moveTo(690, 390);
ctx.lineTo(880, 700);

ctx.moveTo(700, 390);
ctx.lineTo(900, 700);

ctx.moveTo(710, 390);
ctx.lineTo(920, 700);

ctx.moveTo(720, 390);
ctx.lineTo(940, 700);

ctx.moveTo(730, 390);
ctx.lineTo(960, 700);

ctx.moveTo(740, 390);
ctx.lineTo(980, 700);

ctx.moveTo(750, 390);
ctx.lineTo(1000, 700);

ctx.moveTo(760, 390);
ctx.lineTo(1020, 700);

ctx.moveTo(770, 390);
ctx.lineTo(1040, 700);

ctx.moveTo(780, 390);
ctx.lineTo(1060, 700);

ctx.moveTo(790, 390);
ctx.lineTo(1080, 700);

ctx.moveTo(800, 390);
ctx.lineTo(1100, 700);
//new
ctx.moveTo(810, 390);
ctx.lineTo(1120, 700);

ctx.moveTo(820, 390);
ctx.lineTo(1140, 700);

ctx.moveTo(830, 390);
ctx.lineTo(1160, 700);

ctx.moveTo(840, 390);
ctx.lineTo(1180, 700);

ctx.moveTo(850, 390);
ctx.lineTo(1200, 700);

ctx.moveTo(860, 390);
ctx.lineTo(1220, 700);

ctx.moveTo(870, 390);
ctx.lineTo(1240, 700);

ctx.moveTo(880, 390);
ctx.lineTo(1260, 700);

ctx.moveTo(890, 390);
ctx.lineTo(1280, 700);

ctx.moveTo(900, 390);
ctx.lineTo(1300, 700);

ctx.moveTo(910, 390);
ctx.lineTo(1320, 700);

ctx.moveTo(920, 390);
ctx.lineTo(1340, 700);

ctx.moveTo(930, 390);
ctx.lineTo(1360, 700);

ctx.moveTo(940, 390);
ctx.lineTo(1380, 700);

ctx.moveTo(950, 390);
ctx.lineTo(1400, 700);

ctx.moveTo(960, 390);
ctx.lineTo(1420, 700);

ctx.moveTo(970, 390);
ctx.lineTo(1440, 700);

ctx.moveTo(980, 390);
ctx.lineTo(1460, 700);

ctx.moveTo(990, 390);
ctx.lineTo(1480, 700);

ctx.stroke();

//seagulls

let seagulls = document.getElementById("seagull-img");
ctx.drawImage(seagulls, 300, 100, 190, 190)

sunGlow1 += 0.2;
sunGlow2 += 0.2;
sunGlow3 += 0.2;

if(sunGlow1 >= 165) {
    sunGlow1 = 135;
}

if(sunGlow2 >= 170) {
   sunGlow2 = 140;
}

if(sunGlow3 >= 175) {
    sunGlow3 = 145;
}
requestAnimationFrame(draw);
}

