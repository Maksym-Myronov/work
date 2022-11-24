'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	const f = prompt('Введите обязательную статью расходов в этом месяце', '');
            s= prompt('Во сколько обойдется?', '');
	appData.expenses[f] = s;
}

alert('Бюджет на 1 день: ' + Math.round(appData.budjet / 30));