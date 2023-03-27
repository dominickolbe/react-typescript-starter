import React, { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [title, setTitle] = useState(() => "");

  useEffect(() => {
    setTitle("react-typescript-starter");
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>{title}</h1>
      </header>
    </div>
  );
};
