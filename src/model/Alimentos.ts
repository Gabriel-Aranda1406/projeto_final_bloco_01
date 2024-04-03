import { Produto } from "./Produto";

export class Alimentos extends Produto{
    
    private _racao: string;

	constructor(id: number, nome: string, tipo: number, preco: number, racao: string) {
        super(id, nome, tipo, preco) 
		this._racao = racao;
	}


    /**
     * Getter 
     * @return {string}
     */
	public get racao(): string {
		return this._racao;
	}

    /**
     * Setter 
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