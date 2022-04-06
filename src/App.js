import React from "react";
import { Link, Route, Routes  } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Facts from './containers/Facts/Facts'
import About from './containers/About/About'

function App() {
  return (
    <Layout>

      <div className="navlinks">
        <Link to="/" exact="true">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/about"  element={<About />} />
        <Route path="/"  element={<Facts />} />
        <Route path="*" element={<div>(｡･∀･)ﾉﾞ</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
