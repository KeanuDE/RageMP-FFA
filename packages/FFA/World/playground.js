//197.9569549560547,-937.1448364257812,30.686805725097656
var playground = mp.colshapes.newRectangle(197.9569549560547,-937.1448364257812,200,200);

//mp.markers.new(1,new mp.Vector3(197.9569549560547,-937.1448364257812,28.686805725097656),200,{color: [255,0,0,150]});


mp.events.add("playerExitColshape",(player,shape) => {
  if(shape == playground) {
    player.health = 0;
    player.notify("~r~You can't left the arena!");
  }
})