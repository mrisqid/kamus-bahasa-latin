import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import TranslateIcon from '@mui/icons-material/Translate';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';

import ProfileDialog from '../components/profile-dialog';
import InfoDialog from '../components/info-dialog';
import GuideDialog from '../components/guide-dialog';

import backgroundImg from '../../images/background-3.jpg';

import './styles.css';

const CustomizedStack = styled(Stack)`
  position: relative;
  height: 100vh;
  width: 100%;
  color: #fff;

  :before {
    content: "";
    background-image: linear-gradient(rgba(45, 45, 45, 0.327),rgba(0, 0, 0, 0.4)) , url(${backgroundImg});
    background-size: cover;
    background-position: right 20% bottom 10%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default function Welcome({ setHide }) {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openGuide, setOpenGuide] = React.useState(false);

  return (
    <>
      <CustomizedStack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{
            width: '100%',
            padding: '0 2rem',
          }}
        >
          <Tooltip title="Panduan Kegunaan">
            <IconButton
              color="white"
              size="large"
              onClick={() => setOpenGuide(true)}
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profil Creator">
            <IconButton
              color="white"
              size="large"
              onClick={() => setOpenProfile(true)}
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Tentang Aplikasi">
            <IconButton
              color="white"
              size="large"
              onClick={() => setOpenInfo(true)}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography
          variant="h3"
          sx={{ position: 'relative' }}
        >
          Selamat Datang
        </Typography>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          className="app-name"
        >
          <TranslateIcon className="welcome-icon" />
          <Typography variant="h5">
            Kamus Bahasa Latin
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setHide(true)}
          className="welcome-btn"
        >
          Tekan untuk memulai
        </Button>
      </CustomizedStack>
      <ProfileDialog
        open={openProfile}
        setOpen={setOpenProfile}
      />
      <InfoDialog
        open={openInfo}
        setOpen={setOpenInfo}
      />
      <GuideDialog
        open={openGuide}
        setOpen={setOpenGuide}
      />
    </>
  );
}

Welcome.propTypes = {
  setHide: PropTypes.func.isRequired,
};
