import prismaClient from "../../prisma";

interface orderRequest{
    id_pedido: string;
}

class RemoveOrderService{
    async execute({id_pedido}: orderRequest){
        const order = await prismaClient.pedido.delete({
            where:{
                id:id_pedido
            }
        })

        return order;
    }
}

export{RemoveOrderService}