import { useNavigate } from "libs/development-kit/router";
import { useAuthContext } from "online-forms/shared/auth";
import { ILink, ISetting } from "../Navbar.types";
import { Paths } from "online-forms/routes";

export const useNavbar = () => {
  const { signOutUser } = useAuthContext();
  const navigate = useNavigate();

  const links: ILink[] = [
    { label: "My forms", to: Paths.Dashboard },
    { label: "Create from", to: Paths.Dashboard },
  ];

  const onLogoutClick = async () => {
    await signOutUser();
    navigate(Paths.Landing);
  };

  const settings: ISetting[] = [
    { label: "Profile", onClick: () => console.log("Profile clicked") },
    {
      label: "Logout",
      onClick: onLogoutClick,
    },
  ];

  return {
    links,
    settings,
  } as const;
};
