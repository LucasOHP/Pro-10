var p5Inst = new p5(null, 'sketch');
console.log('AAA TESTE');
window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rede = createSprite(200,200,400,3);
rede.shapeColor = 'white';

var raqueteP = createSprite(200,70,70,10);

var golP = createSprite(200,5,90,50);
golP.shapeColor = 'white';

var raqueteC = createSprite(200,330,70,10);

var golC = createSprite(200,395,90,50);
golC.shapeColor = 'white';

var disco = createSprite(200,200,10,10);
disco.shapeColor = 'lightgray';

var pontosP = 0;

var pontosC = 0;

var start = 'PRESS SPACE TO START';

var estado = 'inicio';




function draw() {
 background('black');
 
 if(estado == 'inicio'){
   textAlign(CENTER,CENTER);
   fill('red');
   textSize(25);
   text(start,200,150);
   if(keyDown('space')){
    disco.setVelocity(7,-5);
    start = '';
    estado = 'jogando';
   }
    textSize(25);
    fill('GRAY');
    textAlign(CENTER,CENTER);
 text(pontosC,45,330);
 
 text(pontosP,355,70);
 }
 if(estado == 'jogando'){
 textSize(25);
 textAlign(CENTER,CENTER);
 text(pontosC,45,330);
 
 text(pontosP,355,70);
   if(disco.isTouching(golP)){
   disco.y = 200;
   disco.x = 200;
   disco.setVelocity(0,0);
   pontosC = pontosC+1;
   start = 'PRESS SPACE TO START';
   estado = 'inicio';
 }
  if(disco.isTouching(golC)){
   disco.y = 200;
   disco.x = 200;
   disco.setVelocity(0,0);
   pontosP = pontosP+1;
   start = 'PRESS SPACE TO START';
   estado = 'inicio';
 }
 if(pontosC == 5){
   disco.destroy();
   raqueteC.destroy();
   raqueteP.destroy();
   golP.destroy();
   golC.destroy();
   rede.destroy();
   start = '';
   estado = 'fimC';
 }
 if(pontosP == 5){
   disco.destroy();
   raqueteC.destroy();
   raqueteP.destroy();
   golP.destroy();
   golC.destroy();
   rede.destroy();
   start = '';
   estado = 'fimP';
 }
 createEdgeSprites();
 
 raqueteC.x = disco.x;
 raqueteP.x = World.mouseX;
 
 disco.bounceOff(edges);
 disco.bounceOff(raqueteP);
 disco.bounceOff(raqueteC);
 }
 

 
 if(estado == 'fimP'){
   textAlign(CENTER,CENTER);
   textSize(35);
   text('PLAYER WINS',200,200);
 }
  if(estado == 'fimC'){
   textAlign(CENTER,CENTER);
   textSize(35);
   text('COMPUTER WINS',200,200);
 }
 
 drawSprites();
 //fim fd
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
