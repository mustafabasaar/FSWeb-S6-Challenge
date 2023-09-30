import React from "react";
import "../App";
import "./accordion.css";
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function Karakter(props) {
  const [open, setOpen] = useState("1");
  const toggle = (idx) => {
    if (open === idx) {
      setOpen();
    } else {
      setOpen(idx);
    }
  };

  const { karakterlerData } = props;
  console.log("iç", karakterlerData);
  return (
    <div>
      {karakterlerData.map((karakter, idx) => (
        <div key={idx}>
          <Accordion class="accordion-type" open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId={idx}>{karakter.name}</AccordionHeader>
              <AccordionBody accordionId={idx}>
                <h3>Birth Year:{karakter.birth_year}</h3>
                <h3>Gender:{karakter.gender}</h3>
                <h3>Eye Color:{karakter.eye_color}</h3>
                <h3>Hair Color:{karakter.hair_color}</h3>
                <h3>Height:{karakter.height}</h3>
                <h3>Films:{karakter.films}</h3>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem></AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
export default Karakter;
