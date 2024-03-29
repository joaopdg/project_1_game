/* Old Values (windows)
player.x -= 3;
player.y -= 2.5;
scrollVal += 1.5
*/

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      playerWalking();
      if (player.x > 0) {
        player.x -= 5;
      }
      break;
    case "ArrowRight":
      //SCROLLING ANIMATION
      if (player.x > 100 && dragonBoss.x > 1000) scrollVal += 3.5;
      playerWalking();
      if (player.x + player.width < cWidth) {
        player.x += 5;
      }
      break;
    case "ArrowUp":
      playerWalking();
      if (player.y > background.roadHeight) {
        player.y -= 4.5;
      }
      break;
    case "ArrowDown":
      playerWalking();
      if (player.y + player.height < cHeight - 25) {
        player.y += 4.5;
      }
      break;
    case "KeyA":
      playerPunchS.play();
      player.width = player.withPunching;
      playerImage.src = playerPunch.src;
      break;
    case "KeyS":
      playerKickS.play();
      player.width = player.widthKicking;
      playerImage.src = playerKick.src;
      break;
    case "KeyD":
      player.width = player.widthBlocking;
      playerImage.src = playerBlock.src;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  player.width = player.widthStopped;
  playerImage.src = playerStopped.src;
});
