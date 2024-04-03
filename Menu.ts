import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controller/ProdutoController";
import { Veterinario } from "./src/model/Veterinario"
import { Alimentos } from "./src/model/Alimentos";


export function main() {

    let opcao, id, tipo, preco: number;
    let nome, racao, remedio: string;
    let tipoProduto = ['Alimentos', 'Veterinario'];

    
    const produtoController: ProdutoController = new ProdutoController();

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong,
            "*******************************************************************");
        console.log("                                                           ");
        console.log("  Pet Shop Gen - carinho e cuidado pro(a) melhor amigo(a)  ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                           ");
        console.log("            1 - Criar Produto                              ");
        console.log("            2 - Listar todos os Produtos                   ");
        console.log("            3 - Buscar Produto por Id                      ");
        console.log("            4 - Atualizar Produto                          ");
        console.log("            5 - Deletar Produto                            ");
        console.log("            0 - Sair                                       ");
        console.log("                                                           ");
        console.log("***********************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.bluestrong,
                "\nPet Shop Gen - carinho e cuidado pro melhor amigo ");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.bluestrong,
                    "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preço: ");

                switch (tipo) {
                    case 1:
                        racao = readlinesync.question("Específico para qual animal: ");
                        produtoController.cadastrar(new Alimentos(produtoController.gerarId(),
                            nome, tipo, preco, racao));
                        break;
                    case 2:
                        remedio = readlinesync.question("Específico para qual animal: ");
                        produtoController.cadastrar(new Veterinario(produtoController.gerarId(),
                            nome, tipo, preco, remedio));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                racao = readlinesync.question("Específico para qual animal: ");
                                produtoController.atualizar(new Alimentos(id,
                                    nome, tipo, preco, racao));
                                break;
                            case 2:
                                remedio = readlinesync.question("Específico para qual animal: ");
                                produtoController.atualizar(new Veterinario(id,
                                    nome, tipo, preco, remedio));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.bluestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}


function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Gabriel Aranda - gabriel.aranda@hotmail.com");
    console.log("github.com/Gabriel-Aranda1406");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();