import { BrowserRouter, Routes } from "react-router-dom";
import { AppRoutes } from "online-forms/routes";

import { useAuthContext } from "online-forms/shared/auth";

function App() {
  const { signOutUser } = useAuthContext();

  return (
    <>
      <button onClick={signOutUser}>SIGN OUT TESTING</button>
      <BrowserRouter>
        <Routes>{AppRoutes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
