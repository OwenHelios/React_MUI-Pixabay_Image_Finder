import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/NavBar';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
      <NavBar />
      <Search />
      </div>
    </MuiThemeProvider>
    
  );
}

export default App;
