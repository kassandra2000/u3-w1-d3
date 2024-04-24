import MySingleBook from "./MySingleBook";

const MyBookList = (props) => {
    
  return props.category.map((book) => {
    return (
  
        <div className="card-container">
          <MySingleBook category={book} />
        </div>
    );
  });
};
export default MyBookList;
