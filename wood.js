
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChariWoodNeed = 3;
  const perTableWoodNeed = 10;
  const perBedWoodNeed = 50;

  const totalWoodNeededForChair = chairQuantity * perChariWoodNeed;
  const totalWoodNeededForTable = tableQuantity * perTableWoodNeed;
  const totalWoodNeededForBed = bedQuantity * perBedWoodNeed;

  const totalWoodNeedIs = totalWoodNeededForChair + totalWoodNeededForTable + totalWoodNeededForBed;
  return totalWoodNeedIs;
}

const total = woodCalculator(1, 1, 1);
console.log('Total Wood Needed is : ', total, ' CFT WOOD');