#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you Guess Right Number");
}
else {
    console.log("you guess Wrong Number");
}
