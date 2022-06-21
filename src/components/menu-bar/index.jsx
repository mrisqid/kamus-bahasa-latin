import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import SearchIcon from '@mui/icons-material/Search';
import GrassIcon from '@mui/icons-material/Grass';
import PetsIcon from '@mui/icons-material/Pets';

export default function MenuBar({
  value,
  setValue,
}) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Pencarian" icon={<SearchIcon />} />
        <BottomNavigationAction label="Flora" icon={<GrassIcon />} />
        <BottomNavigationAction label="Fauna" icon={<PetsIcon />} />
      </BottomNavigation>
    </Box>
  );
}

MenuBar.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
