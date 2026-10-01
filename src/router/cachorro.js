import express from 'express'
import ControllerCachorro from "../controller/cachorro.js"

const router = express.Router()

router.get("/buscar", ControllerCachorro.Buscar)
router.get("buscarUm/:id", ControllerCachorro.BuscarUm)
router.post("/criar", ControllerCachorro.Criar)
router.put("alterar/:id", ControllerCachorro.Alterar)
router.delete("/deletar/:id", ControllerCachorro.Deletar)

export default router