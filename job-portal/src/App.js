import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import JobListingsPage from "./components/JobListingsPage";
import JobDetailsPage from "./components/JobDetailsPage";
import ApplyPage from "./components/ApplyPage";
import Navbar from "./Navbar";
import Signup from "./Screens/Signup";

import { useSelector } from "react-redux";
import "./App.css";
import SuccessPage from "./components/SuccessPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <LandingPage /> : <Navigate to="/signup" />
            
          }
        />
            <Route path="/signup" element={<Signup />} />
       
            <Route path="/jobs/:id"  element={
            isAuthenticated ? <JobDetailsPage/> : <Navigate to="/signup" />
            
          } />
            <Route path="/apply"
            element={
              isAuthenticated ? <ApplyPage/> : <Navigate to="/signup" />
              
            }
            />
            
            <Route path="/success" 
             element={
              isAuthenticated ? <SuccessPage/> : <Navigate to="/signup" />
              
            } />
          
      </Routes>
    </Router>
  );
}

export default App;
