import {FastifyRequest, FastifyReply} from "fastify";
import {DeleteCustomerService} from '../services/DeleteCustomerService';


class DeleteCustomerController {
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {id} = request.query as {id:string}
        const custumerService = new DeleteCustomerService();
        const costumer = await custumerService.execute({id});

        reply.send(costumer);
    }
}

export {DeleteCustomerController}