const inputFilePath = new URL('.', import.meta.url).pathname + 'input.txt';
const input = await Deno.readTextFile(inputFilePath);
// ----------------------------------------------------------------------------
const elfsMeals = input.split('\n\n');

const greatestMealCalories = elfsMeals
  .map((meals) => {
    const calories = meals.split('\n').map(Number);
    return calories.reduce((acc, calorie) => acc + calorie, 0);
  })
  .sort((a, b) => b - a);

const [first, second, thrid] = greatestMealCalories;

console.log(`part1: ${first}`);
console.log(`part2: ${first + second + thrid}`);
