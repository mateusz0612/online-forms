import { FC, useState } from "react";
import { Stack } from "libs/ui";
import {
  IconButton,
  Avatar,
  Menu as MaterialMenu,
  Typography,
  MenuItem,
} from "@mui/material";

interface Props {
  settings: {
    label: string;
    onClick: () => void;
  }[];
  src: string;
  alt: string;
  id: string;
}

const useMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<Element | null>(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget as Element);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return {
    anchorElUser,
    handleCloseUserMenu,
    handleOpenUserMenu,
  } as const;
};

export const Menu: FC<Props> = ({ settings, src, alt, id }) => {
  const { anchorElUser, handleCloseUserMenu, handleOpenUserMenu } = useMenu();

  return (
    <Stack sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar alt={alt} src={src} />
      </IconButton>
      <MaterialMenu
        sx={{ mt: "45px" }}
        id={id}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting?.label}
            onClick={() => {
              handleCloseUserMenu();
              setting?.onClick();
            }}
          >
            <Typography textAlign="center">{setting?.label}</Typography>
          </MenuItem>
        ))}
      </MaterialMenu>
    </Stack>
  );
};
