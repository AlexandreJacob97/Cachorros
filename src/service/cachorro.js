import Cachorro from '../model/cachorro.js'

class ServiceCachorro {
    Buscar() {
        return Cachorro.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar números")
        }

        return Cachorro.BuscarUm(id)
    }

    Criar(nome,idade,raca,sexo) {
        if(!nome || !idade || !raca || !sexo){
            throw new Error("Favor informar os dados corretamente!")
        }

        Cachorro.Criar(nome, idade, raca, sexo)
    }

    Alterar(id,nome,idade,raca,sexo) {
        if(!id || isNaN(id) || !nome || !idade || !raca || !sexo){
            throw new Error("Favor informar os dados corretamente!!")
        }

        Cachorro.Alterar(id, nome, idade, raca, sexo)
    }

    Deletar(id){
        if(!id || isNaN(id)){
            throw new Error("Favor informar o Id Corretamente")
        }
        
        Cachorro.Deletar(id)
    }

}

export default new ServiceCachorro()