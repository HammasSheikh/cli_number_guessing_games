#! /usr/bin/env node
import inquirer from 'inquirer';
// 1)computer will generate a number-done
// 2) user input for guessing number-done
// 3) compare user input withn computer generating number-done
const randomNumber = Math.floor(Math.random() * 5 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number betweem 1 to 6: ",
    },
]);
if (answers.userGuessNumber == randomNumber) {
    console.log("congratulations! you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
//  console.log(answer
