const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

const ORDER_PAGE_SIZE = 10;

async function listOrder(_, {
  status, pickupStart, pickupEnd, search, page,
}) {
  const db = getDb();
  const filter = {};
  if (status) filter.status = status;

  if (pickupStart !== undefined || pickupEnd !== undefined) {
    filter.pickup = {};
    if (pickupStart !== undefined) {
      filter.pickup.$gte = pickupStart;
    }
    if (pickupEnd !== undefined) filter.pickup.$lte = pickupEnd;
  }

  if (search) filter.$text = { $search: search };

  const cursor = await db.collection('orders').find(filter)
    .sort({ id: 1 })
    .skip(ORDER_PAGE_SIZE * (page - 1))
    .limit(ORDER_PAGE_SIZE);

  const totalCount = await cursor.count(false);
  const orders = cursor.toArray();
  const pages = Math.ceil(totalCount / ORDER_PAGE_SIZE);
  return { orders, pages };
}

async function getOrder(_, { id }) {
  const db = getDb();
  const order = await db.collection('orders').findOne({ id });
  return order;
}

function validatePhone(phone) {
  const errors = [];
  const phoneno = /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/;
  if (phone.match(phoneno) === null) {
    errors.push('Phone number must in format: (xxx) xxx-xxxx');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid phone format', { errors });
  }
}

async function listOrderStatus(_, { name, phone }) {
  const db = getDb();
  validatePhone(phone);
  const filter = {};
  filter.name = name;
  filter.phone = phone;

  const cursor = await db.collection('orders').find(filter)
    .sort({ pickup: -1 });

  const orders = await cursor.toArray();
  if (orders.length === 0) {
    throw new UserInputError('Invalid name or phone. No match found');
  }
  return orders;
}

async function getOrderStatus(_, { name, orderId }) {
  const db = getDb();
  const order = await db.collection('orders').findOne({ orderId });
  if (!order) {
    throw new UserInputError('Invalid name or orderId');
  }
  if (order && order.name !== name) {
    throw new UserInputError('Invalid name for this order');
  }
  return order;
}

function validateOrder(order) {
  const errors = [];
  const phoneno = /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/;
  if (order.phone.match(phoneno) === null) {
    errors.push('Phone number must in format: (xxx) xxx-xxxx');
  }
  if (order.name.length < 3) {
    errors.push('Field "name" must be at least 3 characters long.');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid order input(s)', { errors });
  }
}

async function addOrder(_, { order }) {
  const db = getDb();
  validateOrder(order);
  const newOrder = Object.assign({}, order);
  newOrder.id = await getNextSequence('orders');
  newOrder.status = 'New';
  newOrder.created = new Date();

  const result = await db.collection('orders').insertOne(newOrder);
  const savedOrder = await db.collection('orders')
    .findOne({ _id: result.insertedId });
  return savedOrder;
}

async function updateOrder(_, { orderId, status }) {
  const db = getDb();
  await db.collection('orders').updateOne({ orderId }, { $set: { status } });
  const savedOrder = await db.collection('orders').findOne({ orderId });
  return savedOrder;
}

module.exports = {
  listOrder, getOrder, listOrderStatus, getOrderStatus, addOrder, updateOrder,
};
