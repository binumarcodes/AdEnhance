import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Avatar from 'your-avatar-library'; // Replace with the actual library you choose
import './Topbar.css'; // Import a CSS file for custom styling if needed

function Topbar() {
  return (
    <AppBar position="fixed" className="topbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          AdEnhance
        </Typography>
        {/* <Avatar src="user-profile-picture.jpg" alt="User Profile" /> */}
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
