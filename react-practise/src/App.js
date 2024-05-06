import logo from './logo.svg';
import './App.css';
import UserVotingStatus from './components/UserVotingStatus';

function App() {
  const age=Math.floor(Math.random()*100)
  console.log(age);
  return (
    <div className="App">
      < UserVotingStatus age={age}/>
    </div>
  );
}

export default App;
