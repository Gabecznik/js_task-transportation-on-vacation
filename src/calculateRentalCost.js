/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const rentCost = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days <= 0) {
    return 0;
  } else if (days < 3) {
    totalCost = days * rentCost;
  } else if (days < 7) {
    totalCost = days * rentCost - SHORT_TERM_DISCOUNT;
  } else if (days >= 7) {
    totalCost = days * rentCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
