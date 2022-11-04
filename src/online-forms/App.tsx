import { BrowserRouter, Routes } from "react-router-dom";
import { Progress } from "libs/ui";
import { NavbarModule } from "online-forms/modules/Navbar";
import { AppRoutes, AuthAppRoutes } from "online-forms/routes";
import { useAuthContext } from "online-forms/shared/auth";

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Progress fullPage />;
  }

  return (
    <>
      <BrowserRouter>
        <NavbarModule />
        <Routes>{user ? AuthAppRoutes : AppRoutes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;