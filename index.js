#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // USD is a base currency
    EUR: 0.94,
    GBP: 0.81,
    INR: 83.74,
    CNY: 83.34,
    RUB: 93.29,
    TRY: 32.55,
    SAR: 3.75,
    AED: 3.67,
    AFN: 72.09,
    PKR: 278.45,
};
let answer = await inquirer.prompt([
    {
        name: "firstCurrency",
        message: "Enter From Currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "CNY",
            "RUB",
            "TRY",
            "SAR",
            "AED",
            "AFN",
            "PKR",
        ],
    },
    {
        name: "secondCurrency",
        message: "Enter to Currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "CNY",
            "RUB",
            "TRY",
            "SAR",
            "AED",
            "AFN",
            "PKR",
        ],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = currency[answer.firstCurrency]; // get currency from convert
let toAmount = currency[answer.secondCurrency]; // get currency to convert
let currencyAmount = answer.amount; // get currency amount
let baseAmount = currencyAmount / fromAmount; // currency amount any currency converted into base currency USD
let convertedAmount = baseAmount * toAmount; // after convert into base currency, base currency convert into required currency
console.log(convertedAmount);
