import Sajjan from './component/Sajjan';
import Adduser from './component/Adduser';
import Navbar from './component/Navbar';
import Alluser from './component/Alluser';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './component/EditUser';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Sajjan/>} />
        <Route path="/Add" element={<Adduser/>} />
        <Route path="/All" element={<Alluser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
