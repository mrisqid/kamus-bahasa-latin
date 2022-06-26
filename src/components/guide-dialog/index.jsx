/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

export default function GuideDialog({
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
      aria-labelledby="guide-dialog"
      aria-describedby="Panduan Penggunaan Aplikasi"
    >
      <DialogTitle>
        Panduan Penggunaan Aplikasi
      </DialogTitle>
      <DialogContent>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li>
            <Typography
              variant="body1"
              sx={{
                lineHeight: '1.25rem',
              }}
            >
              Aplikasi dimulai dengan tekan tombol &quot;Tekan Untuk Memulai&quot; untuk melanjutkan aktivitas.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{
                lineHeight: '1.25rem',
              }}
            >
              Halaman Pencarian bisa digunakan untuk mentranslate kata-kata ataupun kalimat ke bahasa yang dipilih.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{
                lineHeight: '1.25rem',
              }}
            >
              Halaman Flora ataupun Fauna bisa digunakan untuk mencari list ataupun katalog berdasarkan jenis Flora ataupun Fauna.
            </Typography>
          </li>
        </ol>
      </DialogContent>
    </Dialog>
  );
}

GuideDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
