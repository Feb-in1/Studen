import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      
      <AddStudent/> <br></br>
      <SearchStudent/><br/>
      <DeleteStudent/><br/>
      <ViewAll/>

    </div>
  );
}

export default App;
