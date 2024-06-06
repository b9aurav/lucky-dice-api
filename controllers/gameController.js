function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  return { dice1: dice1, dice2: dice2 };
}

function generateResult(dice1, dice2, choice) {
  const total = dice1 + dice2;
  let result;
  if (choice === "7 up" && total > 7) result = "Won";
  else if (choice === "7 down" && total < 7) result = "Won";
  else if (choice === "Lucky 7" && total === 7) result = "Won";
  else result = "Lost";
  return result;
}

function calculatePoints(result, bet, points) {
  const newPoints = result === "Won" ? points + bet : points - bet;
  return newPoints;
}

exports.rollDice = async function (req, res) {
    res.json(rollDice());
};

exports.getResult = async function (req, res) {
    const { dice1, dice2, choice } = req.body;
    const result = generateResult(dice1, dice2, choice);
    res.json({ result: result });
}

exports.getPoints = async function (req, res) {
    const { result, bet, points } = req.body;
    const newPoints = calculatePoints(result, bet, points);
    res.json({ points: newPoints });
}