import Add from './Add';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Display from './Display';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="Add">Add</Link> |
        <Link to="Display">Display</Link> |
        <Link to="Edit">Edit</Link>

        <Routes>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/Display" element={<Display/>}/>
          <Route path='/Edit/:id' element={<Edit/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
