import "./searchBar.css";

export default function SearchBooks(props) {
  const searchBarEvent = (e) => {
    //prevent refresh with clicking button
    e.preventDefault();
    //take what is in the input field and lift state to App
    e.target.value;
    console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={searchBarEvent}
          placeholder="Search"
        ></input>
        <input
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}
