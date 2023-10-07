import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import { SchoolContext, SchoolProvider } from "./components/SchoolContext";

import Reports from "./components/Reports";

function App() {
  return (
    <SchoolProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </SchoolProvider>
  );
}

export default App;
