/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { useNavigate } from "react-router-dom";

// Soft UI Dashboard React examples
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import { Divider } from "@mui/material";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const navigate = useNavigate();

  const [userData, setUserData] = useState()
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);

  function handleAccountsHover(){
    setIsAccountHovered(!isAccountHovered)
    setIsSettingsHovered(false)
  }
  function handleSettingsHover(){
    setIsSettingsHovered(!isSettingsHovered)
    setIsAccountHovered(false)
  }

  useEffect(() => {
    const user = localStorage.getItem("loginData");
    const parsedObject = JSON.parse(user);
    setUserData(parsedObject)

  }, [])


  const logout = () => {
    localStorage.removeItem("loginData");
    navigate("/login");
  };


  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }
    window.addEventListener("scroll", handleTransparentNavbar);

    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </SoftBox>
        {isMini ? null : (
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SoftBox pr={1}>
              <SoftInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
              />
            </SoftBox>
            <SoftBox color={light ? "white" : "inherit"}>
              <IconButton style={{ position: 'relative' }} sx={navbarIconButton} size="small">
                <div onClick={handleAccountsHover} style={{ display: 'flex', backgroundColor: '#F1F1F1', borderRadius: '15px', alignItems: 'center', marginLeft: '10px', padding: '7px' }}>
                  <Icon
                    sx={({ palette: { dark, white } }) => ({
                      color: light ? white.main : dark.main,
                    })}
                  >
                    account_circle
                  </Icon>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <SoftTypography
                      variant="button"
                      fontWeight="medium"
                      color={light ? "white" : "dark"}
                    >
                      {userData?.username}
                    </SoftTypography>
                    <SoftTypography
                      variant="button"
                      fontWeight="medium"
                      color={light ? "white" : "dark"}
                    >
                      {userData?.role.toUpperCase()}
                    </SoftTypography>
                  </div>
                </div>
              </IconButton>
              {isSettingsHovered &&
                <div className="settingsDiv" style={{
                  position: "absolute",
                  display: 'flex',
                  gap: 5,
                  flexDirection: 'column',
                  right: '2.5%',
                  border: '0.5px solid grey',
                  borderRadius: 4,
                  width: '210px',
                  padding: 8,
                  backgroundColor: '#F1F1F1'
                }}
                  onMouseLeave={() => setIsSettingsHovered(false)}>
                  <NavLink to='/settings/team'><p style={{ fontSize: 'medium' }}>Admin Users</p></NavLink>
                  <hr style={{ opacity: 0.1 }} />
                  <NavLink to='/settings/domain'><p style={{ fontSize: 'medium' }}>NFR Settings</p></NavLink>
                  <hr style={{ opacity: 0.1 }} />
                  <p style={{ fontSize: 'medium' }}>Default Customer Settings</p>
                </div>
              }
              {isAccountHovered &&
                <div className="settingsDiv" style={{
                  position: "absolute",
                  display: 'flex',
                  gap: 5,
                  flexDirection: 'column',
                  right: '4.5%',
                  border: '0.5px solid grey',
                  borderRadius: 4,
                  width: '210px',
                  padding: 8,
                  backgroundColor: '#F1F1F1'
                }}
                  onMouseLeave={() => setIsAccountHovered(false)}>
                  <NavLink to='/account'><p style={{ fontSize: 'medium' }}>Account Settings</p></NavLink>
                  <hr style={{ opacity: 0.1 }} />
                  <NavLink to='/settings/paymentSettings'><p style={{ fontSize: 'medium' }}>Payment Settings</p></NavLink>
                  <hr style={{ opacity: 0.1 }} />
                  <NavLink to="/authentication/sign-in"><p onClick={logout} style={{ fontSize: 'medium' }}>Logout</p></NavLink>
                </div>
              }

              <IconButton
                size="small"
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                // onClick={handleConfiguratorOpen}
                onClick={handleSettingsHover}

              >
                <Icon>settings</Icon>
              </IconButton>
            </SoftBox>
          </SoftBox>
        )}
      </Toolbar>
    </AppBar >
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
