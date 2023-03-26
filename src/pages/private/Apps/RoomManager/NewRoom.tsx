import { LaboratoryEquipmentDB, LaboratoryFurnitureDB } from "../../../../database"

const NewRoom = () => {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <form style={{width: '45%'}}>
            <div>
                <label htmlFor="inputName" className="form-label">Nome</label>
                <input className="form-control" id="inputName" required/>
            </div>
            <div>
                <label htmlFor="inputLocation" className="form-label">Localização</label>
                <input className="form-control" id="inputLocation" required/>
            </div>
            <div>
                <label htmlFor="inputCapacity" className="form-label">Capacidade</label>
                <input type='number' className="form-control" id="inputCapacity" min={0} required/>
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Equipamentos</label>
                {LaboratoryEquipmentDB.length === 0 ?
                    <label className="form-text"> 
                        Nenhuma equipamento cadastrado
                    </label>
                    :
                    LaboratoryEquipmentDB.map(equipment => <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`checkEquipament_${equipment.id}`} />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <label className="form-check-label" htmlFor={`checkEquipament_${equipment.id}`}>
                                {equipment.name}
                            </label>
                            <label style={{fontSize: 12, fontWeight: 300}} htmlFor={`checkEquipament_${equipment.id}`}>
                                ( {equipment.description !== null ? equipment.description : 'Sem descrição'} )
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Mobiliário</label>
                {LaboratoryFurnitureDB.length === 0 ?
                    <label className="form-text">
                        Nenhuma mobília cadastrada
                    </label>
                    :
                    LaboratoryFurnitureDB.map(furniture => <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id={`checkFurniture_${furniture.id}`} />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                            <label className="form-check-label" htmlFor={`checkFurniture_${furniture.id}`}>
                                {furniture.name}
                            </label>
                            <label style={{fontSize: 12, fontWeight: 300}} htmlFor={`checkFurniture_${furniture.id}`}>
                                ( {furniture.description !== null ? furniture.description : 'Sem descrição'} )
                            </label>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Regras e políticas</label>
                <textarea className="form-control" rows={5} />
            </div>
            <button type="submit" className="btn button">Cadastrar</button>
        </form>
    </div>
}

export default NewRoom