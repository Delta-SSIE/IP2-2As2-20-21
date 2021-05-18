const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L.gif'
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      cover: 'https://images.gr-assets.com/books/1295465264l/8884400.jpg'
    }
  ];


let seznam = document.createElement('ul');

for (let book of books) {
    let polozka = document.createElement('li');
    polozka.appendChild( document.createTextNode(book.author + ": " + book.title) );
    polozka.className = book.alreadyRead ? "precteno" : "neprecteno";
    
    let img = document.createElement('img');
    img.src = book.cover;
    polozka.appendChild(document.createElement('br'));
    polozka.appendChild(img);
    
    seznam.appendChild(polozka);
}

document.body.appendChild(seznam);