mp.events.add("playerChat",(player, msg) => {
  mp.players.broadcast(`!{#cc0000}Owner !{#ffffff}| !{#ff9900}${player.socialClub}: !{#ffffff}${msg}`);
});