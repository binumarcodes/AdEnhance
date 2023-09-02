import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from "@mui/material/Toolbar"
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';

import './Sidebar.css';

function Sidebar() {
  return (
    <Drawer
      className="drawer" // Apply the CSS class to the Drawer component
      variant="permanent"
      classes={{
        paper: 'drawerPaper', // Apply the CSS class to the paper class of Drawer
      }}
      sx={{
        background: 'linear-gradient(to bottom, navy, blue)', // Define the linear gradient background
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: 'white', // Set the color of icons and text to white
        },
      }}
    >
      <Toolbar className="toolbar" /> {/* Apply the CSS class to the Toolbar */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        {/* Add more ListItems for other sidebar items */}
      </List>
      <Divider />
      {/* Optional: Add a secondary list or footer */}
      <p className="some-class">The Man</p> {/* Apply a CSS class to the paragraph */}
    </Drawer>
  );
}

export default Sidebar;
