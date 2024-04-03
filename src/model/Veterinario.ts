import { Produto } from "./Produto";

export class Veterinario extends Produto{
    
    private _remedio: string;

	constructor(id: number, nome: string, tipo: number, preco: number, remedio: string) {
        super(id, nome, tipo, preco) 
		this._remedio = remedio;
	}


    /**
     * Getter 
     * @return {string}
     */
	public get remedio(): string {
		return this._remedio;
	}

    /**
     * Setter 
     * @param {string} value
     */
	public set remedio(value: string) {
		this._remedio = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Remédio: ${this._remedio}`);
    }
}