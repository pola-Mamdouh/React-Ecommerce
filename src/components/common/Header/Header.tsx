import * as React from "react";
// MUI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderBasket from "@/components/eCommerce/HeaderBasket/HeaderBasket";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { display: "Home", to: "/" },
  { display: "Categories", to: "categories" },
  { display: "About", to: "about-us" },
];
const auths = [
  { display: "Login", to: "login" },
  { display: "Register", to: "register" },
];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const renderButtons = (items: { display: string; to: string }[]) =>
    items.map((item) => (
      <NavLink
        key={item.display}
        to={item.to}
        onClick={handleCloseNavMenu}
        className={({ isActive }) =>
          isActive ? "text-blue-400! font-bold block" : "text-white! block"
        }
      >
        <MenuItem>{item.display}</MenuItem>
      </NavLink>
    ));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <div className="py-2 w-full flex justify-between items-center">
        <Typography variant="h6">
          <span className="text-white bg-main rounded-l p-1">Our</span>{" "}
          E-commerce
        </Typography>
        <HeaderBasket />
      </div>
      <AppBar position="static" className="bg-foreground!">
        <Toolbar disableGutters className="lg:min-h-10!">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="main navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {renderButtons(pages)}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {renderButtons(pages)}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {renderButtons(auths)}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
