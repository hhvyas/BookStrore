import React from "react";
import "../css/BookDescription/DescriptionContent.css";
import Comments from "./Comments";
import Description from "./Description";
import { bookContext } from "../../../Contexts/Context";
function DescriptionContent() {
  const book = React.useContext(bookContext);
  // console.log(book)
  return (
    <>
      {book && (
        <>
          <Description />
          {/* <Comments /> */}
          <div className="book-summary">
            <h3>Summary</h3>
            <p>
              The book is written for managers who have to supervise and control
              their employees as well as complete certain essential office
              tasks. It covers certain techniques that could help its readers in
              improving their productivity, job satisfaction and personal
              prosperity. This is because individual satisfaction can gradually
              lead to the growth of any organisation. The authors of the book
              Kenneth Hartley Blanchard and Spencer Johnson have briefly
              explained few methods of management that are based on few studies
              in medicine and behavioural sciences. The book talks about three
              practical management techniques such as one minute goal setting,
              one minute praising and one minute reprimand. These three simple
              yet effective techniques could do wonders for both individual and
              organisational growth. The one minute goal setting technique says
              that each member of a team is essential to fulfil the set goals.
              For instance, in order to complete daily, weekly, monthly or
              yearly tasks, team effort is needed, and for that, individual
              effort matters a lot. One minute praising technique is all about
              appreciation. According to this technique a manager must reward a
              team member for completing a specific task efficiently. Plus, a
              manager could spend a minute to acknowledge a hardworking
              employee. The last technique is one-minute reprimand that says
              that the manager has to give feedback to few members who committed
              mistakes in their tasks. But the feedback must be given in polite
              manner so that their interpersonal relations are not affected.
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default DescriptionContent;
