//editing in progress

  
//acheivement setting

var Player = {
  
  acheivement1: false,
  acheivement2: false,
  acheivement3: false,
  acheivement4: false,
  acheivement5: false,
  acheivement6: false,
  acheivement7: false,
  acheivement8: false,
  acheivement9: false,
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
}   

// function whenever the player clicks the "upgrade clicker" button
function upgradeClicker() {
  if (Player.crap >= costOfUpgrade) {
    Player.crapperclick += 1
    Player.costOfUpgrade += Player.costOfUpgrade*4
  } else: {
    //change latter to a spill screen on top of the resr of the page.
    alert("You do not have " + costOfUpgrade+ " crap!");
}
  
function checkAcheivemnts() {
  if (Player.crap == 100 && Player.acheivement1 == false) {
    Player.acheivement1 = true;
    window.print("you got the acheivement 100 crap!");
  }
} 

