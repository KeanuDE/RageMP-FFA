var publicVar = require('../PublicVar');
mp.events.add("playerJoin",(player) => {
  console.log(`New Player: ${player.name} (${player.socialClub})`);
  if(publicVar.ffaPlayer[0] < 50) {
    publicVar.ffaPlayer[0]++;
    player.dimension = 0;
  }
  else if(publicVar.ffaPlayer[1] < 50) {
    publicVar.ffaPlayer[1]++;
    player.dimension = 1;
  }
  else if(publicVar.ffaPlayer[2] < 50) {
    publicVar.ffaPlayer[2]++;
    player.dimension = 2;
  }
  else if(publicVar.ffaPlayer[3] < 50) {
    publicVar.ffaPlayer[3]++;
    player.dimension = 3;
  }

  var randomInt = Math.floor(Math.random() * (publicVar.spawnPositions.length));

  player.giveWeapon(mp.joaat("weapon_switchblade"),1);
  player.giveWeapon(mp.joaat("weapon_pistol50"),2500);
  player.giveWeapon(mp.joaat("weapon_minismg"),5000);
  player.giveWeapon(mp.joaat("weapon_assaultrifle"),5000);

  player.position = publicVar.spawnPositions[randomInt];
  player.name = player.socialClub;
  mp.players.broadcast(`[!{#ff5050}FFA!{#ffffff}] !{#ff9900}${player.socialClub}!{#ffffff} joined the server.`);
});