import { useNavigate } from "libs/development-kit/routing";
import { useAuthContext } from "online-forms/shared/Auth";
import { ILink, ISetting } from "../Navbar.types";
import { Paths } from "online-forms/routes";

export const useNavbar = () => {
  const { signOutUser } = useAuthContext();
  const navigate = useNavigate();

  const links: ILink[] = [
    { label: "Dashboard", to: Paths.Dashboard },
    { label: "Creator", to: Paths.CreateForm },
  ];

  const onLogoutClick = async () => {
    await signOutUser();
    navigate(Paths.Landing);
  };

  const settings: ISetting[] = [
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
