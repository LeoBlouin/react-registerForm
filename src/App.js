import React from 'react';
import RegisterForm from "./Components/Register/RegisterForm";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <div className="container mx-auto px-2">
      <DarkMode/>
      <RegisterForm/>
    </div>
  );
}

export default App;