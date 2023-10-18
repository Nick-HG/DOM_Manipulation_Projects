let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
      quote: "Be yourself; everyone else is already taken.",
      person: "Oscar Wilde",
  },
  {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      person: "Mahatma Gandhi",
  },
  {
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
      person: "Martin Luther King",
  },
  {
      quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
      person: "Albert Einstein",
  },
  {
      quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      person: "Thomas A. Edison",
  },
  {
      quote: "If you're going through hell, keep going.",
      person: "Winston Churchill",
  },
  {
      quote: "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
      person: "L.M. Montgomery",
  },
  {
      quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
      person: "George Bernard Shaw",
  },
  {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain",
  },
  {
      quote: "Early to bed and early to rise makes a man healthy, wealthy and wise.",
      person: "Benjamin Franklin",
  }
]

let lastRandom = -1; // Initialize to an invalid index

btn.addEventListener('click', function() {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastRandom); // Keep generating random numbers until it's different from the previous one

  lastRandom = random; // Update the lastRandom variable

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})