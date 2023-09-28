export abstract class Vehicule {
    private _marque: string; 
    private _modele: string;  
    private _immatriculation: string;  
    private _couleur: string;  
    private _kilometrage: number; 
    private _prix: number; 
    private _annee: number;  
    
    constructor(marque : string, modele : string, immatriculation : string, couleur : string, kilometrage : number, prix : number, annee : number){
        this._marque = marque;
        this._modele = modele;
        this._immatriculation = immatriculation;
        this._couleur = couleur;
        this._kilometrage = kilometrage;
        this._prix = prix;
        this._annee = annee
    }  
    
    public get marque(): string {
        return this._marque;
    }
    public set marque(value: string) {
        this._marque = value;
    }
    public get modele(): string {
        return this._modele;
    }
    public set modele(value: string) {
        this._modele = value;
    }
    public get immatriculation(): string {
        return this._immatriculation;
    }
    public set immatriculation(value: string) {
        this._immatriculation = value;
    }
    public get couleur(): string {
        return this._couleur;
    }
    public set couleur(value: string) {
        this._couleur = value;
    }
    public get kilometrage(): number {
        return this._kilometrage;
    }
    public set kilometrage(value: number) {
        this._kilometrage = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get annee(): number {
        return this._annee;
    }
    public set annee(value: number) {
        this._annee = value;
    }
}
