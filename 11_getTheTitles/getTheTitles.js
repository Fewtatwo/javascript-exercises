const getTheTitles = function(books) {

    const bookTitles = [];

    for (let i = 0; i != books.length; i++) {
        bookTitles.push(books[i].title)
    };

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
