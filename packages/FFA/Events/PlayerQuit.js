mp.events.add("playerQuit",(player,exitType,reason) => {
  mp.players.broadcast(`[!{#ff5050}FFA!{#ffffff}] !{#ff9900}${player.socialClub}!{#ffffff} left the server.`);
})