let energy = 0;
let water = 0;
let co2 = 0;

function updateUI() {
  document.getElementById("energy").innerText = energy;
  document.getElementById("water").innerText = water;
  document.getElementById("co2").innerText = co2;

  let total = energy + water + co2;
  let percent = Math.min(total / 2, 100);

  document.getElementById("progress").style.width = percent + "%";
}

function addEnergy() {
  energy += 5;
  animate("energy", energy);
}

function addWater() {
  water += 10;
  animate("water", water);
}

function addCO2() {
  co2 += 3;
  animate("co2", co2);
}

function animate(id, value) {
  let element = document.getElementById(id);
  let start = 0;

  let interval = setInterval(() => {
    start++;
    element.innerText = start;

    if (start >= value) {
      clearInterval(interval);
      updateUI();
    }
  }, 20);
}