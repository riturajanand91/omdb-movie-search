import './App.css';
import SearchBarComponent from './searchBar/SearchBarComponent';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      {/* <Container maxWidth="xl" sx={{ p: '0px !important' }}> */}
        <SearchBarComponent />
      {/* </Container> */}
    </div>
  );
}

export default App;
