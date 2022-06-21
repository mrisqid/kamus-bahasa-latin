/* eslint-disable no-console */
import * as React from 'react';

import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Indicator from '../components/indicator';

import { updateParams, translate } from '../api';
import { useDebounce } from '../utils/helper';

import './styles.css';

export default function Pencarian() {
  const [langOrder, setLangOrder] = React.useState(false);
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const debounceText = useDebounce(text, 500);

  const handleChangeText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  React.useEffect(() => {
    const fetchTranslate = async () => {
      setLoading(true);
      try {
        const translateData = await translate();
        setData(translateData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if (debounceText !== '') {
      updateParams({
        words: debounceText,
        langStatus: langOrder,
      });

      fetchTranslate();
    }
  }, [debounceText, langOrder]);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
    >
      <Indicator
        value={langOrder}
        setValue={setLangOrder}
      />
      <TextareaAutosize
        aria-label="kolom pencarian"
        minRows={5}
        placeholder="Masukkan kata atau kalimat..."
        className="text-area"
        value={text}
        onChange={(e) => handleChangeText(e)}
      />
      <Stack
        direction="column"
        alignItems="flex-start"
        spacing={2}
        sx={{
          width: '100%',
        }}
      >
        <Typography variant="h6">
          {'Diterjemahkan: '}
        </Typography>
        {
          loading ? (
            <CircularProgress
              sx={{
                fontSize: '1rem',
              }}
            />
          ) : (
            <Typography
              variant="body1"
              className="translatedText"
            >
              {data?.translate}
            </Typography>
          )
        }
      </Stack>
    </Stack>
  );
}
