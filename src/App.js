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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import Home from "./layouts/Home";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "routes";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

//components
import EmailTable from "layouts/emailTable";
import LandingPageBuilder from "layouts/landingPageBuilder";
// Images
import brand from "assets/images/logo-ct.png";

import CreateEmailTemplate from "layouts/createEmailTemplate";
import CreateSimulation from "layouts/createSimulation";
import UpdateEmailTemplate from "layouts/updateEmailTemplate";
import ViewSimulation from "layouts/viewSimulation";
import EmailTemplateLibrary from "layouts/EmailTemplateLibrary";
import LandingPageLibrary from "layouts/landingPageLibrary";
import CourseLibrary from "layouts/uLearn/CourseLibrary";
import CourseBuilder from "layouts/uLearn/CourseBuilder";
import CourseReport from "layouts/uLearn/CourseReport";
import CourseSlideDelay from "layouts/autoenrol/components/uLearnComponents/CourseSlideDelay";
import CourseReminderEmails from "layouts/autoenrol/components/uLearnComponents/CourseReminderEmails";
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
import GapAnalysisReminderEmails from "layouts/autoenrol/components/uLearnComponents/GapAnalysisReminderEmails";
import MinimumPassCore from "layouts/autoenrol/components/uLearnComponents/MinimumPassCore";
import VideoPlayback from "layouts/autoenrol/components/uLearnComponents/VideoPlayback";
import CompulsoryCourses from "layouts/autoenrol/components/uLearnComponents/CompulsoryCourses";
import RiskReportComponent from "layouts/autoenrol/components/riskReportComponents/RiskReportComponents";
import EndUserPortal from "layouts/autoenrol/components/enterUserPortal/EndUserPortal";
import UserIdAccess from "layouts/autoenrol/components/userIDAccess/UserIdAccess";
import LanguageComponent from "layouts/autoenrol/components/languageComponents/language";
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
import SimulationPerformance from "layouts/Report/SimulationPerformance";
import Theme from "layouts/autoenrol/components/Theme/Theme";
import Customers from "layouts/uService/Customers";
import Ubreach from "layouts/ubreach";
import TemplateLibrary from "layouts/uPolicy/TemplateLibrary";
import ReportHub from "layouts/Report/ReportHub";
import TemplateBuilder from "layouts/uPolicy/TemplateBuilder";
import Prospects from "layouts/uService/Prospects";
import InvoicesCustomer from "layouts/uService/InvoicesCustomer";
import AutoEnrolSettings from "layouts/autoenrol/components";
import ViewPolicies from "layouts/uPolicy/ViewPolicies";
import CreateTemplate from "layouts/uPolicy/CreateTemplate";
import RiskReportSignup from "layouts/uService/RiskReportSignup";
import AdminUsers from "layouts/Settings/AdminUsers";
import Accounts from "layouts/account";
import CreatePolicy from "layouts/uPolicy/CreatePolicy";
import PaymentSettings from "layouts/Settings/PaymentSettings";
import ViewReport from "layouts/Report/ReportHub/PerformanceReport/ViewReport";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Phish Foil - Tool"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}
      <Routes>
        <Route exact path="/uphish/simulations" element={<ViewSimulation />} />;
        <Route exact path="/uphish/create-simulation" element={<CreateSimulation />} />;
        <Route exact path="/uphish/landingPageBuilder" element={<LandingPageBuilder />} />;
        <Route exact path="/uphish/email-template-builder" element={<EmailTable />} />;
        <Route exact path="/uphish/email-template-library" element={<EmailTemplateLibrary />} />;
        <Route exact path="/uphish/landingPagelibrary" element={<LandingPageLibrary />} />;
        <Route exact path="/ulearn/course-library" element={<CourseLibrary />} />;
        <Route exact path="/ulearn/course-builder" element={<CourseBuilder />} />;
        <Route exact path="/ulearn/courses-report" element={<CourseReport />} />;
        <Route exact path="layouts/home" element={<Home />} />;
        <Route exact path="layouts/ubreach" element={<Ubreach />} />;
        <Route exact path="/autoenrol/coursereminderemails" element={<CourseReminderEmails />} />
        {/* USERVICE */}
        <Route exact path="/uService/customers" element={<Customers />} />;
        <Route exact path="/uService/prospects" element={<Prospects />} />;
        <Route exact path="/uService/invoicesCustomer" element={<InvoicesCustomer />} />;
        <Route exact path="/uService/riskReportSignup" element={<RiskReportSignup />} />;
        {/* <Route path="/uphish/email-template-builder/create-email-template" element={<CreateEmailTemplate />} /> */}
        {/* <Route path="/uphish/email-template-builder/edit-email-template" element={<UpdateEmailTemplate />} /> */}
        <Route exact path="/uphish/simulations" element={<ViewSimulation />} />;
        <Route exact path="/uphish/create-simulation" element={<CreateSimulation />} />;
        <Route exact path="/uphish/landingPageBuilder" element={<LandingPageBuilder />} />;
        <Route exact path="/uphish/email-template-builder" element={<EmailTable />} />;
        <Route exact path="/uphish/email-template-library" element={<EmailTemplateLibrary />} />;
        <Route exact path="/uphish/landingPagelibrary" element={<LandingPageLibrary />} />;
        <Route exact path="/ulearn/course-library" element={<CourseLibrary />} />;
        <Route exact path="/ulearn/course-builder" element={<CourseBuilder />} />;
        <Route exact path="/autoenrol/courseslidedelay" element={<CourseSlideDelay />} />;
        <Route exact path="/autoenrol/coursereminderemails" element={<CourseReminderEmails />} />;
        <Route exact path="/settings/domain" element={<PreferredDomain />} />;
        <Route exact path="/emails/default" element={<DefaultSetting />} />;
        <Route exact path="/emails/allowlisting" element={<AllowListing />} />;
        <Route exact path="/emails/simulation-tests" element={<SimulationTests />} />;
        <Route exact path="/emails/gap-analysis" element={<GapAnalysis />} />;
        <Route exact path="/emails/courses" element={<Courses />} />;
        <Route exact path="/emails/weekly-summary" element={<WeeklySummeryEmails />} />;
        <Route exact path="/emails/google-workspace" element={<GoogleWorkspaceSummary />} />;
        <Route exact path="/emails/office-365" element={<Microsoft365SyncSummary />} />;
        <Route exact path="/emails/policies" element={<Policies />} />;
        <Route exact path="/emails/reports" element={<Reports />} />;
        <Route exact path="/emails/risk-report" element={<RiskReport />} />;
        <Route exact path="/uphish/simulations" element={<ViewSimulation />} />;
        <Route exact path="/uphish/create-simulation" element={<CreateSimulation />} />;
        <Route exact path="/uphish/landingPageBuilder" element={<LandingPageBuilder />} />;
        <Route exact path="/uphish/email-template-builder" element={<EmailTable />} />;
        <Route exact path="/uphish/email-template-library" element={<EmailTemplateLibrary />} />;
        <Route exact path="/uphish/landingPagelibrary" element={<LandingPageLibrary />} />;
        <Route exact path="/ulearn/course-library" element={<CourseLibrary />} />;
        <Route exact path="/ulearn/course-builder" element={<CourseBuilder />} />;
        <Route exact path="/autoenrol/courseslidedelay" element={<CourseSlideDelay />} />;
        <Route exact path="/autoenrol/coursereminderemails" element={<CourseReminderEmails />} />;
        <Route exact path="/autoenrol/autoPhish" element={<AutoPhish />} />;
        <Route exact path="/autoenrol/workingHours" element={<WorkingHours />} />;
        <Route exact path="/autoenrol/externalpolicyaccess" element={<ExternalPolicyAccess />} />;
        <Route
          exact
          path="/autoenrol/defaultpolicysignaturesettings"
          element={<DefaultPolicySignatureSettings />}
        />
        ;
        <Route
          exact
          path="/autoenrol/preferedTopLevelDomain"
          element={<PreferedTopLevelDomain />}
        />
        ;
        <Route exact path="/autoenrol/compromiseMessage" element={<CompromiseMessage />} />;
        <Route exact path="/autoenrol/messageInjection" element={<MessageInjection />} />;
        <Route exact path="/autoenrol/phishAlertButton" element={<PhishAlertButton />} />;
        <Route
          exact
          path="/autoenrol/gapanalysisreminderemails"
          element={<GapAnalysisReminderEmails />}
        />
        ;
        <Route exact path="/autoenrol/minimumpasscore" element={<MinimumPassCore />} />;
        <Route exact path="/autoenrol/videoplayback" element={<VideoPlayback />} />;
        <Route exact path="/autoenrol/compulsorycourses" element={<CompulsoryCourses />} />;
        <Route exact path="/autoenrol/riskreportcomponent" element={<RiskReportComponent />} />;
        <Route exact path="/autoenrol/enduserportal" element={<EndUserPortal />} />;
        <Route exact path="/autoenrol/useridaccess" element={<UserIdAccess />} />;
        <Route exact path="/autoenrol/languagecomponent" element={<LanguageComponent />} />;
        <Route exact path="/autoenrol/policyReminderEmails" element={<PolicyReminderEmails />} />;
        <Route exact path="/autoenrol/microsoft365" element={<Microsoft365 />} />;
        <Route exact path="/autoenrol/weeklySummary" element={<WeeklySummary />} />;
        <Route exact path="/autoenrol/timezone" element={<TimeZone />} />;
        <Route exact path="/autoenrol/autoEnrol" element={<AutoEnrol />} />;
        <Route exact path="/autoenrol/productnames" element={<ProductNames />} />;
        <Route exact path="/autoenrol/googleworkspace" element={<GoogleWorkspace />} />;
        <Route exact path="/autoenrol/reportsettings" element={<ReportSettings />} />;
        <Route exact path="/Report/GapAnalysisReport" element={<GapAnalysisReport />} />
        <Route exact path="/Report/SimulationPerformance" element={<SimulationPerformance />} />
        <Route exact path="/Report/ReportHub" element={<ReportHub />} />
        <Route
          exact
          path="/Report/ReportHub/PerformanceReport/ViewReport"
          element={<ViewReport />}
        />
        <Route exact path="/uPolicy/templatelibrary" element={<TemplateLibrary />} />;
        <Route exact path="/ulearn/auto-enrol" element={<AutoEnrolSettings />} />
        <Route exact path="/autoenrol/theme" element={<Theme />} />
        <Route exact path="/uPolicy/templatelibrary" element={<TemplateLibrary />} />;
        <Route exact path="/uPolicy/templatebuilder" element={<TemplateBuilder />} />;
        <Route exact path="/uPolicy/viewpolicies" element={<ViewPolicies />} />;
        <Route exact path="/uPolicy/createTemplate" element={<CreateTemplate />} />;
        <Route exact path="/settings/team" element={<AdminUsers />} />;
        <Route exact path="/account" element={<Accounts />} />;
        <Route exact path="/uPolicy/createPolicy" element={<CreatePolicy />} />;
        <Route exact path="/settings/paymentSettings" element={<PaymentSettings />} />;
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home" />} />;
        {/* <Route path="/uphish/email-template-builder/create-email-template" element={<CreateEmailTemplate />} /> */}
        {/* <Route path="/uphish/email-template-builder/edit-email-template" element={<UpdateEmailTemplate />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export function Host() {
  return "http://65.0.19.93:8081/phishfoil";
}

