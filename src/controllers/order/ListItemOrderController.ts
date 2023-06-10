import {Request, Response} from "express";
import { ListItemOrderService } from "../../services/order/ListItemOrderService";

class ListItemOrderController{
    async handle(req: Request, res: Response){

        const listItemOrderService = new ListItemOrderService();
        const order = await listItemOrderService.execute();
        return res.json(order);
    }
}

export{ListItemOrderController}