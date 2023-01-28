import React, { useState } from "react";
import Icon from "./Components/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'animate.css';
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCrossed, setIsCrossed] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  const reloadGame = () => {
    setIsCrossed(false);
    setWinMsg("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} won!`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`${itemArray[3]} won!`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMsg(`${itemArray[6]} won!`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} won!`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMsg(`${itemArray[1]} won!`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} won!`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} won!`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} won!`);
    }
    else if (winMsg !== false){
      if(itemArray.indexOf("empty") === -1){
        setWinMsg("Draw!")
      }
    }
  };

  const changeItem = (itemNumber) => {
    if (winMsg) {
      return toast(winMsg, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCrossed ? "cross" : "circle";
      setIsCrossed(!isCrossed);
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkIsWinner();
  };
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-danger text-uppercase text-center animate__animated animate__flip">
                {winMsg}
              </h1>
              <Button color="danger" block onClick={reloadGame}>
                RELOAD
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning animate__animated animate__flipInX">
              {isCrossed ? "Cross" : "Circle"}'s turn
            </h1>
          )}
          <div className="grid animate__animated animate__pulse">
            {itemArray.map((item, index) => (
              <Card 
                onClick={() => {
                  changeItem(index);
                }}>
                <CardBody className="box ">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
