import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const NoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Typography>No data!</Typography>
    </Box>
  );
};

export default NoData;
