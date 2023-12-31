import { Voiture } from "./Voiture";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { Vehicule } from "./Vehicule";

export class Garage{
    private _nomdugarage: string;
    private _listedevehicules: Vehicule[];    
   

    voiturelamoinschere(listedevoitures : Vehicule[]): Voiture{
        let laVoitureLaMoinsChere : Voiture
        listedevoitures.sort((voiturea, voitureb) => voiturea.prix - voitureb.prix)
        laVoitureLaMoinsChere = listedevoitures[0]
        console.log("la voiture la moins chère est : ",listedevoitures[0])
        return laVoitureLaMoinsChere;
        
    }
    voiturelapluschere(listedevoitures : Vehicule[]): Voiture{
        let laVoitureLaPlusChere : Voiture
        listedevoitures.sort((voiturea, voitureb) => voitureb.prix - voiturea.prix)
        laVoitureLaPlusChere = listedevoitures [0]
        console.log("la voiture la plus chère est : ",listedevoitures[0])
        return laVoitureLaPlusChere;
    }

    couleurvoiture(listedevoitures : Vehicule[]) : Voiture[]{
        let voiturebleuvertigo = listedevoitures.filter((element) => element.couleur == "Bleu Vertigo");
        console.log("les voitures de couleur bleu vertigo sont : " ,voiturebleuvertigo)
        return voiturebleuvertigo;
    }
    getlistevehiculepartype(monType:string) {
        this._listedevehicules.forEach(monVehicule => {
            if (monType == "Moto") {
                if (monVehicule instanceof Moto) {
                    console.log(monVehicule) 
                } 
            }
            else if(monType == "Camion") {
                if (monVehicule instanceof Camion) {
                    console.log(monVehicule) 
                } 
            }
            else if(monType == "Voiture") {
                if (monVehicule instanceof Voiture) {
                    console.log(monVehicule) 
                } 
            }
            
        });
    }
    constructor (nomdugarage : string, listedevehicules : Vehicule[]){
        
        this._nomdugarage = nomdugarage
        this._listedevehicules = listedevehicules
    }
    public get nomdugarage(): string {
        return this._nomdugarage;
    }
    public set nomdugarage(value: string) {
        this._nomdugarage = value;
    }
    public get listedevehicules(): Vehicule[] {
        return this._listedevehicules;
    }
    public set listedevehicules(value: Vehicule[]) {
        this._listedevehicules = value;
    }
    
}