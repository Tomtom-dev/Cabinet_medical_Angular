import { Adresse } from "./adresse";

export interface Infirmiere{
    id: number,
    numero_professionnel: number,
    nom:String,
    prenom:String,
    tel_pro:number,
    tel_perso:number,
    adresse: Adresse
}