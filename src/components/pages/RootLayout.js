import { Outlet } from "react-router";
import NavBar from "../navigation/NavBar";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
