var money = getCookie("money");
if (money != "") {
  alert("Welcome back! Your current total is: " + money);
}
else {
  alert("Is this your first time playing? Here is $10,000 to get you started :D");
  setCookie("money", 10000, 3650000);
}

function flip() {
  var bet = document.getElementById("flip_bet_input").value;
  var coin = document.getElementById("flip_coin_input").value;
  if (bet.charAt(0) == "$") {
    bet = bet.replace('$','');
  }
  bet = parseFloat(bet).toFixed(2);
  if (isNaN(parseFloat(bet))) {
    alert("Your bet is invalid.");
  }
  else {
    var regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(bet)) {
      if (coin.toLowerCase() == "heads" || coin.toLowerCase() == "tails") {
        if (getRandom(1,2) == 1) {
          if (coin.toLowerCase() == "heads") {
            alert("You win $" + (bet * 2) + "!");
            setCookie("money", parseInt(getCookie("money")) + (bet * 2), 3650000);
          }
          else {
            alert("You lost your bet of $" + bet);
            setCookie("money", parseInt(getCookie("money")) - bet, 3650000);
          }
        }
        else {
          if (coin.toLowerCase() == "tails") {
            alert("You win $" + (bet * 2) + "!");
            setCookie("money", parseInt(getCookie("money")) + (bet * 2), 3650000);
          }
          else {
            alert("You lost your bet of $" + bet);
            setCookie("money", parseInt(getCookie("money")) - bet, 3650000);
          }
        }
      }
      else {
        alert("Your coin input is invalid.");
      }

    }
    else {
      alert("Your bet is invalid." + bet);
    }
  }
}

function rollDice() {
  var bet = document.getElementById("dice_bet_input").value;
  var sides = parseInt(document.getElementById("dice_sides_input").value);
  var side = parseInt(document.getElementById("dice_side_input").value);
  console.log(sides + " " + side);

  if (bet.charAt(0) == "$") {
    bet = bet.replace('$','');
  }
  bet = parseFloat(bet).toFixed(2);
  if (isNaN(parseFloat(bet))) {
    alert("Your bet is invalid.");
  }
  else {
    var regex  = /^\d+(?:\.\d{0,2})$/;
    if (regex.test(bet)) {
      if (sides > 4 && sides < 101) {
        if (side > 0 && (side < sides || side == sides)) {
          var picked_side = getRandom(1,sides);
          if (picked_side == side) {
            alert("You win $" + round(bet * sides) + "! You picked " + side + " and the " + sides + " sided dice rolled a " + picked_side);
            setCookie("money", parseInt(getCookie("money")) + round(bet * sides), 3650000);
          }
          else {
            alert("You lost your bet of $" + bet + "! You picked " + side + " and the " + sides + " sided dice rolled a " + picked_side);
            setCookie("money", parseInt(getCookie("money")) - bet, 3650000);
          }
        }
        else {
          alert("Your side input is invalid.");
        }
      }
      else {
        alert("Your number of sides must be between 5 and 100");
      }


    }
    else {
      alert("Your bet is invalid.");
    }
  }
}


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function round(num) {
    return Math.ceil(num * 100) / 100;
}
