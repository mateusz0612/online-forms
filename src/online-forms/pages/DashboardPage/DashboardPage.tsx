import { Paths } from "online-forms/routes";
import { useAuthContext } from "online-forms/shared/auth";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const DashboardPage: FC = () => {
  const { signOutUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div>
      DashboardPage{" "}
      <button
        onClick={async () => {
          await signOutUser();

          navigate(Paths.Landing);
        }}
      >
        sign out
      </button>
    </div>
  );
};
