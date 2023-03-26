import { ChangeEvent, useState } from "react";
import { LaboratoryDB } from "../../../../database";

const ReserveRoom = () => {
    const [minimumCapacity, setMinimumCapacity] = useState('0');

    const handleInputMinimumCapacityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setMinimumCapacity(inputValue);
    };
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form style={{ width: '45%' }}>
            <div>
                <label htmlFor="inputLocation" className="form-label">Data e Hora do início da reserva</label>
                <input type='datetime-local' min={new Date().toISOString().slice(0, 16)} required />
            </div>
            <div>
                <label htmlFor="inputLocation" className="form-label">Data e Hora do fim da reserva</label>
                <input type='datetime-local' min={new Date().toISOString().slice(0, 16)} required />
            </div>
            <div>
                <label htmlFor="inputLocation" className="form-label">Capacidade da Sala/Laboratório</label>
                <input type='number' value={minimumCapacity} onChange={handleInputMinimumCapacityChange} />
            </div>
            <div>
                <label htmlFor="inputLocation" className="form-label">Sala/Laboratório</label>
                <select className="form-select" aria-label="Default select example">
                    <option value='default'>Selecione uma opção</option>
                    {LaboratoryDB.map(lab => lab.capacity >= Number(minimumCapacity) ? <option value={lab.id} key={lab.id}>{lab.name} - {lab.location} - {lab.capacity} pessoas</option> : null)}
                </select>
            </div>
            <button type="submit" className="btn button">Agendar</button>
        </form>
    </div>
}

export default ReserveRoom;