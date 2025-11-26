// React Router DOM Library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Hooks
import { useEffect } from "react";

// Main CSS Files
import './assets/css/global_rules.css';
import './assets/css/components.css';
import './assets/css/ar_styles.css';

// i18n Translation File
import "./i18n";

// Utils
import { readFromLocalStorage, setAttr } from "./utils/utils";

// Home Page
import Home from "./pages/public/Home";

function App() {
  useEffect(() => {
    const current = readFromLocalStorage("lang") || "EN";

    setAttr(document.documentElement, "dir", current == "ar" ? "rtl" : "ltr");
    setAttr(document.documentElement, "lang", current == "ar" ? "ar" : "en");
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}

        {/* Student Routes */}
        {/* <Route path="/student/dashboard" element={<StudentDashboard />} /> */}
        {/* <Route path="/student/courses" element={<StudentCourses />} /> */}
        {/* <Route path="/student/my-courses" element={<StudentMyCourses />} /> */}

        {/* Instructor Routes */}
        {/* <Route path="/instructor/dashboard" element={<InstructorDashboard />} /> */}
        {/* <Route path="/instructor/my-courses" element={<InstructorMyCourses />} /> */}
        {/* <Route path="/instructor/assign-grades" element={<InstructorAssignGrades />} /> */}

        {/* Admin Routes */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* <Route path="/admin/departments" element={<DepartmentsManagement />} /> */}

        {/* Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
