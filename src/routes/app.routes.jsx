import { Route, Routes } from "react-router-dom";

import { Profile } from "../pages/profile";
import { Home } from "../pages/home";
import { Road } from "../pages/road";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/roads" element={<Road />}/>
    </Routes>
  )
}