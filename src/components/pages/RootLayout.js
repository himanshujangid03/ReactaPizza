import { Outlet } from 'react-router';
import NavBar from '../navigation/NavBar';
import FormModal from '../Authentication/FormModal';
import { useEffect, useState } from 'react';

function RootLayout() {
  const [isModal, setIsModal] = useState(false);

  function onClose() {
    setIsModal(false);
  }
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        setIsModal(true);
      }, 1000);
    }
  }, [token]);
  return (
    <>
      {isModal && <FormModal onClose={onClose} />}
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
