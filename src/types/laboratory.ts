import { LaboratoryEquipmentType } from "./laboratoryEquipment"
import { LaboratoryFurnitureType } from "./laboratoryFurniture"

export type LaboratoryType = {
    id: string | number,
    name: string,
    location: string,
    capacity: number,
    equipment: LaboratoryEquipmentType[] | null,
    furniture: LaboratoryFurnitureType[] | null,
    rules: string
}