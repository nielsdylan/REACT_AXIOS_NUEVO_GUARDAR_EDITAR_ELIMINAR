
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import NavBar from "./components/NavBar";
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CodeforInterview from './components/CodeforInterview';
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<CodeforInterview />} ></Route>
                <Route path="/all" element={<AllUser />} ></Route>
                <Route path="/add" element={<AddUser />} ></Route>
                <Route path="/edit/:id" element={<EditUser />} ></Route>
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
