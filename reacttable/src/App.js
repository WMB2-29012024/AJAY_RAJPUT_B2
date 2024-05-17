import './App.css';
import MainHeader from './TableUpperHead/MainHeader';
import Thead from './MainTable/Thead';
import Tbody from './MainTable/Tbody';
import Pagination from './Pagination/Pagination';

function App() {
  return (
    <div className="App">
     <MainHeader />
     <table className='table'>
      <thead>
        <Thead/>
      </thead>
          <Tbody/>
     </table>
<Pagination/>
    </div>
  );
}

export default App;
