import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Screens/Home';
import Room from './Screens/Room';
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<Room/>} />
    </Routes>
  );
}

export default App;
