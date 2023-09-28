import { Voiture } from "./Voiture";

export class Garage {
    private _nomdugarage: string;
    private _listedevoitures: Voiture[];    

    voiturelamoinschere(listedevoitures : Voiture[]): Voiture{
        let laVoitureLaMoinsChere : Voiture
        listedevoitures.sort((voiturea, voitureb) => voiturea.prix - voitureb.prix)
        laVoitureLaMoinsChere = listedevoitures[0]
        console.log("la voiture la moins chère est : ",listedevoitures[0])
        return laVoitureLaMoinsChere;
        
    }
    voiturelapluschere(listedevoitures : Voiture[]): Voiture{
        let laVoitureLaPlusChere : Voiture
        listedevoitures.sort((voiturea, voitureb) => voitureb.prix - voiturea.prix)
        laVoitureLaPlusChere = listedevoitures [0]
        console.log("la voiture la plus chère est : ",listedevoitures[0])
        return laVoitureLaPlusChere;
    }

    couleurvoiture(listedevoitures : Voiture[]) : Voiture[]{
        let voiturebleuvertigo = listedevoitures.filter((element) => element.couleur == "Bleu Vertigo");
        console.log("les voitures de couleur bleu vertigo sont : " ,voiturebleuvertigo)
        return voiturebleuvertigo;
    }

    constructor (nomdugarage : string, listedevoitures: Voiture[]){
       
        this._nomdugarage = nomdugarage
        this._listedevoitures = listedevoitures
    }
    public get nomdugarage(): string {
        return this._nomdugarage;
    }
    public set nomdugarage(value: string) {
        this._nomdugarage = value;
    }
    public get listedevoitures(): Voiture[] {
        return this._listedevoitures;
    }
    public set listedevoitures(value: Voiture[]) {
        this._listedevoitures = value;
    }
    
}