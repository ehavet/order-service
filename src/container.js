import { getOrdersUsecaseFactory } from './orders/domain/get-orders.usecase.js'
import { getOrderUsecaseFactory } from './orders/domain/get-order.usecase.js'
import { createOrderUsecaseFactory } from './orders/domain/create-order.usecase.js'
import { deleteOrderUsecaseFactory } from './orders/domain/delete-order.usecase.js'
import {validateOrderUsecaseFactory} from './orders/domain/validate-order.usecase.js'
import {OrderRepository} from './orders/infrastructure/order.repository.js'
import broker from './kafka.js'
import axios from 'axios'

const messageProducer = broker.producer

// messageProducer.send({
//     topic: 'order',
//     messages: [
//         {key: 'eventName??', value: `{"orderId": "${orderId}", "clientId": "${clientId}", "itemId": "${itemId}", "quantity": "${quantity}"}`}
//     ]
// })

const httpClient = axios

// send a POST request
// axios({
//     method: 'post',
//     url: '/login',
//     data: {
//         firstName: 'Finn',
//         lastName: 'Williams'
//     }
// });

// send a GET request
// axios.get('/user?ID=12345')

const orderRepository = new OrderRepository()
const getOrders = getOrdersUsecaseFactory(orderRepository)
const getOrder = getOrderUsecaseFactory(orderRepository)
const createOrder = createOrderUsecaseFactory(orderRepository)
const validateOrder = validateOrderUsecaseFactory(orderRepository)
const deleteOrder = deleteOrderUsecaseFactory(orderRepository)

export default {
    GetOrders: getOrders,
    GetOrder: getOrder,
    CreateOrder: createOrder,
    ValidateOrder: validateOrder,
    DeleteOrder: deleteOrder
}
