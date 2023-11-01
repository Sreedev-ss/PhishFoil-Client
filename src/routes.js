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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import EmailTable from "layouts/emailTable";

import updateEmailTemplate from "layouts/updateEmailTemplate";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import LandingPageBuilder from "layouts/landingPageBuilder";
import CreateLandingPage from "layouts/landingPageBuilder/createLandingPage";
import CreateSimulation from "layouts/createSimulation";
import EditLandingPage from "layouts/landingPageBuilder/data/editLandingPage";
import CreateEmailTemplatePage from "layouts/emailTable/createEmailTemplatePage";
import EditEmailTemplate from "layouts/emailTable/data/editEmailTemplate";
import CloneEmailTemplate from "layouts/emailTable/data/cloneEmailTemplate";
import Simulation from "layouts/createSimulation";
import ViewSimulation from "layouts/viewSimulation";
import CloneLandingPage from "layouts/landingPageBuilder/data/cloneLandingPage";
import EmailTemplateLibrary from "layouts/EmailTemplateLibrary";
import CloneSimulation from "layouts/viewSimulation/data/cloneSimulation";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Uphish",
    key: "uphish",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: false,
    subroutes: [ // Define subroutes for Uphish
      {
        type: "collapse",
        name: "View Simulation",
        key: "viewSimulation",
        route: "/uphish/simulations",
        component: <ViewSimulation />,
      },
      {
        type: "collapse",
        name: "Create Simulation",
        key: "createSimulation",
        route: "/uphish/create-simulation",
        component: <Simulation />,
      },
      {
        type: "collapse",
        name: "Landing Page Library",
        key: "landingLibrary",
        route: "",
        component: <EmailTable />,
      },
      {
        type: "collapse",
        name: "Landing Page builder",
        key: "landingBuilder",
        route: "/uphish/landingPageBuilder",
        component: <LandingPageBuilder />,
      },
      // {
      //   type: "collapse",
      //   name: "Email Template Library",
      //   key: "emailbuilder",
      //   route: "",
      //   component: <EmailTable />,
      // },
      {
        type: "collapse",
        name: "Email Template Builder",
        key: "emailbuilder",
        route: "/uphish/email-template-builder",
        component: <EmailTable />,
      },
      {
        type: "collapse",
        name: "Email Template Library",
        key: "emailtemplatelibrary",
        route: "/uphish/email-template-library",
        component: <EmailTemplateLibrary />,
      },
    ],
  },

  //landing Page Routes
  {
    route: "/uphish/CreateLandingPage",
    component: <CreateLandingPage/>,
    noCollapse: true,
  },
  //Edit
  {
    route: "/editLandingPage",
    component: <EditLandingPage/>,
    noCollapse: true,
  },


  //Clone
  {
    route: "/cloneLandingPage",
    component: <CloneLandingPage/>,
    noCollapse: true,
  },

  //email template
  {
    route: "/uphish/create-email-template",
    component: <CreateEmailTemplatePage/>,
    noCollapse: true,
  },
  {
    route: "/edit-email-template",
    component: <EditEmailTemplate/>,
    noCollapse: true,
  },
  {
    route: "/clone-email-template",
    component: <CloneEmailTemplate/>,
    noCollapse: true,
  },
  {
    route: "/clone-simulation",
    component: <CloneSimulation/>,
    noCollapse: true,
  },
  

  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
];

export default routes;
