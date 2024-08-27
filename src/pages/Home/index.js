import { Link } from 'react-router-dom';
import reserva from './facareserva.png';
import './style.css';


function Home() {
    return (
        <div className="reserva">
            <div className="img">
                <img src={reserva} alt="faça sua reserva" />
            </div>
            <div className="botao-reservar">
                <h2><Link to='/reservar'>Reservar</Link></h2>
            </div>
        </div>
    )
}

export default Home;