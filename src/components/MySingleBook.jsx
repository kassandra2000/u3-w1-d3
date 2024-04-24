import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class MySingleBook extends Component {
  state = {
    selected: false,
  };

  toggleFunc = () => {
    console.log(this.state.selected);
   
    this.state.selected === false
      ? this.setState({ selected: true })
      : this.setState({ selected: false });
  };
  render() {
    const props = this.props;

    return (
      <>
        <Card
          className= { `d-inline-block ${this.state.selected && "toggle"}` }
          key={props.category.asin}
          style={{ width: "18rem" }}
        >
         
          <Card.Img
            onClick={this.toggleFunc}
            variant="top"
            src={props.category.img}
          />
          {
            <Card.Body>
              <Card.Title className="p-0 m-0">
                {props.category.title}
              </Card.Title>
              {
                <Card.Text className="p-0 m-0">
                  {props.category.category}
                </Card.Text>
              }
              {
                <Card.Text className="p-1 m-0">
                  {props.category.price}€
                </Card.Text>
              }
              <Button variant="dark fs-5 ">Acquista</Button>
            </Card.Body>
          }
        </Card>
      </>
    );
  }
}
// const MySingleBook = (props) => {
//   console.log(props);
//   return (
//     <Card
//       className="d-inline-block"
//       key={props.category.asin}
//       style={{ width: "18rem" }}
//     >
//       <Card.Img variant="top" src={props.category.img} />
//       {
//         <Card.Body>
//           <Card.Title className="p-0 m-0">{props.category.title}</Card.Title>
//           {<Card.Text className="p-0 m-0">{props.category.category}</Card.Text>}
//           {<Card.Text className="p-1 m-0">{props.category.price}€</Card.Text>}
//           <Button variant="dark fs-5 ">Acquista</Button>
//         </Card.Body>
//       }
//     </Card>
//   );
// };
export default MySingleBook;
