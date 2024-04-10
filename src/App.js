import React, { useState, useEffect } from "react";
import Sunburst from "./Sunburst";

const App = () => {
  // const [jsonData, setJsonData] = useState(null);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then(response => response.json())
  //     .then(data => setJsonData(data))
  //     .catch(error => console.error("Error fetching data:", error));
  //   console.log("first")
  //   console.log(jsonData)
  // }, []);

  return (
    <div className="App">
      <h1>Sunburst Chart</h1>
      <Sunburst/>
    </div>
  );
  
};

export default App;
