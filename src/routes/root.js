import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main></main>
      <Outlet />
    </>
  );
};

export default RootLayout;
