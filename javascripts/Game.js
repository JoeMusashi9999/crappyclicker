//editing in progress

  
//acheivement setting

var Player = {
  
  acheivement1: new boolean(false);
  acheivement2: new boolean(false);
  acheivement3: new boolean(false);
  acheivement4: new boolean(false);
  acheivement5: new boolean(false);
  acheivement6: new boolean(false);
  acheivement7: new boolean(false);
  acheivement8: new boolean(false);
  acheivement9: new boolean(false);
  crap: 0;
  crapperclick: 1;
  crappersec: 0;
  options: {
        newsHidden: false,
        notation: "Mixed scientific",
  }
}




function updateCrap() {
    var element = document.getElementById("CrapAmount");
    element.textContent = formatValue(player.options.notation, player.crap, 2, 1);
    document.getElementById("CrapAmount").innerHTML = player.crap;
}   


function checkAcheivemnts(): (
 if crap == 100: (
   acheivement1 = true;
   window.print("you got the acheivemnt 100 crap!");
  );
);
