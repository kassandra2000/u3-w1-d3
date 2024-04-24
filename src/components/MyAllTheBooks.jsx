// import fantasy from "../data/fantasy.json";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const MyAllTheBooks = (props) => {
  console.log(props)
  return props.category.map((book) => {
    return (
      <Card
        className="d-inline-block"
        key={book.asin}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title className="p-0 m-0">{book.title}</Card.Title>
          <Card.Text className="p-0 m-0">{book.category}</Card.Text>
          <Card.Text className="p-1 m-0">{book.price}€</Card.Text>
          <Button variant="dark fs-5 ">Acquista</Button>
        </Card.Body>
      </Card>
    );
  });
};

export default MyAllTheBooks;
