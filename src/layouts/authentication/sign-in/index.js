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

import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import axios from 'axios'

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const host = 'http://localhost:8081';

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  
  useEffect(() => {
    if (localStorage.getItem("loginData")) {
      navigate("/users");
    }
  }, []);

  const handleLogin = () => {

    if(username == ""){
      return toast.error("Email is required")
    }
    if(password == ""){
      return toast.error("Password is required")
    }

    axios.post(`${host}/login/authenticate`,{username, password}).then((res)=>{
      if(res.data){
        console.log(res.data)
        let data = {
          token : res.data?.token,
          role: res.data?.role,
          detailsid: res.data?.detailsid,
          clientid:res.data?.clientid,
          username:res.data?.username

        }
        const userData = JSON.stringify(data);

        localStorage.setItem("loginData",userData)
        toast.success('Login Success')
        console.log(data)
        navigate("/users")
      }else {
        toast.error("Login failed")
      }
    }).catch(e=>{
      toast.error(`404 : Login failed`)
    })
  }

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <ToastContainer />
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" required onChange={(e) => setUsername(e.target.value)} />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </SoftBox>
        {/* <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox> */}
        <SoftBox mt={4} mb={1} onClick={handleLogin}>
          <SoftButton variant="gradient" color="info" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
        {/* <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox> */}
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
