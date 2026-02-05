import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class TriAtleta extends Pessoa implements Ciclista, Corredor, Nadador{

    
    aquecer(): void {
        throw new Error("Method not implemented.");
    }
    public cansar(): void {
        
        throw new Error("Method not implemented.");
    }
    pedalar(): void {
        throw new Error("Method not implemented.");
    }
    correr(): void {
        throw new Error("Method not implemented.");
    }
    nadar(): void {
        throw new Error("Method not implemented.");
    }

}