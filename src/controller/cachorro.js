import ServiceCachorro from "../service/cachorro.js"

class ControllerCachorro {

    Buscar(req, res) {
        try {
            const cachorros = ServiceCachorro.Buscar()

            res.send({ cachorros })
        } catch (e) {
            res.send({ Message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServiceCachorro.BuscarUm(id)

            res.send({ nome })
        } catch (e) {
            res.send({ Message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            const raca = req.body.raca
            const sexo = req.body.sexo
            ServiceCachorro.Criar(nome, idade, raca, sexo)

            res.send({ message: "Criado com Sucesso!" })
        } catch (e) {
            res.send({ Message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            const idade = req.body.idade
            const raca = req.body.raca
            const sexo = req.body.sexo
            ServiceCachorro.Alterar(id, nome, idade, raca, sexo)
            res.send({ message: "Alterado com Sucesso!!" })
        } catch (e) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceCachorro.Deletar(id)

            res.send({ message: "Deletado com Sucesso!" })
        } catch (e) {
            res.send({ message: error.message })
        }
    }
}
export default new ControllerCachorro()