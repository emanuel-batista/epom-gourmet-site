import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservar from './pages/Reservar';

import Erro from './pages/Erro';
import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reservar' element={<Reservar />} />
                
                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
