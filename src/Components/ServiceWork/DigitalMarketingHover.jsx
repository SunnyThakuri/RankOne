import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import DigitalMarketing from "../ServiceWork/DigitalMarketing"



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DigitalMarketingHover({ open, handleClose }) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{
        backgroundColor: 'black',
        padding: {
          xl: '0px 100px 0px 100px',
          sm: '0px 20px 0px 20px',
          md: '0px 50px 0px 50px',
          lg: '0px 80px 0px 80px'
        },
        zIndex: '1300'
      }}
    >
      <AppBar
        sx={{
          backgroundColor: 'black',
          position: 'fixed',
          top: '0',
          width: '100%'
        }}
      >
        <Toolbar>
          <Button
            sx={{ fontWeight: 'bold', fontSize: '20px', ml: '80px', fontFamily: 'outfit' }}
            autoFocus
            color="inherit"
            onClick={handleClose}
          >
            Digital Marketing
          </Button>
          <IconButton edge="start" onClick={handleClose} aria-label="close"></IconButton>
          <Typography sx={{ width: 1000, ml: 2, flex: 1 }} variant="h6" component="div"></Typography>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '20px',
              top: '10px',
              backgroundColor: 'black',
              borderRadius: '100%',
              height: '30px',
              width: '30px',
              ':hover': { cursor: 'pointer' }
            }}
          />
        </Toolbar>
      </AppBar>
      <List
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }}
      >
        <DigitalMarketing />
        <Divider />
      </List>
    </Dialog>
  );
}
