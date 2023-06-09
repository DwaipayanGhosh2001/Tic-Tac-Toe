import React, { useState } from "react";
import Icon from "./Components/Icons";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import {Card, CardBody, Container, Button, Row, Col} from "reactstrap";
  import "./App.css";
// Array of the 9 plots in the game. The fill func will initially fill the plots with empty.
const itemArray= new Array(9).fill("empty");
const App = () => {

    // state to check if the card has cross or circle value.
const [isCross, setIsCross] = useState(false);
// state to show to win message.
const [winMesssage, setWinMessage] = useState("");


//func to reload the game
const reloadgame= () =>
{
    //resetting the states and the array. 
setIsCross(false);
setWinMessage("");
itemArray.fill("empty", 0, 9);
}
// func for the winner logic
const IsWinner= () =>
{
    if (
        itemArray[0] === itemArray[1] &&
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5]
      ) {
        setWinMessage(`${itemArray[3]} won`);
      } else if (
        itemArray[6] !== "empty" &&
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[6]} won`);
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6]
      ) {
        setWinMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[1] !== "empty" &&
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7]
      ) {
        setWinMessage(`${itemArray[1]} won`);
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[2]} won`);
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8]
      ) {
        setWinMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6]
      ) {
        setWinMessage(`${itemArray[2]} won`);
      }
    };


const changeItem = itemNumber => {
    if (winMesssage) {
      return toast(winMesssage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    IsWinner();
  };
    return(
        <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3"> 
            {/* If the win message exists then we write the html to display that else we take input using onclick*/}
            {winMesssage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMesssage}
                </h1>
                <Button color="success" block onClick={reloadgame}>
                  Reload the game
                </Button>
              </div>
            ) : (
                <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} turns
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card color="warning" onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                  </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    )
              }
              
export default App;