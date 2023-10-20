import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import Login from "./components/Login";
import { SchoolProvider } from "./components/SchoolContext";

import Reports from "./components/Reports";
import AddMarks from "./components/AddMarks";
import EditMarks from "./components/EditMarks";
import EditStudent from "./components/EditStudent";

import RegistrationForm from "./components/RegistratrionForm";
import EditTeacher from "./components/EditTeacher";

function App() {
  return (
    <SchoolProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<RegistrationForm />} />

            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/addmarks/:studentId" element={<AddMarks />} />
            <Route path="/editmarks/:studentId" element={<EditMarks />} />
            <Route path="/editstudent/:studentId" element={<EditStudent />} />
            <Route path="/editteacher/:teacherId" element={<EditTeacher />} />

            <Route path="/login" component={<Login />} />
          </Routes>
        </div>
      </Router>
    </SchoolProvider>
  );
}

export default App;
