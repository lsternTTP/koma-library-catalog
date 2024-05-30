import "./book.css";

export default function Book(props) {
  // const dispatch = useDispatch();
  // handle add request button click
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }

  return (
    // you need a container after the return because you need one element in the return in . Jsx expects only one element returned unless they are contained in one parent.
    <div className="bookCard">
      <img src={props.book.img} className="book-img"></img>
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <p>{props.book.year}</p>
      <p>{props.book.language}</p>
      <p>{props.book.description}</p>
      <button onClick={clickRequestHandler}> Request Book</button>
    </div>
  );
}
