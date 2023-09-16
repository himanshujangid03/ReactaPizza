import { Outlet } from "react-router";
import NavBar from "../navigation/NavBar";
import FormModal from "../Authentication/FormModal";
import { useEffect, useState } from "react";

function RootLayout() {
  const [isModal, setIsModal] = useState(false);

  function onClose() {
    setIsModal(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsModal(true);
    }, 1000);
  }, []);
  return (
    <>
      {isModal && <FormModal onClose={onClose} />}
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
