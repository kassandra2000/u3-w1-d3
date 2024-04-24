import { Button, Card } from "react-bootstrap";

const MySingleBook = (props) => {
  return () => {
    return (
      <Card
        className="d-inline-block"
        key={props.asin}
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className="p-0 m-0">{props.title}</Card.Title>
          <Card.Text className="p-0 m-0">{props.category}</Card.Text>
          <Card.Text className="p-1 m-0">{props.price}€</Card.Text>
          <Button variant="dark fs-5 ">Acquista</Button>
        </Card.Body>
      </Card>
    );
  };
};
export default MySingleBook;
