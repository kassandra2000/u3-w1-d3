import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
// import MyAllTheBooks from "./components/MyAllTheBooks";
import scifi from "../src/data/scifi.json";
import romance from "../src/data/romance.json";
import history from "../src/data/history.json";
import horror from "../src/data/horror.json";
import fantasy from "../src/data/fantasy.json";
import { Dropdown } from "react-bootstrap";
import { Component } from "react";
import MyBookList from "./components/MyBookList";

class App extends Component {
  state = { category: scifi };
  render() {
    return (
      <div className="App">
        <MyNavbar brandName="EpicLibrary" />
        <div className="d-flex justify-content-around align-items-center">
          <MyWelcome
            variant="secondary my-3 w-25"
            text="Hello in EpicLibrary"
          />

          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Genere
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={(e) => {
                  this.setState({ category: romance });
                }}
              >
                romance
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={(e) => {
                  this.setState({ category: scifi });
                }}
              >
                scifi
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={(e) => {
                  this.setState({ category: horror });
                }}
              >
                horror
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={(e) => {
                  this.setState({ category: history });
                }}
              >
                history
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={(e) => {
                  this.setState({ category: fantasy });
                }}
              >
                fantasy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h1 className="text-center my-5  ">EpicLibrary</h1>
        {/* <div className="card-container">
          <MyAllTheBooks category={this.state.category} />
        </div> */}

        <div className="card-container">
          <MyBookList category={this.state.category} />
        </div>

        {/* { console.log(this.state.category[0])} */}
        {/* <div className="card-container">
          <MySingleBook category={this.state.category[0]} />
        </div> */}

        <MyFooter />
      </div>
    );
  }
}

export default App;
