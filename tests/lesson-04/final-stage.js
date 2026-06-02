function findPairsDivisibleBy17() {
    let count = 0
    for (let i = 0; i < 100; i++) {
        for (let j = i + 1; j < 100; j++) {
           
            if ((i + j) % 17 == 0) {
                count++;
                console.log(`(${i},${j})= ${i+j}`)
            }

        }
    }
    console.log(`Total we have pair of numbers: ${count} divisible by 17 `);

}
findPairsDivisibleBy17()