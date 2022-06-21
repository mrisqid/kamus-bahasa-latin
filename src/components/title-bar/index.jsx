import * as React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import './styles.css';

export default function TitleBar({ pageOrder }) {
  const title = () => {
    if (pageOrder === 1) return 'Katalog Flora';
    if (pageOrder === 2) return 'Katalog Fauna';
    return 'Translate';
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      className="title-bar"
    >
      <Typography
        variant="h4"
        className="title"
      >
        {title()}
      </Typography>
    </Stack>
  );
}

TitleBar.propTypes = {
  pageOrder: PropTypes.number.isRequired,
};
