import React from 'react';

import { Toolbar, Typography } from '@mui/material';

import { HeaderProps } from 'interfaces';

const Header = ({ title }: HeaderProps) => {
  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title || 'LionMane Test'}
      </Typography>
    </Toolbar>
  );
};

export default Header;
