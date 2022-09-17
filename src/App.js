import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/route";
import "../src/App.css";

export default function App() {
  return (
    <div className="App" id="top">
      <BrowserRouter>
        <Routes>
          <Route>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.layout>
                    <route.component />
                  </route.layout>
                }
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
