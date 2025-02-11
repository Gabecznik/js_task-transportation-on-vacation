/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const minDays = 0;
  const shotTerm = 3;
  const longTerm = 7;

  if (days <= minDays) {
    return 0;
  }

  if (days < shotTerm) {
    return days * rentCost;
  }

  if (days < longTerm) {
    return days * rentCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= longTerm) {
    return days * rentCost - LONG_TERM_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
