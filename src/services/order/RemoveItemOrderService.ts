import prismaClient from "../../prisma";

interface RemoveItemRequest{
    id_item: string;
}
class RemoveItemOrderService{
    async execute({id_item}: RemoveItemRequest){
        if(!id_item){
            throw new Error("Erro ao encontrar o item a ser removido!")
        }
        const orderItem = await prismaClient.item.delete({
            where:{id: id_item}
        })

        return orderItem;
    }
    

}

export {RemoveItemOrderService}