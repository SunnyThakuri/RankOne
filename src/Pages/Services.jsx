import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ServiceLogoDesign from './ServiceLogoDesign';



export default function Services() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <>

      <React.Fragment>
        <Button sx={{ color: 'black', fontWeight: 'bold', fontSize: '18px', margin: '5px 0px 2px 2px' }} onClick={handleClickOpen}>
          Login Design
        </Button>

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          sx={
            {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: {
                xl: '0px 100px 0px 100px',
                sm: '0px 20px 0px 20px',
                md: '0px 50px 0px 50px',
                lg: '0px 80px 0px 80px',
              },
              zIndex: '1300'
            }
          }
          TransitionComponent={Transition}
        >
          <AppBar sx={{
            backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed',
            top: '0',
            width: {
              xl: '100%',
            }
          }}>
            <Toolbar>

              <Button sx={{ fontWeight: 'bold', fontSize: '20px', ml: '80px' }} autoFocus color="inherit" onClick={handleClose}>
                Logo Design
              </Button>
              <IconButton
                edge="start"

                onClick={handleClose}
                aria-label="close"
              >

              </IconButton>
              <Typography sx={{ width: 1000, ml: 2, flex: 1 }} variant="h6" component="div">
              </Typography>

              <CloseIcon onClick={handleClose} sx={{ position: 'absolute', right: '20px', top: '10px', backgroundColor: 'rgba(0,0,0,2.5)', borderRadius: '100%', height: '30px', width: '30px', ":hover": { cursor: 'pointer' } }} />

            </Toolbar>
          </AppBar>
          <List >
            <ServiceLogoDesign />

            <Divider />

          </List>
        </Dialog>
      </React.Fragment >
    </>
  );
}
