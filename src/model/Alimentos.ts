import { Produto } from "./Produto";

export class Cosmetico extends Produto{
    
    private _racao: string;

	constructor(id: number, nome: string, tipo: number, preco: number, racao: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._racao = racao;
	}


    /**
     * Getter fragancia
     * @return {string}
     */
	public get racao(): string {
		return this._racao;
	}

    /**
     * Setter fragancia
     * @param {string} value
     */
	public set racao(value: string) {
		this._racao = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(`Ração: ${this._racao}`);
    }
}