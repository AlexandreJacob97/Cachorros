const cachorros = new Array(
    { nome: "Jao", idade: 10, raca: "Gorn", sexo: 'F' },
    { nome: "Robson", idade: 9, raca: "Pitbull", sexo: 'M' },
    { nome: "Rambo", idade: 11, raca: "Pinscher", sexo: 'M' }
)

class Cachorro {
    Buscar() {
        return cachorros
    }

    BuscarUm(id) {
        return cachorros[id]
    }

    Criar(nome, idade, raca, sexo) {
        cachorros.push({ nome, idade, raca, sexo })
    }

    Alterar(id, nome, idade, raca, sexo) {
        cachorros[id].nome = nome
        cachorros[id].idade = idade
        cachorros[id].raca = raca
        cachorros[id].sexo = sexo
    }
    Deletar(id) {
        nomes.splice(id, 1)
    }

}
export default new Cachorro()