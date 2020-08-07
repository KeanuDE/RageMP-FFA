const timerBarPool = require("timerbars");

const TextTimerBar = require("timerbars/classes/TextTimerBar");
const PlayerTimerBar = require("timerbars/classes/PlayerTimerBar");
const BarTimerBar = require("timerbars/classes/BarTimerBar");
const CheckpointTimerBar = require("timerbars/classes/CheckpointTimerBar");

let ksBar = new TextTimerBar("KILLSTREAK", "0");
let kBar = new TextTimerBar("TOTAL KILLS", "0");

timerBarPool.add(ksBar,kBar);

mp.gui.chat.colors = true;
mp.events.add("ffa:changeKS",(ks) => {
  ksBar.text = String(ks);
});

mp.events.add("ffa:changeKills",(kills) => {
  kBar.text = String(kills);
});