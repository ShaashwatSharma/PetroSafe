import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Signup } from './pages/signup';
import { Signin } from './pages/Signin';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Alerts from './pages/Alert';
import Sidebar from './components/Sidebar';
import PublicRoute from './middeware/publicroute';
import ProtectedRoute from './middeware/protectedroute';

function AppWrapper() {
  const location = useLocation();

  // Paths where sidebar should be hidden
  const noSidebarPaths = ['/', '/signin', '/signup'];

  const showSidebar = !noSidebarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={
            <PublicRoute>
            <Signin />
            </PublicRoute>
            } />
          <Route path="/signin" element={
            <PublicRoute>
            <Signin />
            </PublicRoute>
            } />
          <Route path="/signup" element={
            <PublicRoute>
            <Signup />
            </PublicRoute>
            } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
            } />
          <Route path="/history" element={
            <ProtectedRoute>
            <History />
            </ProtectedRoute>
            } />
          <Route path="/alerts" element={
            <ProtectedRoute>
            <Alerts />
            </ProtectedRoute>
            } />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;




// // import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Signup } from './pages/signup';
// import { Signin } from './pages/Signin';
// import Dashboard from './pages/Dashboard';
// import History from './pages/History';
// import Alerts from './pages/Alert';
// import Sidebar from './components/Sidebar';
// // import { Navbar } from './components/Navbar';

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<Signin />} />
//             <Route path="/signin" element={<Signin />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/history" element={<History />} />
//             <Route path="/alerts" element={<Alerts />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

