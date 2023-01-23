import React from 'react';
import './App.scss';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {appRouts} from "../../routing/routs";

function App() {
  return (
    <div className="App">
      <Routes>
        {appRouts.map((route, i) => {
            return <Route
                path={route.path}
                key={i}
                element={<route.layout pageTitle={route.title}><route.component/></route.layout>}
            />
        })}
      </Routes>
    </div>
  );
}

export default App;