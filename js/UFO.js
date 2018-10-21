

  var up;
  var n= 8;
  var y=100;
  var y2;
  var x,x2;
  var rad;
  var xloc;
  var yufoNum;
  var v;
  var col;



  function setup() {
    var myCanvas = createCanvas(1000, 600);
    myCanvas.parent('ufo');
    // var myCanvas = createCanvas(600, 400);
      // myCanvas.position(100, 100);

    // canvas.style(150, 150);
  }

  function draw() {
    //background scene
    background(31,40,51);
    drawBackground();

    //adjusting speed for y of drawYufo1

    if (y==340){
      up=true;
    }
      if (y ==100){
      up=false;
    }

    if (up==true){
      y=y-1;
    } else {
      y=y+1;
    }


  //giving the value of s(size-random size),x(x location-random) and r(y location moving in a limited space)
    for (var i = 0; i < n; i++) {
      var size2 = 0.5 * width/n;
      for(var j = 0; j < size2; j++) {

        var s =(1+ noise(j))* 60;

        var r = y * (0.2 + 1.75 * noise(x + 83.5));
        var x = (0.5 + j) * (2 * size2);

        if(noise(x) > 0.5) {

          drawYufoparts(x,r, s,5 );
        }
      }
    }
  }


  //drawing yufo1 with its parts
  function drawYufoparts(yufx,yufy,yufSize,yufLayer){

  // color of the body based on size of body
    if (yufSize > 90) {
      col = color(201,101, 104);
    } else {
      col = color(63, 176, 172);
    }

  //Size of the lights based on size of body
    if (yufSize>80){
      var c = 3;
    }
    else {
      var c= 5;
    }

  //color of the lights based on size of body
    if (yufSize>85){
      var col2= true;
    }
    else{
      var col2 = false;
    }
    //yufo body bar color based on location of x
    if (yufx>450){
      var col3= color(230,207,139);
    }
    else{
      var col3= color(2,33,64);
    }

    // drawing the yufos
    push();
    drawGlass(yufx,yufy-20,(yufSize* 5/8),70);
    pop();
    push();
    drawBody(yufx,yufy,yufSize,yufSize/2,yufSize/4,col,col3);
    pop();
    var size1= yufSize/c;
    push();
    drawTarget(yufx,yufy,size1,yufLayer,col2);
    pop();

  }

  //drawing the lights
  function drawTarget( xloc1,yloc1,size1, layerNum,col2) {

    var layerNum;
    // random color based on number of layers
    var steps= size1/layerNum;
    for (k2=2; k2<layerNum; k2++){
        var g= map(k2,2,layerNum,0,255);
    }
    // one red light for bigger yufos
    if (col2==true){
      for (var i = 0; i < layerNum; i++) {
        fill(235, random(i*g),100);
        noStroke();
        ellipse(xloc1, yloc1, size1 - i*steps, size1 - i*steps);
      }
    }
  // creating 3 blue lights for smaller yufos
    else{
      for (var i = 0; i < layerNum; i++) {
        fill(0, random(i*g),234);
        noStroke();
        ellipse(xloc1+10, yloc1, size1 - i*steps, size1 - i*steps);
        ellipse(xloc1-10, yloc1, size1 - i*steps, size1 - i*steps);
        ellipse(xloc1, yloc1, size1 - i*steps, size1 - i*steps);
      }

    }
  }





  //drawing the glass and aliens inside yufo!!
  function drawGlass(x2,y2,glassLength, glassHigth){
    //blue glass
    push();
    translate(x2 ,y2);
    noStroke();
    fill(138,204,212);
    ellipse(0,0,glassLength,glassHigth);
    pop();
    //green aliens
    push();
    strokeWeight(3);
    stroke(10,102,37);
    line(x2,y2, x2+( glassLength/4),y2-( glassHigth/3));
    line(x2,y2, x2-( glassLength/4),y2-( glassHigth/3));
    pop();
    //grean head
    push();
    stroke(0,0,0);
    fill(21,212,78);
    ellipse(x2,y2,glassLength/2, );
    pop();
    //alien eyes
    push();
    fill(255);
    stroke(0,0,0);
    strokeWeight(2);
    ellipse(x2+10,y2-9, 11,11);
    ellipse(x2-10,y2-9, 11,11);
    fill(0,0,0);
    noStroke();
    ellipse(x2+10,y2-7, 4,4);
    ellipse(x2-10,y2-7, 4,4);
    pop();
    //white glass highlights
    push();
    fill(255);
    noStroke();
    ellipse(x2+(glassLength/5),y2-(glassHigth/3),8,8);
    ellipse(x2+(glassLength/5)+5,y2-(glassHigth/3)+7,6,6);
    pop();
  }

  //drawing body of yufo
  function drawBody(xb,yb,sizeb1,sizeb2,rad,col,col3){
    push();
    stroke(151,131,134);
    strokeCap(ROUND);
    strokeWeight(5);

    line(xb,yb,xb+(2* sizeb2/3),yb+(2*sizeb2/3));
    line(xb,yb,xb-(2* sizeb2/3),yb+(2*sizeb2/3));
    pop();
    // body with color(col) based on size
    push();
    rectMode(CENTER);
    fill(col);
    noStroke();
    rect(xb,yb,sizeb1,sizeb2,rad);
    pop();
    // bar inside the body with color(col3) based on the location of x in the space
    push();
    rectMode(CENTER);
    fill(col3);
    noStroke();
    rect(xb,yb,sizeb1,(2 * sizeb2/5),rad/2 );
    pop();

  }

  function drawBackground(){

    // drawing background stars
    drawStar();
    fill(151,142,106);
    ellipse(width/3,550,1000, 300);
    fill(135,130,109);
    ellipse((width/2+width/3),530,800, 300);
    fill(192,182,121);
    noStroke();
    ellipse(width/2,630,1600, 300);
    //holes
    fill(121,115,73);
    ellipse(100+width/2,500,100, 20);
    ellipse( (width/2)-300,540,200, 25);
    ellipse(400+width/2,535,120, 20);
    //aliens on the background
    push();
    drawAlien();
    pop();


    }

    function drawStar(){

      for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 8; j++) {
          var xs = (0.5 + i) * 100;
          var ys = (0.5 + j) * 80;

          fill(random(255));
          ellipse(xs, ys, 2, 2);
        }
      }
    }

  function drawAlien(){

  //legs of alien1
    push();
    strokeWeight(10);
    stroke(198,91,155);
    line(800,500,820,580);
    line(800,500,790,580);
    line(800,500,840,570);
    line(800,500,770,570);
    //body of alien1
    pop();
    push();
    fill(198,91,155);
    noStroke();
    ellipse(800,500,120,80 );
    pop();
    //eyes of alien1
    push();
    fill(249,247,236);
    noStroke();
    ellipse(850,490,40,30);
    ellipse(750,490,40,30 );
    fill(37,37,31);
    ellipse(850,480,10,10);
    ellipse(750,480,10,10 );
    pop();

  }
