let quotes = ['You are so much more than a body', 'Old ways won\'t open new doors', 
   'You can only get better through action', 'Look for something positive in each day', 'Don\'t allow anyone to make you feel you\'re not enough', 
   'Life is way too short to spend another day at war with yourself', 'I learn and grow from mistakes', 'Discipline is choosing between what you want now and what you want most',
   'Don\'t fear failure, fear being in the exact place next year as you are today', 'No one can give you what you really want but yourself', 
   'Only compare yourself to your past self', 'Stop allowing people to waste your time', 'Good things take time'
];

let d = new Date();

function introduction() {
    let greeting;

    if (d.getHours() < 12) {
       greeting = `Good morning, `
       console.log(greeting)
    } else if (d.getHours() >= 12 && d.getHours() < 20) {
        greeting = `Good afternoon, `
        console.log(greeting)
    } else if (d.getHours() > 12 && d.getHours() >= 20) {
        greeting = `Good evening, `
        console.log(greeting)
    } else {
        greeting = `Hello, `
        console.log(greeting)
    }

    return greeting + 'and welcome to Mixed Motivation!'
}

let mainParagraph = document.body.querySelector('p')

mainParagraph.innerHTML = introduction();

let quoteButton = document.getElementById('quote-button');

let quote = document.getElementById('quote');

quote.hidden = true;

function getQuote() {
    mainParagraph.hidden = true
    quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
    quote.hidden = false
    document.getElementById('info').hidden = true
    quoteButton.innerHTML = 'Come back tomorrow!'
    quoteButton.style.cursor = 'default'
    quoteButton.removeEventListener('click', getQuote)
}

quoteButton.addEventListener('click', getQuote)



