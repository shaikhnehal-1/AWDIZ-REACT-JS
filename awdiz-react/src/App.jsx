import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import UseState from './components/Day-4/UseState';
import UseStateTwo from './components/Day-5/UseStateTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state-2" element={<UseStateTwo/>} />
      </Routes>
    </div>
  );
}

export default App;
