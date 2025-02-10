/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let TotalCost = 0;
  const RentCost = 40;

  if (days <= 0) {
    return 0;
  } else if (days < 3) {
    TotalCost = days * RentCost;
  } else if (days < 7) {
    TotalCost = days * RentCost - 20;
  } else if (days >= 7) {
    TotalCost = days * RentCost - 50;
  }

  return TotalCost;
}

module.exports = calculateRentalCost;
