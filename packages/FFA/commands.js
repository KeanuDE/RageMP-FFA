mp.events.addCommand("pos",(player) => {
  console.log(`${player.position.x},${player.position.y},${player.position.z}`);
})
mp.events.addCommand("scoreboard",(player,car) => {
  var _firstPlayer = ["",0];
  var _secondPlayer = ["",0];
  var _thirdPlayer = ["",0];
  mp.players.forEach((_player) => {
    if(_player.getVariable("kills") > _firstPlayer[1]) {
      _firstPlayer[0] = _player.socialClub;
      _firstPlayer[1] = Number(_player.getVariable("kills"));
    } else if (_player.getVariable("kills") > _secondPlayer[1]) {
      _secondPlayer[0] = _player.socialClub;
      _secondPlayer[1] = Number(_player.getVariable("kills"));
    } else if(_player.getVariable("kills") > _thirdPlayer[1]) {
      _thirdPlayer[0] = _player.socialClub;
      _thirdPlayer[1] = Number(_player.getVariable("kills"));
    }
  });

  var _string = `[!{#ff5050}FFA-Scoreboard!{#ffffff}]\n`;

  if(_firstPlayer[0] == "") {
    _firstPlayer[0] = player.socialClub;
    _firstPlayer[1] = Number(player.getVariable("kills"));
  } else if(_secondPlayer[0] == "" && _firstPlayer[0] != player.socialClub) {
    _secondPlayer[0] = player.socialClub;
    _secondPlayer[1] = Number(player.getVariable("kills"));
  } else if(_thirdPlayer[0] == "" && _secondPlayer[0] != player.socialClub && _firstPlayer[0] != player.socialClub) {
    _thirdPlayer[0] = player.socialClub;
    _thirdPlayer[1] = Number(player.getVariable("kills"));
  }

  if(_firstPlayer[0] != "") {
    _string = _string + `1.${_firstPlayer[0]} >> !{#ffcc00}${_firstPlayer[1]} !{#ffffff}`;
  }
  if(_secondPlayer[0] != "") {
    _string = _string + `|| 2.${_secondPlayer[0]} >> !{#ffcc00}${_secondPlayer[1]} !{#ffffff}`;
  }
  if(_thirdPlayer[0] != "") {
    _string = _string + `|| 3.${_third[0]} >> !{#ffcc00}${_thirdPlayer[1]} !{#ffffff}`;
  }

  player.outputChatBox(_string);
});