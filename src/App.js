import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import ActivateLayout from "./Layouts/ActivateLayout/ActivateLayout";

function App() {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <ProfileLayout/> :<AuthLayout/>}/>
        <Route path="/auth/reset-password/:token" element={<ResetLayout/>}/>
        <Route path="/api/auth/activate/:activate_token" element={<ActivateLayout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
