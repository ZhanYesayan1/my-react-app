import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn} from "@clerk/clerk-react";
import Sidebar from './components/sidebar';
import Product from './components/product'; 
import Dashboard from './components/dashboard';
import Topbar from './components/topbar';
import Sales_Report from './components/Sales_Report';
import Layout from './components/layout';
import Settings from './components/settings';
import './App.css';

function App() {
  const [user, setUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // const handleLogin = (username) => {
  //   setUser(username);
  // };

  const handleLogout = () => {
    setUser(false); 
  };

  const getLayout = (Component, props = {}) =>
    <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
      <Component {...props} />
    </Layout>


  return (
    <>
      <header >
        <SignedOut>
          <div className='login-content'>
          <SignIn></SignIn>
          </div>
         
        </SignedOut>
        
      </header>
      <SignedIn>
        <Router>
          <div className="app">
              <Sidebar onLogout={handleLogout} />    
                   
              <div className="content">
                <Routes>
                  <Route
                    path="/dashboard"
                    element={getLayout(Dashboard)}
                  />
                  <Route
                    path="/Sales_Report"
                    element={ getLayout(Sales_Report)}
                  />
                   <Route
                    path="/setting"
                    element={ getLayout(Settings)}
                  />
                  <Route
                    path="/product"
                    element={ getLayout(Product, { searchQuery })}
                  />
                 
                  <Route path="/" element={<Navigate to={ "/dashboard" } />} 
                  />
                </Routes>
              </div>
          </div>
        </Router>
      </SignedIn>
    </>
  );
}

export default App;
