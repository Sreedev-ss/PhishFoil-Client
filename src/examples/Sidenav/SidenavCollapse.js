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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function SidenavCollapse({ color, icon, name, children, active, noCollapse, subroutes, ...rest }) {
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const [openCollpase, setOpenCollapse] = useState(false)

  function handleSubroute() {
    if (subroutes && subroutes.length > 0) {
      setOpenCollapse(!openCollpase)
    } else {
      setOpenCollapse(false)
    }
  }
  return (
    <>
      <ListItem component="li" onClick={handleSubroute}>
        <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })} >
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { active, transparentSidenav, color })}
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
          />
          {!openCollpase ? subroutes && subroutes.length > 0 && <AiOutlineArrowDown fontSize='12px' /> : <AiOutlineArrowUp fontSize='12px' />}
        </SoftBox>
      </ListItem>
      {openCollpase && (
        <Collapse in={openCollpase} unmountOnExit>
          {subroutes.map((subroute, index) => (
            <NavLink to={subroute.route} key={index}>
              <ListItem component="li" key={index} sx={{ display: 'flex', justifyContent: 'start', fontSize: '10px', padding: '5px' }}>
                <div style={{ backgroundColor: 'white', marginLeft: "53px", padding: '5px', borderRadius: '5px', minWidth: "175px" }}>
                  <ListItemText
                    secondary={subroute.name}
                  />
                </div>
              </ListItem>
            </NavLink>
          ))}
        </Collapse>
      )}


    </>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
  subroutes: null
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
  subroutes: PropTypes.node
};

export default SidenavCollapse;
