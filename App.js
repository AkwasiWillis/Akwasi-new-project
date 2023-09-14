import React from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackingList from "./PackingList";

function App() {
  return (
    <div className="app">
      <Logo />

      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
