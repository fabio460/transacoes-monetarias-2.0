
import Login from './component/Login';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from './component/Home';
import { PrivateRoute } from './component/PrivateRoute';
import Cadastro from './component/Cadastro';

function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }/>
            <Route path='/login' element={
              <Login/>
            }/>
            <Route path='/cadastro' element={
              <Cadastro/>
            }/>
         </Routes>
      </BrowserRouter>
  );
}

export default App;
