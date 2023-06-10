import { Request, Response} from 'express';
import { UpdateItemService } from '../../services/order/UpdateItemService';

class UpdateItemController{

    async handle(req: Request, res: Response){
        const id_pedido = req.query.id_pedido as string;
        const updateItemService = new UpdateItemService();
        const order = await updateItemService.execute({id_pedido});
        return res.json(order);
    }
}

export {UpdateItemController}