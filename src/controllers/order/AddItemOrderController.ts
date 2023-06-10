import { Request, Response } from "express";
import { AddItemOrderService } from "../../services/order/AddItemOrderService";

class AddItemOrderController{
    async handle(req: Request, res: Response){
        const {quantidade, id_pedido, id_produto} = req.body;
        const addItem = new AddItemOrderService();
        const order = await addItem.execute({
            quantidade,
            id_pedido,
            id_produto
        })

        return res.json(order);
    }
}

export{AddItemOrderController}