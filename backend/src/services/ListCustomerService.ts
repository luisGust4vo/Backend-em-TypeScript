import prismaClient from "../prisma";

class ListCustomerService { // metodo listar
    async  execute(){
        const customers = await prismaClient.customer.findMany()
        return customers
    }
}

export {ListCustomerService};