import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Supplier } from './Views/Admin/Proveedores/indexsup';
import {Createsup} from './Views/Admin/Proveedores/createsup';
import { Editsup} from './Views/Admin/Proveedores/editsup';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Register } from './Views/Admin/Register';
import { Home } from './Views/Admin/Home';
import { Login } from './Views/Admin/Login'; // Asegúrate de importar el componente Login
import { Flight } from './Views/Admin/Vuelos/IndexFligth';
import { About } from './Views/Admin/About';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/create" element={<Createsup />} />
          <Route path="/edit/:id" element={<Editsup />} /> {/* Corregir la ruta aquí */}
          <Route path="/flight" element={<Flight />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;