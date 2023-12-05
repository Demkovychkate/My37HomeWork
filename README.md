# My37HomeWork

My 37 Homework
Implement an ATM algorithm for:

Checking the card balance.
Withdrawing cash.
To implement the getMoney function:

It takes two input arguments, userData and bankData.
It returns a Promise. The condition to enter the first .then is the user's response to the question 'View card balance?'.
If the user chooses 'Yes' (Confirm), the function calls resolve(userData).
In the resolve function, depending on the currencies available to the user (userData), the user is asked to enter the currency for which the balance will be displayed.
If the user enters an invalid currency in the prompt, we continue to request a valid currency until a valid one is entered.
Upon entering a valid currency, the balance for that currency is displayed in the console, for example: 'Balance is: 1000 USD'.
If the user chooses 'Cancel' (No), the function calls reject({userData: userData, bankData: bankData}).
In the reject function, depending on the currencies available to the user (userData) and the available currencies in the current ATM (bankData) (with a non-zero max property indicating the absence of bills of that currency in the ATM at the moment), the user is asked to enter the currency and the amount to withdraw cash.
If the user enters an invalid currency or an amount exceeding the maximum amount for that currency, a message is displayed in the console: 'The entered amount is greater than the allowed maximum. Maximum withdrawal amount: ...'
If the user enters an amount less than the minimum amount for that currency, a message is displayed in the console: 'The entered amount is less than the allowed minimum. Minimum withdrawal amount: ...'
Upon entering a valid currency and amount, a message is displayed in the console indicating a successful cash withdrawal, for example: 'Here are your cash 200 USD 💵'.
The final message that the user should receive in the console regardless of the chosen operation is: 'Thank you, have a nice day 😊'
