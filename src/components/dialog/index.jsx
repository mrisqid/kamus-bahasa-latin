import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';

export default function KatalogDialog({
  data,
  open,
  setOpen,
}) {
  const { indonesia, latin } = data;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="katalog-dialog"
      aria-describedby="arti dari kata pada katalog"
    >
      <DialogTitle>
        {indonesia}
      </DialogTitle>
      <DialogContent>
        <Typography>
          Bahasa latin kata/kalimat ini adalah
          <span
            style={{
              fontWeight: 'bold',
              color: '#1976d2',
            }}
          >
            {` ${latin}`}
          </span>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

KatalogDialog.propTypes = {
  data: PropTypes.shape.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
