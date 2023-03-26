import { LaboratoryType } from "../types/laboratory";
import { LaboratoryEquipmentType } from "../types/laboratoryEquipment";
import { LaboratoryFurnitureType } from "../types/laboratoryFurniture";
import { Reservation } from "../types/reservation";

export const RervationsDB: Reservation[] = [];
export const LaboratoryDB: LaboratoryType[] = [
    {
        id:0,
        name: 'Lab 1',
        location: 'Bloco A',
        capacity: 10,
        equipment: [
            {
                id: 0,
                name: 'Computador',
                description: null
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:1,
        name: 'Lab 2',
        location: 'Bloco B',
        capacity: 25,
        equipment: [
            {
                id: 1,
                name: 'Projetor',
                description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:2,
        name: 'Lab 3',
        location: 'Bloco C',
        capacity: 80,
        equipment: [
            {
                id: 0,
                name: 'Computador',
                description: null
            },
            {
                id: 1,
                name: 'Projetor',
                description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
            }
        ],
        furniture: null,
        rules: ''
    },
    {
        id:3,
        name: 'Sala 1',
        location: 'Bloco D',
        capacity: 110,
        equipment: null,
        furniture: null,
        rules: ''
    },
    {
        id:4,
        name: 'Sala 2',
        location: 'Bloco E',
        capacity: 45,
        equipment: null,
        furniture: null,
        rules: ''
    },
    {
        id:5,
        name: 'Sala 3',
        location: 'Bloco F',
        capacity: 55,
        equipment: null,
        furniture: null,
        rules: ''
    }
];
export const LaboratoryEquipmentDB: LaboratoryEquipmentType[] = [
    {
        id: 0,
        name: 'Computador',
        description: null
    },
    {
        id: 1,
        name: 'Projetor',
        description: 'Lorem ipsum dolor sit amet. Et doloremque tenetur sed odio tempore aut totam iste qui delectus error.'
    }
];
export const LaboratoryFurnitureDB: LaboratoryFurnitureType[] = [];