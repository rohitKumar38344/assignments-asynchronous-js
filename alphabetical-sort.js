// QUESTION-4

const getBooksWithTitle = function (books, callback) {
  const booksWithTitle = books.map((value) => value.title);

  callback(booksWithTitle);
};

function sortBooksWithTitleAlphabetically(booksWithTitle) {
  const booksSorted = booksWithTitle.sort();
  console.log(booksSorted);
}

const books = [
  {
    title: "Rules For Life",
    author: "Jordan Peterson",
    year: "2015",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2016",
  },
  {
    title: "Thinking Fast And Slow",
    author: "Daniel Kahneman",
    year: "2017",
  },
  {
    title: "Man's Search For Meaning",
    author: "Viktor Frankl",
    year: "2018",
  },
];

getBooksWithTitle(books, sortBooksWithTitleAlphabetically);
