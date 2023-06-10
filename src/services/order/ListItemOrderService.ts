import prismaClient from "../../prisma";

interface ListOrderRequest{
    id_pedido: string;
}

class ListItemOrderService{
    async execute(){
        const pedido = await prismaClient.pedido.findMany({
            orderBy:{
                criado_em: 'asc'
            }
        })
        return pedido;
    }
}
export {ListItemOrderService}