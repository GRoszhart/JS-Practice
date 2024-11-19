let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;

const pointsDisplay = document.getElementById('points');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');

// Click event for the main button
clickerButton.addEventListener('click', () => {
  points += pointsPerClick;
  updateDisplay();
});

// Click event for the upgrade button
upgradeButton.addEventListener('click', () => {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick++;
    upgradeCost *= 2; // Increase cost for the next upgrade
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
    updateDisplay();
  } else {
    alert('Not enough points for upgrade!');
  }
});

// Update the displayed points
function updateDisplay() {
  pointsDisplay.textContent = points;
}
