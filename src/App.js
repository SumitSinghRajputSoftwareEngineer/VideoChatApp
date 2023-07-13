import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Room from './component/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomID' element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
