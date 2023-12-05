let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
},
bankData = {
    'USD': {
        max: 3000,
        min: 100,
        img: '💵'
    },
    'EUR': {
        max: 1000,
        min: 50,
        img: '💶'
    },
    'UAH': {
        max: 0,
        min: 0,
        img: '💴'
    },
    'GBP': {
        max: 10000,
        min: 100,
        img: '💷'
    }
}


function getMoney(userData, bankData) {
    return new Promise((resolve, reject) => {
        confirm('Бажаєте переглянути баланс на карті?')
            ? resolve(userData)
            : reject({ userData, bankData });
    })

    .then((userData) => {

        let selectedCurrency = prompt('Введіть назву валюти в форматі USD,EUR,UAH,GBP');

        while (userData[selectedCurrency] === undefined) {
            alert('Невірний формат валюти, будь ласка, введіть назву валюти в форматі USD,EUR,UAH,GBP ');
            selectedCurrency = prompt(' Введіть назву валюти в форматі USD,EUR,UAH,GBP ');
        }
    
        console.log(`Ваш баланс складає: ${userData[selectedCurrency]} ${selectedCurrency}`);
        return userData;
    })

    .catch(({ userData, bankData }) => {
        const withdrawCurrency = prompt('Введіть назву валюти в якій Ви хочете зняти кошти  USD,EUR,UAH,GBP');
    
        
        if (!withdrawCurrency || !bankData[withdrawCurrency]) {
            console.log('Невірний формат валюти, будь ласка, введіть назву валюти в форматі USD,EUR,UAH,GBP ');
          
        }
    
        const withdrawData = bankData[withdrawCurrency];
        const withdrawAmount = Number(prompt(`Введіть бажану суму в діапазоні  (${withdrawData.min} - ${withdrawData.max}):`));
    
        if (withdrawData.max >= withdrawAmount && withdrawData.min <= withdrawAmount) {
            console.log(`Ось Ваші гроші ${withdrawAmount} ${withdrawCurrency} ${withdrawData.img}`);
        } else {
            console.log(`ВВедена сума менше допустимої. Мінімальна сумма зняття ${withdrawData.min}`);
        }
    
        return userData;
    })

    .finally(() => {
        console.log('Thank you, have a nice day 😊');
    });
}

getMoney(userData, bankData);
