import * as React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SyncAltIcon from '@mui/icons-material/SyncAlt';

const languages = {
  id: 'indonesia',
  la: 'latin',
};

const LangBox = styled('div')({
  minWidth: '90px',
});
const LangTitle = styled(Typography)({
  textTransform: 'capitalize',
});

export default function Indicator({
  value,
  setValue,
}) {
  const lang1 = !value ? languages.id : languages.la;
  const lang2 = !value ? languages.la : languages.id;

  const handleChangeLang = React.useCallback(() => {
    setValue(!value);
  }, [value, setValue]);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <LangBox>
        <LangTitle
          variant="h6"
        >
          {lang1}
        </LangTitle>
      </LangBox>
      <IconButton
        variant="text"
        color="primary"
        onClick={() => handleChangeLang()}
      >
        <SyncAltIcon />
      </IconButton>
      <LangBox>
        <LangTitle
          variant="h6"
        >
          {lang2}
        </LangTitle>
      </LangBox>
    </Stack>
  );
}

Indicator.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
};
