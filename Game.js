//editing in progress

  
//acheivement setting

var Player = {
  
  achievement1: false,
  achievement2: false,
  achievement3: false,
  achievement4: false,
  achievement5: false,
  achievement6: false,
  achievement7: false,
  achievement8: false,
  achievement9: false,
  crap: 0,
  crapperclick: 1,
  crappersec: 0,
  crapUpgrade: 10,
  costOfUpgrade: 10,
  options: {
        newsHidden: false,
        notation: "Mixed scientific",
  }
}



// function whenever the player clicks the "get crap" button
function updateCrap() {
  document.getElementById("CrapAmount").textContent=(String(Player.crap+=Player.crapperclick));
  checkAchievements()
}   

// function whenever the player clicks the "upgrade clicker" button
function upgradeClicker() {
  if (Player.crap >= Player.costOfUpgrade) {
    Player.crapperclick += 1;
    Player.costOfUpgrade += Player.costOfUpgrade*4;
  } else {
    //change latter to a spill screen on top of the resr of the page.
    alert("You do not have " + Player.costOfUpgrade+ " crap!");
  }
}
  
function checkAchievements() {
  if (Player.crap >= 100 && Player.achievement1 == false) {
    Player.achievement1 = true;
    alert("you got the achievement 100 crap!");
  }
} 

