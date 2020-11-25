import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tugas from "./tugas/Counter";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Tugas} />
    </Router>
  );
}

export default App;