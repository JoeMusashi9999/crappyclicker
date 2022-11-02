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
  options: {
        newsHidden: false,
        notation: "Mixed scientific",
  }
}



//update crap not working
function updateCrap() {
  document.getElementById("CrapAmount").textContent=(String(Player.crap+=Player.crapperclick));
}   
function upgradeClicker() {
  if (Player.crap >= 10) {
    Player.crapperclick +=1
    Player.crapUpgrade += Player.crapUpgrade*10
  }
}
function checkAcheivemnts() {
  if (Player.crap == 100 && Player.acheivement1 == false) {
    Player.acheivement1 = true;
    window.print("you got the acheivement 100 crap!");
  }
} 

