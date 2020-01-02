import React from 'react';
import Dashboard from './views/Dashboard/Dashboard';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';

const browserHistory = createBrowserHistory();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
          <Routes />
        </Router>
      {/* <Dashboard/> */}
    </ThemeProvider>
  );
};

export default App;