import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { routes } from './router/index'
import Layout from './components/layout/index'
const GetRoutes = () => {
  return useRoutes(routes)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
          <GetRoutes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
