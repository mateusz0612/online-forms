import { BrowserRouter, Routes } from "react-router-dom";
import { Progress } from "libs/ui";
import { Navbar } from "online-forms/modules/Navbar";
import { AppRoutes, AuthAppRoutes } from "online-forms/routes";
import { useAuthContext } from "online-forms/modules/Auth";

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Progress fullPage />;
  }

  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>{user ? AuthAppRoutes : AppRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
