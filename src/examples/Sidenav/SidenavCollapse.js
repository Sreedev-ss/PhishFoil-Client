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
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import theme from "assets/theme";



function SidenavCollapse({ color, icon, name, indexArr, children, active, noCollapse, subroutes, ...rest }) {
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const [openCollpase, setOpenCollapse] = useState(false)
  const [selectedCollapse, setSelectedCollapse] = useState(null)
  const [hoveredStyles, setHoveredStyles] = useState({
    transition: 'color 0.8s',
  })
  const [clickedStyles, setClickedStyles] = useState({ color: '#18c1e8' })
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);


  const handleHover = (index) => {
    setHoveredStyles({
      ...hoveredStyles,
      color: '#18c1e8',
    });
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredStyles({
      transition: 'color 0.3s',
    });
    setHoveredIndex(null);
  };


  function handleSubroute(index) {
    if (subroutes && subroutes.length > 0) {
      setOpenCollapse(!openCollpase)
      setSelectedCollapse(index)
    } else {
      setOpenCollapse(false)
      setSelectedCollapse(null)
    }
  }

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <>
      <ListItem component="li" onClick={() => handleSubroute(indexArr)}>
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
      {indexArr == selectedCollapse && openCollpase && (
        <Collapse in={openCollpase} unmountOnExit>
          {subroutes.map((subroute, index) => (
            <NavLink to={subroute.route} key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}>
              <SoftBox {...rest} sx={(theme) => collapseItem(theme, { transparentSidenav })} >
                <ListItem component="li" key={index}
                  sx={(theme) => collapseIconBox(theme, { transparentSidenav, color })}
                >
                  <ListItemText
                    key={index}
                    style={index === clickedIndex
                      ? clickedStyles
                      : index === hoveredIndex
                        ? hoveredStyles
                        : {}
                    }
                    sx={(theme) => collapseText(theme, { active, miniSidenav, transparentSidenav })}
                    primary={subroute.name}
                  />
                </ListItem>
              </SoftBox>
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
  indexArr: PropTypes.number,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
  subroutes: PropTypes.node
};

export default SidenavCollapse;
