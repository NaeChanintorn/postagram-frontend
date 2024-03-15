import PostContextProvider from "../features/post/contexts/PostContext";
import SideBar from "../layouts/SideBar";
import { Outlet } from "react-router-dom";

export default function SetOutlet() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
