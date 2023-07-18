// write your code here to make the tests pass
var Library = function () {
  books = [];

  addBook = function (book) {
    books.push(book);
  };

  checkOutBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true);
    } else {
      console.log('The library doesn\'t have that book!');
    }
  };

  returnBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', false);
    } else {
      console.log('The library doesn\'t have that book!');
    }
  };

  return {
    addBook,
    checkOutBook,
    returnBook
  }
};

var Book = function (title, author) {
  var attributes = {
    title: title,
    author: author,
    checkedOut: false,
  }

  getAttribute = function (attribute) {
    return attributes[attribute];
  };

  setAttribute = function (attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };

  return {
    getAttribute,
    setAttribute
  }
};