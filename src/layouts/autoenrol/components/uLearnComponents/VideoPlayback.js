import {
    Typography,
    Switch,
    Button,
  } from "@mui/material";
  
  import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
  import React from "react";
  import SaveIcon from '@mui/icons-material/Save';
  
  const VideoPlayback = () => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
      <DashboardLayout>
        <Typography 
            variant="h4" 
            sx=
            {{
                fontFamily:"Hind Guntur", 
                fontWeight:'500', 
                fontSize:"1.6rem"
                }}
            >
                Video Playback
        </Typography>
        <p 
            style=
            {{
                marginTop:'40px', 
                fontSize:'15px', 
                fontWeight:'lighter', 
                color:'gray', 
                fontFamily: "sans-serif"
            }}
            >
                Here you can set your video playback preferences on training courses.
        </p>
        <div style={{marginTop:'30px'}}>
        <Switch {...label}  />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Show Subtitles on Video Courses by Default
        </span>
        <ul>
            <li 
                style={{ 
                    marginLeft:'20px', 
                    fontSize:'15px', 
                    marginTop:'10px', 
                    color: 'gray', 
                    fontWeight:'lighter' 
                    }}
            >
                Enabling this option will display subtitles on video content for all users where available.
            </li>
            <li 
                style={{ 
                    marginLeft:'20px',
                    fontSize:'15px', 
                    // marginTop:'5px', 
                    color: 'gray', 
                    fontWeight:'lighter'
                }}
            >
                This feature is useful if the majority of your users do not have access to speakers or headphones.
            </li>
        </ul>
        </div>

        <div style={{marginTop:'30px'}}>
        <Switch {...label}  />
        <span 
            style=
            {{
                fontSize:"15px", fontWeight:'lighter', marginLeft:'20px'
            }}
            >
                Use Vimeos Video Player on All Video Courses
        </span>
        <ul>
            <li 
                style={{ 
                    marginLeft:'20px', 
                    fontSize:'15px', 
                    marginTop:'10px', 
                    color: 'gray', 
                    fontWeight:'lighter' 
                    }}
            >
                Enabling this setting will force the use of Vimeos video player on all video courses for all users. This replaces the systems video player overlay.
            </li>
            <li 
                style={{ 
                    marginLeft:'20px',
                    fontSize:'15px', 
                    color: 'gray', 
                    fontWeight:'lighter'
                }}
            >
                You should only use this option if a significant number of users have reported video playback issues.
            </li>
            <li 
                style={{ 
                    marginLeft:'20px',
                    fontSize:'15px', 
                    color: 'gray', 
                    fontWeight:'lighter'
                }}
            >
                Depending on the course, videos will lose features such as full volume control, forwarding and rewinding when using Vimeos player.
            </li>
            <li 
                style={{ 
                    marginLeft:'20px',
                    fontSize:'15px', 
                    color: 'gray', 
                    fontWeight:'lighter'
                }}
            >
                Please note that enabling this setting will not solve issues where Vimeo content is inaccessible e.g. regional blocks or web content filters.
            </li>
            <li 
                style={{ 
                    marginLeft:'20px',
                    fontSize:'15px', 
                    color: 'gray', 
                    fontWeight:'lighter'
                }}
            >
                If in doubt please contact support before enabling this setting.

            </li>
            
        </ul>
        </div>


        <Button 
            variant="contained" 
            style=
            {{
                float:'inline-end', 
                marginTop:'60px', 
                color:'#fff', 
                background:'rgb(30, 123, 228)',
                marginRight:'100px',
                fontWeight:'lighter'
            }}
        >
            <SaveIcon style={{marginRight:'3px'}}/>
                Save
        </Button>
      </DashboardLayout>
    );
  };
  
  export default VideoPlayback;