import * as React from 'react';
import PropTypes from 'prop-types';

// MUI components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Custom Components
import TitleBar from './components/title-bar';
import MenuBar from './components/menu-bar';

// Pages
import Welcome from './pages/Welcome';
import Pencarian from './pages/Pencarian';
import Flora from './pages/Flora';
import Fauna from './pages/Fauna';

import './app.css';

function Pages({ pageOrder }) {
  if (pageOrder === 1) return <Flora />;
  if (pageOrder === 2) return <Fauna />;
  return <Pencarian />;
}

Pages.propTypes = {
  pageOrder: PropTypes.number.isRequired,
};

function App() {
  const [hideWelcome, setHideWelcome] = React.useState(false);
  const [pageOrder, setPageOrder] = React.useState(0);

  return (
    <Container
      maxWidth="sm"
      className="container"
    >
      {
        hideWelcome ? (
          <Grid
            container
            direction="column"
          >
            <Grid
              container
              item
              direction="column"
              xs={10}
            >
              <TitleBar
                pageOrder={pageOrder}
              />
              <div className="pages-div">
                <Pages pageOrder={pageOrder} />
              </div>
            </Grid>
            <Grid
              item
              xs={2}
            >
              <MenuBar
                value={pageOrder}
                setValue={setPageOrder}
              />
            </Grid>
          </Grid>
        ) : (
          <Welcome setHide={setHideWelcome} />
        )
      }
    </Container>
  );
}

export default App;
