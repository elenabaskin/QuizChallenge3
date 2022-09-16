let currentNum = 1;
var hasUpgraded = false;

function amount() {
  console.log("up +1!");
  document.querySelector(".currentNum").innerHTML =
    currentNum++ + " " + "cookie(s)";

  while (currentNum == 16) {
    alert(
      "ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: You've earned a glass of milk (dairy-free, of course)! Click the glass!"
    );
    document.querySelector(".first").style.visibility = "visible";
    console.log("Reached 15 cookies!");
    break;
  }

  while (currentNum == 31) {
    alert(
      "ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: You've earned a hand mixer to make making cookies easier! Click the mixer!"
    );
    document.querySelector(".second").style.visibility = "visible";
    console.log("Reached 30 cookies!");
    break;
  }

  while (currentNum == 46) {
    alert(
      "ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: You've finally earned a dish to store your cookies! Click the dish!"
    );
    document.querySelector(".third").style.visibility = "visible";
    console.log("Reached 45 cookies!");
    break;
  }

  while (currentNum == 61) {
    alert("ଘ(੭ˊᵕˋ)੭* ੈ✩‧˚: You've earned another cookie! Click the cookie!");
    document.querySelector(".fourth").style.visibility = "visible";
    console.log("Reached 60 cookies!");
    break;
  }
}

function firstUpgrade() {
  var milk = prompt(
    "ᵔᴥᵔ: Enter your favorite non-dairy milk: soy, almond, coconut, cashew, or oat!"
  );
  console.log(milk);
}

function secondUpgrade() {
  var mixer = prompt(
    "ᵔᴥᵔ: Which of my favorite colors is your favorite (for your imaginary mixer, of course): pastel yellow, soft pink, or periwinkle?"
  );
  console.log(mixer);
}

function thirdUpgrade() {
  var plate = prompt(
    "ᵔᴥᵔ: Pick flowers for the design on your (imaginary) plate: roses, lilies, daisies, tulips, or buttercups?"
  );
  console.log(plate);
}

function fourthUpgrade() {
  var favCookie = prompt("ᵔᴥᵔ: What's your favorite kind of cookie?");
  console.log(favCookie);
}
