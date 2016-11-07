/**
 * Created by Kenzie on 10/17/2016.
 */
/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Midterm  || created: 11.7.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let firstName, lastName;
let cardNumber,pinNumber,checkDeposit,checkWithdraw,saveDeposit,saveWithdraw,checkBalance,saveBalance;
const CHECKBALANCE = 1000, SAVINGBALANCE = 1000, MAXTRIES = 3;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse ===1){
        setFirstName();
        setLastName();
        setCardNumber();
        setPinNumber();
        setCheckDeposit();
        setCheckWithdraw();
        setSaveDeposit();
        setSaveWithdraw();
        setCheckBalance();
        setSaveBalance();
        return main();
    }
    printGoodbye();
}


function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setFirstName(){
    firstName = PROMPT.question(`\nPlease enter your first name:`);
}

function setLastName(){
    lastName = PROMPT.question(`\nPlease enter your last name:`);
}

function setCardNumber() {
    let counter = 0;
    let answered = 0;
    const MAXCARD = 999999;
    if (cardNumber != null && cardNumber <= MAXCARD) {
    } else {
        cardNumber = 111111;
    }
    while (counter < MAXTRIES && answered != 1) {
        cardNumber = Number(PROMPT.question(`\nPlease enter your card number:`));
        if (cardNumber < 100000 || cardNumber > MAXCARD) {
            console.log(`\n invalid Card`);
            counter++;
            answered = 0;
        } else {
            answered = 1;
        }
    }
}

function setPinNumber() {
    let counter = 0;
    let answered = 0;
    const MAXPIN = 9999;
    if (pinNumber != null && pinNumber <= MAXPIN) {
    } else {
        pinNumber = 1111;
    }
    while (counter < MAXTRIES && answered != 1) {
        pinNumber = Number(PROMPT.question(`\nPlease enter your Pin number:`));
        if (pinNumber < 1000 || pinNumber > MAXPIN) {
            console.log(`\n invalid pin`);
            counter++;
            answered = 0;
        } else {
            answered = 1;
        }
    }
}

function setCheckDeposit() {
    checkDeposit = Number(PROMPT.question(`\n How much do you wish to deposit into Checking`));
}

function setCheckWithdraw() {
    checkWithdraw = Number(PROMPT.question(`\n How much do you wish to withdraw from checking`));
    if (checkWithdraw > CHECKBALANCE){
        console.log(`\n Insufficient Funds`)
    }
}

function setSaveDeposit() {
    saveDeposit = Number(PROMPT.question(`\n How much do you wish to deposit into Savings`));
}

function setSaveWithdraw() {
    saveWithdraw = Number(PROMPT.question(`\n How much do you wish to withdraw from Savings`));
    if (saveWithdraw > SAVINGBALANCE){
        console.log(`\n Insufficient Funds`);
    }
}

function setCheckBalance() {
    checkBalance = (CHECKBALANCE + checkDeposit - checkWithdraw);
}

function setSaveBalance() {
    saveBalance = (SAVINGBALANCE + saveDeposit - saveWithdraw);
}

function printGoodbye() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\nThank you for using us. Your checking balance is ${checkBalance} and you savings balance is ${saveBalance}. Have a good day.`);
}