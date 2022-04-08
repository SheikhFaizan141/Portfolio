const quoteArea = document.getElementById('quote-container');


async function getQuoteData() {
    const res = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const data = await res.json();

    const randomIndex = Math.floor(Math.random() * 102);
    quoteArea.innerHTML = `
    <h4>Random Quote</h4>
    <blockquote id="quote">
       ${data['quotes'][randomIndex]['quote']}
        <figcaption>-${data['quotes'][randomIndex]['author']}</figcaption>
    </blockquote>
    `;
}


getQuoteData()