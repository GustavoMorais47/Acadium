import { IoAddCircle } from "react-icons/io5";
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { RervationsDB } from "../../../../database";
import { ChangeEvent, useEffect, useState } from "react";

const RoomManager = () => {
    const navigate = useNavigate();
    const [reservations, setReservations] = useState(RervationsDB);
    const [search, setSearch] = useState('');

    const handleInputSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearch(inputValue);
    };

    useEffect(() => setReservations(search === '' ? RervationsDB : !isNaN(Number(search)) ? RervationsDB.filter(res => res.id === Number(search)) : RervationsDB.filter(res => res.responsible.includes(search))), [search])

    return <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label className="title">Gerenciador de Salas</label>
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            <button type='button' className="button appButon" onClick={() => navigate('/apps/room-manager/new')}>
                <IoAddCircle size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Cadastrar Sala/Laboratório</h6>
            </button>
            <button type='button' className="button appButon" onClick={() => navigate('/apps/room-manager/reserve')}>
                <BsFillCalendarCheckFill size={45} color='#fff' />
                <h6 style={{ margin: 0, color: '#fff', textAlign: 'start' }}>Realizar agendamento</h6>
            </button>
        </section>
        <label className="title">Agendamentos do dia</label>
        <section>
            <div>
                <label>Pesquisar</label>
                <input type='text' className="form-control" placeholder="Id ou responsável" value={search} onChange={handleInputSearchChange} />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Reserva</th>
                        <th>Responsável</th>
                        <th>Sala/Laboratório</th>
                        <th>Localização</th>
                        <th>Início</th>
                        <th>Termino</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservations.length !== 0 ?
                            reservations.map(res => <tr>
                                <td>{res.id}</td>
                                <td>{res.responsible}</td>
                                <td>{res.laboratory}</td>
                                <td>{res.location}</td>
                                <td>{res.start_date.toLocaleString()}</td>
                                <td>{res.end_date.toLocaleString()}</td>
                            </tr>)
                            :
                            <tr>
                                <td colSpan={6}>Nenhuma reserva encontrada</td>
                            </tr>
                    }
                </tbody>
            </table>
        </section>
    </div>
}

export default RoomManager;