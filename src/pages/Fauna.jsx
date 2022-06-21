/* eslint-disable no-console */
import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';

import KatalogDialog from '../components/dialog';

import { listFauna } from '../api';

export default function Fauna() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [dataSelected, setDataSelected] = React.useState({});

  React.useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        const listData = await listFauna();
        setList(listData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);

  const handleShowDialog = (data) => {
    setOpen(true);
    setDataSelected(data);
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <List>
        {
          loading && (
            <CircularProgress
              sx={{
                fontSize: '1rem',
              }}
            />
          )
        }
        {
          !loading && list?.map((fauna) => (
            <ListItem key={fauna.id}>
              <ListItemButton
                onClick={() => handleShowDialog(fauna)}
              >
                <ListItemText primary={fauna.indonesia} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
      <KatalogDialog
        open={open}
        setOpen={setOpen}
        data={dataSelected}
      />
    </Box>
  );
}
