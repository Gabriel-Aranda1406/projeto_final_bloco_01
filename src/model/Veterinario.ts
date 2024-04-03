import { Produto } from "./Produto";

export class Medicamento extends Produto{
    
    private _remedio: string;

	constructor(id: number, nome: string, tipo: number, preco: number, remedio: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._remedio = remedio;
	}


    /**
     * Getter generico
     * @return {string}
     */
	public get remedio(): string {
		return this._remedio;
	}

    /**
     * Setter generico
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