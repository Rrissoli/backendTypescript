import { Request, Response } from 'express'
import { knex } from '../dB/connex'
import { Carro } from '../types/carro'



export const listarCarros = async (req: Request, res: Response) => {

    try {
        const carros = await knex('carros')
        return res.status(200).json(carros)
    } catch {

        return res.status(500).json({ mensagem: "error interno" })
    }
}




export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const carro = await knex<Carro>('carros')
            .where({ id: Number(id) })
            .first()
        if (!carro) {
            return res.status(404).json({ mensagem: "carro nao encontrado" })
        }
        return res.status(200).json(carro)
    } catch {
        return res.status(500).json({ mensagem: "error interno" })
    }
}
export const criarCarros = async (req: Request, res: Response) => {
    const { marca,
        modelo,
        ano,
        cor,
        valor } = req.body
    try {
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res.status(404).json({ mensagem: "alguma informação faltando" })
        }
        
        const valida = await knex<Omit<Carro, 'id'>>('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor
        }).returning('*')
        if(!valida){
            return res.status(400).json({mensagem: "algo deu errado"})
        }
        return res.status(201)
    } catch {
        return res.status(500).json({ mensagem: "error interno" })
    }
}
export const atualizarCarros = async (req: Request, res: Response) => {
    try {

    } catch {
        return res.status(500).json({ mensagem: "error interno" })
    }
}
export const excluirCarros = async (req: Request, res: Response) => {
    try {

    } catch {
        return res.status(500).json({ mensagem: "error interno" })
    }
}


