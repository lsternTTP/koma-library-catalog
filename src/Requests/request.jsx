import "./request.css";

export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from AllRequests
    props.liftRequestToRemoveHandler(props.book);
  }

  return (
    <div className="bookCardRequest">
      <img src={props.book.img} className="book-imgRequest"></img>
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>   
      <button onClick={clickRemoveRequestHandler}>Cancel Request</button>
    </div>
  );
}
