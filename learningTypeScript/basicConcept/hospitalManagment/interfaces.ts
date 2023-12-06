import { diseaseType, doctorType, gender, hospitalType } from "./types"


export interface IDoctor {
    name: string,
    type: doctorType,
    expirence: number
}

export interface IHospital {
    name: string,
    type: hospitalType,
    location: string
}

export interface IPatient {
    name: string,
    age: number,
    gender: gender
}

export interface IDisease {
    name: string,
    type: diseaseType
}