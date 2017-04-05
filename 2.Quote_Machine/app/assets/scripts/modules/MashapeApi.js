import $ from 'jquery';

export function mashape() {
  let theQuote = '';
  let theAuthor = '';
  createQuote();

  $('a.btn').on("click", () => {
    createQuote();
  });

  function createQuote() {
    // The following is the API call to the MashApe random quotes API server
    const output = $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success(data) {
        theQuote = data.quote;
        theAuthor = data.author;
        document.getElementById('quote').innerHTML = theQuote;
        document.getElementById('author').innerHTML = theAuthor;
      },
      error(err) {
        // If, for some reason, the API becomes unavailable, the Quote Machine will still work, though in a limited manner.
        const quotes = {
          1: ['If a man does his best, what else is there?', 'Gen. George S. Patton'],
          2: ['Give me chastity and continence, but not yet.', 'Saint Augustine'],
          3: ['You can avoid reality, but you cannot avoid the consequences of avoiding reality.', 'Ayn Rand'],
          4: ['I have always depended on the kindness of strangers.', 'A Streetcar Named Desire']
        };
        const randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

        $('#quote').html(quotes[randomQuoteNumber][0]);
        $('#author').html(quotes[randomQuoteNumber][1]);

      },
      beforeSend(xhr) {
        // Enter here your Mashape key
        xhr.setRequestHeader("X-Mashape-Key", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");
      }
    });
  }
}
