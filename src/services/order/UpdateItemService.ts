import prismaClient from "../../prisma";

interface UpdateOrderRequest{
    id_pedido: string;
}

class UpdateItemService{
    async execute({id_pedido}: UpdateOrderRequest){
        const order = await prismaClient.pedido.update({
            where:{
                id: id_pedido
            },
            data:{
                rascunho : false
            }
        })
        return order;
    }
}
export {UpdateItemService}