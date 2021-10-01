import React from "react";
import { Container } from "reactstrap";
import Slide from "./Slide";
import Playnow from "./Up/Playnow";

export default function Home() {
  return (
    <div >
      <Slide/>
      <Container style={{backgroundColor: '#000000'}}>
        <Playnow />
      </Container>
    </div>
  );
}
