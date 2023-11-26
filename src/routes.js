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
import Users from "layouts/users";
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
import LandingPageLibrary from "layouts/landingPageLibrary";
import CourseSlideDelay from "layouts/autoenrol/components/uLearnComponents/CourseSlideDelay";
import CourseReminderEmails from "layouts/autoenrol/components/uLearnComponents/CourseReminderEmails";
import GapAnalysisReminderEmails from "layouts/autoenrol/components/uLearnComponents/GapAnalysisReminderEmails";
import MinimumPassCore from "layouts/autoenrol/components/uLearnComponents/MinimumPassCore";
import VideoPlayback from "layouts/autoenrol/components/uLearnComponents/VideoPlayback";
import CompulsoryCourses from "layouts/autoenrol/components/uLearnComponents/CompulsoryCourses";
import RiskReportComponent from "layouts/autoenrol/components/riskReportComponents/RiskReportComponents";
import EndUserPortal from "layouts/autoenrol/components/enterUserPortal/EndUserPortal";
import UserIdAccess from "layouts/autoenrol/components/userIDAccess/UserIdAccess";
import LanguageComponent from "layouts/autoenrol/components/languageComponents/language";

import CourseLibrary from "layouts/uLearn/CourseLibrary";
import CourseBuilder from "layouts/uLearn/CourseBuilder";

import CourseReport from "layouts/uLearn/CourseReport";

import Customers from "layouts/uService/Customers";

import AutoPhish from "layouts/autoenrol/components/uPhishComponents/AutoPhish";
import WorkingHours from "layouts/autoenrol/components/uPhishComponents/WorkingHours";
import PreferedTopLevelDomain from "layouts/autoenrol/components/uPhishComponents/PreferedTopLevelDomains";
import CompromiseMessage from "layouts/autoenrol/components/uPhishComponents/CompromiseMessage";
import MessageInjection from "layouts/autoenrol/components/uPhishComponents/MessageInjection";
import PhishAlertButton from "layouts/autoenrol/components/uPhishComponents/PhishAlertButton";
import DefaultSetting from "layouts/autoenrol/components/emailComponents/DefaultSetting";
import PreferredDomain from "layouts/autoenrol/components/PreferredDomain";
import AllowListing from "layouts/autoenrol/components/emailComponents/AllowListing";
import SimulationTests from "layouts/autoenrol/components/emailComponents/SimulationTests";
import GapAnalysis from "layouts/autoenrol/components/emailComponents/GapAnalysis";
import Courses from "layouts/autoenrol/components/emailComponents/Courses";
import WeeklySummeryEmails from "layouts/autoenrol/components/emailComponents/WeeklySummaryEmails";
import GoogleWorkspaceSummary from "layouts/autoenrol/components/emailComponents/GoogleWorkspaceSyncResult";
import Microsoft365SyncSummary from "layouts/autoenrol/components/emailComponents/Microsoft365SyncSummary";
import Policies from "layouts/autoenrol/components/emailComponents/Policies";
import PolicyReminderEmails from "layouts/autoenrol/components/uPolicyComponents/PolicyRemiinderEmails";
import Microsoft365 from "layouts/autoenrol/components/microsoft365/Microsoft365";
import WeeklySummary from "layouts/autoenrol/components/weeklySummary/WeeklySummary";
import TimeZone from "layouts/autoenrol/components/timeZone/TimeZone";
import AutoEnrol from "layouts/autoenrol/components/uLearnComponents/AutoEnrol";
import ProductNames from "layouts/autoenrol/components/productNames/ProductNames";
import GoogleWorkspace from "layouts/autoenrol/components/googleWorkspace/GoogleWorkspace";
import ReportSettings from "layouts/autoenrol/components/reportSettings/ReportSettings";
import Reports from "layouts/autoenrol/components/emailComponents/Reports";
import RiskReport from "layouts/autoenrol/components/emailComponents/RiskReport";
import ExternalPolicyAccess from "layouts/autoenrol/components/externalPolicyAccess/ExternalPolicyAccess";
import DefaultPolicySignatureSettings from "layouts/autoenrol/components/uPolicyComponents/DefaultPolicySignatureSettings";
import GapAnalysisReport from "layouts/Report/GapAnalysisReport";
import Home from "layouts/Home";
import Theme from "assets/theme";

