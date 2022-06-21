import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import foto from '../../../images/profile.jpeg';

export default function ProfileDialog({
  open,
  setOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="profile-dialog"
      aria-describedby="Biodata Profil Creator"
    >
      <DialogTitle>
        Profile Creator
      </DialogTitle>
      <DialogContent>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              width: '150px',
              height: '150px',
            }}
          >
            <img
              src={foto}
              alt="foto-profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
          </div>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <div style={{ width: '130px' }}>
              <Typography style={{ fontWeight: 'bold' }}>
                Nama
              </Typography>
            </div>
            <Typography>:</Typography>
            <Typography>
              Aman Saputra
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <div style={{ width: '130px' }}>
              <Typography style={{ fontWeight: 'bold' }}>
                NIM
              </Typography>
            </div>
            <Typography>:</Typography>
            <Typography>
              2517043
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <div style={{ width: '130px' }}>
              <Typography style={{ fontWeight: 'bold' }}>
                Program Studi
              </Typography>
            </div>
            <Typography>:</Typography>
            <Typography>
              Pendidikan Teknik Informatika dan Komputer
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <div style={{ width: '130px' }}>
              <Typography style={{ fontWeight: 'bold' }}>
                Fakultas
              </Typography>
            </div>
            <Typography>:</Typography>
            <Typography>
              Fakultas Tarbiyah dan Ilmu keguruan
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

ProfileDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
