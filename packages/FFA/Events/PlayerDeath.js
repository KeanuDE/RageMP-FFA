var publicVar = require('../PublicVar');
mp.events.add("playerDeath",(player, reason, killer) => {
  player.setVariable("killStreak",0);
  if(killer != undefined) {
    killer.setVariable("killStreak",killer.getVariable("killStreak") + 1);
    killer.setVariable("kills",killer.getVariable("kills") + 1);

    killer.call("ffa:changeKS",[killer.getVariable("killStreak")]);
    killer.call("ffa:changeKills",[killer.getVariable("kills")]);

    killer.notify(`You killed ~g~${player.socialClub}!`);
    player.notify(`You were killed by ~r~${killer.socialClub}!`);

    if(killer.getVariable("killStreak") == 5) {
      killer.armour = 50;
      killer.health = 100;
      mp.players.broadcast(`[!{#ff5050}FFA!{#ffffff}] !{#ff9900}${killer.socialClub}!{#ffffff} has a killstreak of 5!`);
    }
    if(killer.getVariable("killStreak") == 10) {
      killer.armour = 100;
      killer.health = 100;
      mp.players.broadcast(`[!{#ff5050}FFA!{#ffffff}] !{#ff9900}${killer.socialClub}!{#ffffff} has a killstreak of 10!`);
    }
  }


  player.call("ffa:changeKS",[player.getVariable("killStreak")]);
  setTimeout(() => {
    var randomInt = Math.floor(Math.random() * (publicVar.spawnPositions.length));
    player.spawn(publicVar.spawnPositions[randomInt]);
  },2500);
});