import "./App.css";
import Nav from "./navigationBar/nav.jsx";
import "./navigationBar/nav.css";
import AllBooks from "./booksList/allBooks.jsx";
import AllRequests from "./Requests/allrequests.jsx";
import database from "./BookData.json";
import { useState } from "react";
import SearchBooks from "./searchBar/searchBar.jsx";

export default function App() {
  //initialize request list state
  const [myRequests, setMyRequests] = useState([]);
  const [myBooks, setMyBooks] = useState(database.catalog);
  const [searchTerm, setSearchTerm] = useState("");

  // function handleSearch(term) {
  //   setSearchTerm(term);
  // }

  // const filteredBooks = myBooks.filter((book) =>
  //   book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  // );


  // function bookToSearch(searchTerm) {
  //   //filter out books from myRequests using the search terms
  //   return myRequests.filter(
  //     (booksFilter) => (booksFilter.title = searchTerm.title),
  //   );
  // }


  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      return [...myRequests, bookToAdd];
    });
  }

  function removeFromRequestListHandler(bookToRemove) {
    setMyRequests(() => {
      // filter out the bookToRemove from myRequests
      return myRequests.filter(
        (thisRequest) => thisRequest.id != bookToRemove.id,
      );
    });
  }

  return (
    <main>
      <Nav />
      <h1>Library Catalog</h1>
      <SearchBooks></SearchBooks>

      <div className="flex-books">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <AllRequests
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></AllRequests>
      </div>
    </main>
  );
}
