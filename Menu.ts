import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("  Pet Shop Gen - carinho e cuidado pro melhor amigo  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Listar produto por Id                ");
        console.log("            4 - Atualizar Produtos                   ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nPet Shop Gen - carinho e cuidado pro melhor amigo");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto \n\n");

                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                break;
            case 3:
                console.log("\n\nListar produto por Id \n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Produtos\n\n");

                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Gabriel Aranda - entre em contato: gabriel.aranda@hotmail.com");
    console.log("github.com/Gabriel-Aranda1406/projeto_final_bloco_01");
    console.log("*****************************************************");
}

main();