import Request from "./request.jsx";
import "./allrequests.css";

export default function AllRequests(props) {
  function liftRequestToRemoveHandler(bookToRemove) {
    // call the function received from App component
    props.removeFromRequestListHandler(bookToRemove);
  }

  return (
    <section id="all-requests-list">
      <h2 id="h2-request-id" className="request-h2">
        Requests
      </h2>
      {props.requestList.map((thisRequest) => (
        <Request
          liftRequestToRemoveHandler={liftRequestToRemoveHandler}
          book={thisRequest}
          key={thisRequest.id}
        ></Request>
      ))}
    </section>
  );
}
