import { useHistory } from 'react-router';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { HeaderProps } from 'interfaces';

const Header = ({ title }: HeaderProps) => {
  const history = useHistory();
  return (
    <AppBar position="fixed">
      <Toolbar
        style={{
          backgroundColor: '#3498db',
        }}
      >
        <Button onClick={() => history.push('/')}>
          <img
            src="https://lionmane.com/assets/svg/lionmane_logo_white_web.svg"
            width="100px"
            alt="logo"
          />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}
        >
          {title || 'LionMane Test'}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
