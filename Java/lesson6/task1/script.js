let array = [
    {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela'},
    {quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney'},
    {quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.', author: 'Steve Jobs'},
    {quote: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt'},
    {quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.', author: 'Oprah Winfrey'},
    {quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.', author: 'James Cameron'}
]
let p1 = document.createElement('p'); let h2 = document.createElement('h3');
let button = document.createElement('button');
button.innerHTML = 'Change'; document.body.appendChild(button);
button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * array.length);
    p1.innerHTML = '';
    let quote = document.createTextNode(array[random].quote);
    p1.appendChild(quote);
    document.querySelector('div').appendChild(p1);
    h2.innerHTML = '';
    let author = document.createTextNode(array[random].author);
    h2.appendChild(author);
    document.querySelector('div').appendChild(h2);
})