import Ubreach from "layouts/ubreach";
import TemplateLibrary from "layouts/uPolicy/TemplateLibrary";
import ReportHub from "layouts/Report/ReportHub";
import TemplateBuilder from "layouts/uPolicy/TemplateBuilder";
import Prospects from "layouts/uService/Prospects";
import InvoicesCustomer from "layouts/uService/InvoicesCustomer";
import AutoEnrolSettings from "layouts/autoenrol/components";
import ViewPolicies from "layouts/uPolicy/ViewPolicies";
import CreateTemplate from "layouts/uPolicy/CreateTemplate";
import EditTemplate from "layouts/uPolicy/data/editTemplate";
import EditPolicy from "layouts/uPolicy/data/editPolicy";
import RiskReportSignup from "layouts/uService/RiskReportSignup";
import RiskReports from "layouts/riskReports/RiskReports";
import CreatePolicy from "layouts/uPolicy/CreatePolicy";
import SimulationPerformance from "layouts/Report/SimulationPerformance";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   icon: <Shop size="12px" />,
  //   component: <Dashboard />,
  //   noCollapse: true,
  // },
  //   {
  //   type: "collapse",
  //   name: "Customers",
  //   key: "customers",
  //   route: "/customers",
  //   icon: <Office size="12px" />,
  //   component: <Customers />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Office size="12px" />,
    component: <Home />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <Office size="12px" />,
    component: <Users />,
    noCollapse: true,
    // {
    //   type: "collapse",
    //   name: "uPolicy",
    //   key: "upolicy",
    //   route: "/upolicy",
    //   icon: <Office size="12px" />,
    //   component: <UPolicy />,
    //   noCollapse: true,
    // },
  },
  {
    type: "collapse",
    name: "Report",
    key: "Report",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for Uphish
      {
        type: "collapse",
        name: "Gap Analysis Report",
        key: "gapanalysisreport",
        route: "/Report/GapAnalysisReport",
        component: <GapAnalysisReport />,
      },
      {
        type: "collapse",
        name: "Report Hub",
        key: "reporthub",
        route: "/Report/ReportHub",
        component: <ReportHub />,
      },
      {
        type: "collapse",
        name: "Simulation Performance",
        key: "simulationperformance",
        route: "/Report/SimulationPerformance",
        component: <SimulationPerformance />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Uphish",
    key: "uphish",
    icon: <CreditCard size="12px" />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for Uphish
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
        key: "landingPagelibrary",
        route: "/uphish/landingPagelibrary",
        component: <LandingPageLibrary />,
      },
      {
        type: "collapse",
        name: "Landing Page Builder",
        key: "landingBuilder",
        route: "/uphish/landingPageBuilder",
        component: <LandingPageBuilder />,
      },
      {
        type: "collapse",
        name: "Email Template Library",
        key: "emailtemplatelibrary",
        route: "/uphish/email-template-library",
        component: <EmailTemplateLibrary />,
      },
      {
        type: "collapse",
        name: "Email Template Builder",
        key: "emailbuilder",
        route: "/uphish/email-template-builder",
        component: <EmailTable />,
      },
      // {
      //   type: "collapse",
      //   name: "Email Template Library",
      //   key: "emailbuilder",
      //   route: "",
      //   component: <EmailTable />,
      // },
    ],
  },
  {
    type: "collapse",
    name: "uBreach",
    key: "ubreach",
    route: "/ubreach",
    icon: <Office size="12px" />,
    component: <Ubreach />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Risk Report",
    key: "riskReports",
    route: "/riskReports",
    icon: <Office size="12px" />,
    component: <RiskReports />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "uPolicy",
    key: "uPolicy",
    icon: <CreditCard size="12px" />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for Uphish
      {
        type: "collapse",
        name: "Template Library",
        key: "templatelibrary",
        route: "/uPolicy/templatelibrary",
        component: <TemplateLibrary />,
      },
      {
        type: "collapse",
        name: "Template Builder",
        key: "templatebuilder",
        route: "/uPolicy/templatebuilder",
        component: <TemplateBuilder />,
      },
      {
        type: "collapse",
        name: "View Policies",
        key: "viewpolicies",
        route: "/uPolicy/viewpolicies",
        component: <ViewPolicies />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Auto Enrol",
    key: "autoenrol",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for Uphish
      {
        type: "collapse",
        name: "Course Slide Delay",
        key: "courseslidedelay",
        route: "/autoenrol/courseslidedelay",
        component: <CourseSlideDelay />,
      },
      {
        type: "collapse",
        name: "Auto Phish",
        key: "courseslidedelay",
        route: "/autoenrol/autoPhish",
        component: <AutoPhish />,
      },
      {
        type: "collapse",
        name: "Course Reminder Emails",
        key: "coursereminderemails",
        route: "/autoenrol/coursereminderemails",
        component: <CourseReminderEmails />,
      },
      {
        type: "collapse",
        name: "Working Hours",
        key: "workingHours",
        route: "/autoenrol/workingHours",
        component: <WorkingHours />,
      },
      {
        type: "collapse",
        name: "Prefered Top Level Domain",
        key: "preferedTopLevelDomain",
        route: "/autoenrol/preferedTopLevelDomain",
        component: <PreferedTopLevelDomain />,
      },
      {
        type: "collapse",
        name: "Compromise Message",
        key: "compromiseMessage",
        route: "/autoenrol/compromiseMessage",
        component: <CompromiseMessage />,
      },
      {
        type: "collapse",
        name: " Message Injection",
        key: "messageInjection",
        route: "/autoenrol/messageInjection",
        component: <MessageInjection />,
      },
      {
        type: "collapse",
        name: "Phish Alert Button",
        key: "phishAlertButton",
        route: "/autoenrol/phishAlertButton",
        component: <PhishAlertButton />,
      },

      // Upolicy

      {
        type: "collapse",
        name: "Policy Reminder Emails",
        key: "policyReminderEmails",
        route: "/autoenrol/policyReminderEmails",
        component: <PolicyReminderEmails />,
      },

      // {
      //   type: "collapse",
      //   name: "Course Reminder Emails",
      //   key: "coursereminderemails",
      //   route: "/autoenrol/coursereminderemails",
      //   component: <CourseReminderEmails />,
      // },
      // {
      //   type: "collapse",
      //   name: "Auto Phish",
      //   key: "courseslidedelay",
      //   route: "/autoenrol/autoPhish",
      //   component: <AutoPhish />,
      // },

      {
        type: "collapse",
        name: "Preferred Domain",
        key: "preferreddomain",
        route: "/settings/domain",
        component: <PreferredDomain />,
      },
      {
        type: "collapse",
        name: "Default Setting",
        key: "defaultsettingsemail",
        route: "/emails/default",
        component: <DefaultSetting />,
      },
      {
        type: "collapse",
        name: "Allow Listing",
        key: "allowlistingemail",
        route: "/emails/allowlisting",
        component: <AllowListing />,
      },
      {
        type: "collapse",
        name: "Simulation Tests",
        key: "simulationtestsemail",
        route: "/emails/simulation-tests",
        component: <SimulationTests />,
      },
      {
        type: "collapse",
        name: "Gap Analysis",
        key: "gapanalysisemail",
        route: "/emails/gap-analysis",
        component: <GapAnalysis />,
      },
      {
        type: "collapse",
        name: "Courses",
        key: "coursesemail",
        route: "/emails/courses",
        component: <Courses />,
      },
      {
        type: "collapse",
        name: "Weekly Summary",
        key: "weeklysummaryemails",
        route: "/emails/weekly-summary",
        component: <WeeklySummeryEmails />,
      },
      {
        type: "collapse",
        name: "Google Workspace Sync Summary",
        key: "googleworkspaceemail",
        route: "/emails/google-workspace",
        component: <GoogleWorkspaceSummary />,
      },
      {
        type: "collapse",
        name: "Microsoft 365 Sync Summary",
        key: "microsoftsyncsummaryemail",
        route: "/emails/office-365",
        component: <Microsoft365SyncSummary />,
      },
      {
        type: "collapse",
        name: "Policies",
        key: "policiesemail",
        route: "/emails/policies",
        component: <Policies />,
      },
      {
        type: "collapse",
        name: "Reports",
        key: "reportsemail",
        route: "/emails/reports",
        component: <Reports />,
      },
      {
        type: "collapse",
        name: "Risk Report",
        key: "riskreportemail",
        route: "/emails/risk-report",
        component: <RiskReport />,
      },
      {
        type: "collapse",
        name: "Gap Analysis Reminder Emails",
        key: "gapanalysisreminderemails",
        route: "/autoenrol/gapanalysisreminderemails",
        component: <GapAnalysisReminderEmails />,
      },
      {
        type: "collapse",
        name: "Minimum Pass Score",
        key: "minimumpasscore",
        route: "/autoenrol/minimumpasscore",
        component: <MinimumPassCore />,
      },
      {
        type: "collapse",
        name: "Video Playback",
        key: "videoplayback",
        route: "/autoenrol/videoplayback",
        component: <VideoPlayback />,
      },
      {
        type: "collapse",
        name: "Compulsory Courses",
        key: "compulsorycourses",
        route: "/autoenrol/compulsorycourses",
        component: <CompulsoryCourses />,
      },
      {
        type: "collapse",
        name: "Risk Report Component",
        key: "riskreportcomponent",
        route: "/autoenrol/riskreportcomponent",
        component: <RiskReportComponent />,
      },
      {
        type: "collapse",
        name: "End User Portal",
        key: "enduserportal",
        route: "/autoenrol/enduserportal",
        component: <EndUserPortal />,
      },
      {
        type: "collapse",
        name: "User ID Access",
        key: "useridaccess",
        route: "/autoenrol/userIdaccess",
        component: <UserIdAccess />,
      },
      {
        type: "collapse",
        name: "Microsoft365",
        key: "microsoft365",
        route: "/autoenrol/microsoft365",
        component: <Microsoft365 />,
      },
      {
        type: "collapse",
        name: "Theme",
        key: "theme",
        route: "/autoenrol/theme",
        component: <Theme />,
      },
      {
        type: "collapse",
        name: "Weekly Summary",
        key: "weeklySummary",
        route: "/autoenrol/weeklySummary",
        component: <WeeklySummary />,
      },
      {
        type: "collapse",
        name: "Language Component",
        key: "languagecomponent",
        route: "/autoenrol/languagecomponent",
        component: <LanguageComponent />,
      },
      {
        type: "collapse",
        name: "Time Zone",
        key: "timezone",
        route: "/autoenrol/timezone",
        component: <TimeZone />,
      },
      {
        type: "collapse",
        name: "Auto Enrol",
        key: "autoEnrol",
        route: "/autoenrol/autoEnrol",
        component: <AutoEnrol />,
      },
      {
        type: "collapse",
        name: "Product Names",
        key: "productnames",
        route: "/autoenrol/productnames",
        component: <ProductNames />,
      },
      {
        type: "collapse",
        name: "Google Workspace",
        key: "googleworkspace",
        route: "/autoenrol/googleworkspace",
        component: <GoogleWorkspace />,
      },
      {
        type: "collapse",
        name: "Report Settings",
        key: "reportsettings",
        route: "/autoenrol/reportsettings",
        component: <ReportSettings />,
      },
      {
        type: "collapse",
        name: "External Policy Access",
        key: "externalpolicyaccess",
        route: "/autoenrol/externalpolicyaccess",
        component: <ExternalPolicyAccess />,
      },
      {
        type: "collapse",
        name: "Default Policy Signature Settings",
        key: "defaultpolicysignaturesettings",
        route: "/autoenrol/defaultpolicysignaturesettings",
        component: <DefaultPolicySignatureSettings />,
      },
    ],
  },

  //ULearn Routes
  {
    type: "collapse",
    name: "uLearn",
    key: "ulearn",
    icon: <CreditCard size="12px" />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for Ulearn
      {
        type: "collapse",
        name: "Courses Report",
        key: "coursesReport",
        route: "/ulearn/courses-report",
        component: <CourseReport />,
      },
      {
        type: "collapse",
        name: "Gap Analysis Report",
        key: "gapanalysisreport",
        route: "/Report/GapAnalysisReport",
        component: <GapAnalysisReport />,
      },
      // {
      //   type: "collapse",
      //   name: "Auto Enrol",
      //   key: "autoEnrol",
      //   route: "/ulearn/auto-enrol",
      //   component: <AutoEnrolSettings />,
      // },
      {
        type: "collapse",
        name: "Course Library",
        key: "coursesLibrary",
        route: "/ulearn/course-library",
        component: <CourseLibrary />,
      },
      {
        type: "collapse",
        name: "Course Builder",
        key: "courseBuilder",
        route: "/ulearn/course-builder",
        component: <CourseBuilder />,
      },
    ],
  },

  //UService Routes
  {
    type: "collapse",
    name: "uService",
    key: "uService",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: false,
    subroutes: [
      // Define subroutes for UService
      {
        type: "collapse",
        name: "Customers",
        key: "Customers",
        route: "/uService/Customers",
        component: <Customers />,
      },
      {
        type: "collapse",
        name: "Prospects",
        key: "prospects",
        route: "/uService/prospects",
        component: <Prospects />,
      },
      {
        type: "collapse",
        name: "InvoicesCustomer",
        key: "invoicesCustomer",
        route: "/uService/invoicesCustomer",
        component: <InvoicesCustomer />,
      },
      {
        type: "collapse",
        name: "Risk Report Signup",
        key: "riskReportSignup",
        route: "/uService/riskReportSignup",
        component: <RiskReportSignup />,
      },
    ],
  },

  {
    route: "/editTemplate",
    component: <EditTemplate />,
    noCollapse: true,
  },
  {
    route: "/editPolicy",
    component: <EditPolicy />,
    noCollapse: true,
  },
  {
    route: "/createPolicy",
    component: <CreatePolicy />,
    noCollapse: true,
  },

  //landing Page Routes
  {
    route: "/uphish/CreateLandingPage",
    component: <CreateLandingPage />,
    noCollapse: true,
  },
  //Edit
  {
    route: "/editLandingPage",
    component: <EditLandingPage />,
    noCollapse: true,
  },

  //Clone
  {
    route: "/cloneLandingPage",
    component: <CloneLandingPage />,
    noCollapse: true,
  },

  //email template
  {
    route: "/uphish/create-email-template",
    component: <CreateEmailTemplatePage />,
    noCollapse: true,
  },
  {
    route: "/edit-email-template",
    component: <EditEmailTemplate />,
    noCollapse: true,
  },
  {
    route: "/clone-email-template",
    component: <CloneEmailTemplate />,
    noCollapse: true,
  },
  {
    route: "/clone-simulation",
    component: <CloneSimulation />,
    noCollapse: true,
  },

  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  // },
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
