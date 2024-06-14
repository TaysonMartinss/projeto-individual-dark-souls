var database = require("../database/config")

// function RegistrarDados(id,fkUsuario,mortes) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id, fkUsuario, mortes);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         INSERT INTO stats (id, fkUsuario, mortes) VALUES ('${id}', '${fkUsuario}', '${mortes}');
//     `;
//     console.log("Registrando dados da tentativa do quiz: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


function registrar(id, mortes,vitorias) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", id, mortes, vitorias);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO stats (fkUsuario, mortes, vitorias) VALUES ('${id}', '${mortes}', '${vitorias}');
    `;
    console.log("Registrando dados da tentativa do quiz: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
// RegistrarDados,
registrar
};

