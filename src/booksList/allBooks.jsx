import "./allBooks.css";
import Book from "./book.jsx";

export default function AllBooks(props) {
  function liftBookToAppHandler(bookToAdd) {
    props.addToRequestListHandler(bookToAdd);
  }

  // function ToSearchBooks(bookToSearch) {
  //   props.handleSearch(bookToSearch);
  // }

  return (
    <div>
      {props.bookList.map((thisBook) => (
        <Book
          liftBookToAppHandler={liftBookToAppHandler}
          key={thisBook.id}
          book={thisBook}
        ></Book>
      ))}
    </div>
  );
}

//props is a special keyword in React that stands for properties and it allows you to pass data from one component to another.
