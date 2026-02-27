function oilPrice(diesel, petrol, octane){
  const dieselPrice = 114;
  const petrolPrice = 130;
  const octanePrice = 135;
  // console.log(diesel, petrol, octane);

  const dieselAmount = diesel * dieselPrice;
  const petrolAmount = petrol * petrolPrice;
  const octaneAmount = octane * octanePrice;
  // console.log(dieselAmount, petrolAmount, octaneAmount);

  const totalSumOfAllOils = dieselAmount + petrolAmount + octaneAmount;

  return totalSumOfAllOils;
}

const needDiesel = 5;
const needPetrol = 10;
const needOctane = 15;

const total = oilPrice(needDiesel, needPetrol, needOctane);
console.log(total);