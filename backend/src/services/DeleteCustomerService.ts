import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps){
        if(!id){
            throw new Error("invalid");
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id:id
            }
        });

        if(!findCustomer) {
            throw new Error("invalid id delete");
        }

        await prismaClient.customer.delete({
            where:{
                id:findCustomer.id
            }
        })
        return {message: "deletado com sucesso"}
    }
}

export {DeleteCustomerService}
