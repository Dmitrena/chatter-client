import { ApolloProvider } from '@apollo/client';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';
import Guard from './components/auth/Guard';
import client from './constants/apollo-client';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Guard>
            <RouterProvider router={router} />
          </Guard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
