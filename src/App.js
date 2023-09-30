import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [karakterlerData, setKarakterlerData] = useState([]);
  const [selected, setselected] = useState("");
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setKarakterlerData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error.response.message);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {/* nullish coelacence */}
      {karakterlerData.length && <Karakter karakterlerData={karakterlerData} />}
    </div>
  );
};

export default App;
