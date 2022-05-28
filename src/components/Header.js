import AssignmentIcon from '@mui/icons-material/Assignment';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar elevation={0} position='sticky'>
      <Toolbar
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          fontSize: '1.5rem',
        }}>
        <AssignmentIcon sx={{ fontSize: '2rem' }} />
        <Typography fontWeight='700' fontSize='inherit'>
          Todo List App
        </Typography>
        <Box>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}>
            {user ? (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/profile'>
                  <Typography>Profil</Typography>
                </Link>
              </MenuItem>
            ) : null}
            {user ? (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/notes'>
                  <Typography>Zadania</Typography>
                </Link>
              </MenuItem>
            ) : null}
            {user ? null : (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/login'>
                  <Typography>Logowanie</Typography>
                </Link>
              </MenuItem>
            )}
            {user ? null : (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to='/signup'>
                  <Typography>Rejestracja</Typography>
                </Link>
              </MenuItem>
            )}
            {user ? (
              <MenuItem
                onClick={(e) => {
                  handleCloseNavMenu();
                  handleLogout();
                }}>
                <Link to='/login'>
                  <Typography color='error'>Wyloguj się</Typography>
                </Link>
              </MenuItem>
            ) : null}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
