import { BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { Progress } from "libs/ui";
import { AppRoutes, AuthAppRoutes, Paths } from "online-forms/routes";
import { useAuthContext } from "online-forms/shared/auth";

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <Progress fullPage />;
  }

  return (
    <BrowserRouter>
      <Routes>{user ? AuthAppRoutes : AppRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
