import { Route, Routes } from "react-router-dom";

import { Profile } from "../pages/profile";
import { Home } from "../pages/home";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}