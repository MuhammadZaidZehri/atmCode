#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Available balance is : " + myBalance);
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin:",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select Option",
      type: "list",
      choices: ["withdraw", "fastCash", "check Balance"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
      },
    ]);

    if (myBalance < amountAns.amount) {
      console.log(
        "You do not have sufficient balance in your account to proceed this transactions."
      );
    } else {
      myBalance -= amountAns.amount;
      //  console.log("Now your balance is " + myBalance);
      console.log(`Your Remaining Balance is ${myBalance}`);
    }
  } else if (operationAns.operation === "fastCash") {
    let fastCash = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Select Your Amount",
        type: "list",
        choices: ["500", "1000", "2000", "5000"],
      },
    ]);

    let amount = fastCash.fastCash;
    if (myBalance < amount) {
      console.log(
        "You do not have sufficient balance in your account to proceed this transactions."
      );
    } else {
      myBalance -= amount;
      console.log(`Your Remaining Balance is ${myBalance}`);
    }
  } else if (operationAns.operation === "check Balance") {
    console.log(`Your balance is ${myBalance}`);
  }
} else {
  console.log("Incorrect Pin Number");
}