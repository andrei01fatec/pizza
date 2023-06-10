
import { Request, Response} from 'express';
import { RemoveItemOrderService } from '../../services/order/RemoveItemOrderService';

class RemoveItemOrderController{

    async handle(req: Request, res: Response){
        const id_item = req.query.id_item as string;
        const removeItemOrderService = new RemoveItemOrderService();
        const orderItem = await removeItemOrderService.execute({id_item});
        return res.json(orderItem);
    }
}

export {RemoveItemOrderController}