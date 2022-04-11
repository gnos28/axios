function getSimpsonQuote() {
    
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data
      })
      .then(function(quote) {
        console.log('data decoded from JSON:', quote);
  
        const simpsonsQuote = `
          <p><strong>${quote[0].character}</strong></p>
          <img src="${quote[0].image}" />
          <p>${quote[0].quote}</p>
        `;
        document.querySelector('#simpson-quote').innerHTML = simpsonsQuote;
      });
  }
  
  getSimpsonQuote();
  
  document.querySelector("#new-quote").addEventListener("click", getSimpsonQuote)