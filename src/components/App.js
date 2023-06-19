
import React from "react";
import './../styles/App.css';
import PageLayOut from "./pagelayout";

const App = () => {
  return (
    <div>
        <PageLayOut 
        header="Welcome to my website"
        children="This is the content of my website."
        footer="@2023 My Website. All rights reserved."
        />
    </div>
  )
}

export default App
