"use client"
import "../styles/toolbar.css";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Toolbar() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem key="1" disablePadding>
                <ListItemButton>
                    <ListItemText primary="Contribute to Void." />
                </ListItemButton>
                
            </ListItem>
            <ListItem key="2" disablePadding>
                <ListItemButton>
                    <ListItemText primary="Join our community" />
                </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );
  return (
    <>
      <div className="toolbar">
        <h1>VOID.</h1>
        <button onClick={toggleDrawer("right", true)}>
          <svg
            width={44}
            height={23}
            viewBox="0 0 54 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 29.6667H51M3 16.3333H51M3 3H51"
              stroke="black"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
      </div>
    </>
  );
}
export default Toolbar;
