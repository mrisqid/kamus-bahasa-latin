/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Logo from '../../../images/logo.png';

export default function InfoDialog({
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
      aria-labelledby="info-dialog"
      aria-describedby="Informasi tentang aplikasi dan latar belakang aplikasi"
    >
      <DialogTitle>
        Tentang Aplikasi
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
              width: '350px',
            }}
          >
            <img
              src={Logo}
              alt="foto-profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </Stack>
        <Stack
          direction="column"
          spacing={2}
        >
          <Stack
            direction="column"
            spacing={1}
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              Tujuan :
            </Typography>
            <Typography variant="body2">
              Aplikasi ini bertujuan untuk menyelesaikan tugas akhir skripsi dengan berjudul &quot;Perancangan Aplikasi Kamus Pintar Bahasa Latin untuk Pembelajaran Biologi&quot;
            </Typography>
          </Stack>
          <Stack
            direction="column"
            spacing={1}
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              Lokasi Penelitian :
            </Typography>
            <Typography variant="body2">
              MAN 1 Payakumbuh
            </Typography>
          </Stack>
          <Stack
            direction="column"
            spacing={1}
          >
            <Typography sx={{ fontWeight: 'bold' }}>
              Objek Penelitian :
            </Typography>
            <Typography variant="body2">
              Siswa Kelas 10 MIPA
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

InfoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
