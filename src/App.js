import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import AddContactPage from "./pages/AddContactPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/add-contact" element={<AddContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
