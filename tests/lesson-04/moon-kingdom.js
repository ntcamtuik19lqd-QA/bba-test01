function createCharacter() {
  const character = [
    { name: "Mario", level: 10, health: 300 },
    { name: "Luigi", level: 5, health: 150 },
    { name: "Peach", level: 25, health: 500 },
  ];

  const characterPowerUpArray = [];
  const possibleWinners = [];
  //first method
  for (let i = 0; i < character.length; i++) {
    const characterNew = character[i];

    const characterPowerUp = {
      name: characterNew.name.toUpperCase(),
      level: characterNew.level * 2,
      health: characterNew.health * 3,
    };

    characterPowerUpArray.push(characterPowerUp);

    if (characterPowerUp.health > 1000) {
      possibleWinners.push(characterPowerUp);
    }
  }
  console.log("Character array:", character);
  console.log("characterPowerUp array:", characterPowerUpArray);
  console.log("possibleWinners array:", possibleWinners);

  //second method
  const characterPowerUpArray2 = character.map((character) => ({
    name: character.name.toUpperCase(),
    level: character.level * 2,
    health: character.health * 3,
  }));
  const possibleWinners2 = characterPowerUpArray2.filter(
    (character) => character.health > 1000,
  );
  console.log("Character array:", character);
  console.log("characterPowerUp array2:", characterPowerUpArray2);
  console.log("possibleWinners array2:", possibleWinners2);
}
createCharacter();
//bai 2 Tạo hàm printLeaderboard:
// method 1 sử dụng Bubble sort
function printLeaderBoard(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length - 1; j++) {
      if (players[j].score < players[j + 1].score) {
        const temp = players[j];
        players[j] = players[j + 1];
        players[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < players.length; i++) {
    let medal = "";
    if (i === 0) {
      medal = "🥇";
    } else {
      if (i === 1) {
        medal = "🥈";
      } else {
        if (i === 2) {
          medal = "🥉";
        }
      }
    }
    console.log(`${medal} ${players[i].name} - ${players[i].score}`);
  }
}

//method 2 dùng hàm sort có sẵn
function printLeaderBoard2(players) {
  const medals = ["🥇", "🥈", "🥉"];
  players.sort((a, b) => b.score - a.score);

  for (let i = 0; i < players.length; i++) {
    console.log(
      `${medals[i] || ""} ${i + 1}. ${players[i].name} - ${players[i].score}`,
    );
  }
}
const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];
console.log("result for method 1\n")
printLeaderBoard(players);

console.log("result for method 2\n")
printLeaderBoard2(players);
