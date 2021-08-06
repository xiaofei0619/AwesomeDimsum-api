const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

const COMMENT_PAGE_SIZE = 5;

async function listDish(_, { search }) {
  const db = getDb();
  const filter = {};
  if (search) filter.$text = { $search: search };
  const cursor = await db.collection('dishes').find(filter)
    .sort({ id: 1 });
  const dishes = cursor.toArray();
  return dishes;
}

async function getDish(_, { dishId }) {
  const db = getDb();
  const dish = await db.collection('dishes').findOne({ dishId });
  return dish;
}

async function listStock() {
  const db = getDb();
  const filter = {};
  const cursor = await db.collection('stocks').find(filter)
    .sort({ dishId: 1 });
  const stocks = cursor.toArray();
  return stocks;
}

async function getStock(_, { dishId }) {
  const db = getDb();
  const stock = await db.collection('stocks').findOne({ dishId });
  return stock.stock;
}

function validateStock(stock) {
  const errors = [];
  if (stock < 0) {
    errors.push('Stock for the dish can not be negative.');
  }
  if (!Number.isInteger(stock)) {
    errors.push('Stock number must be integer value.');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid stock input(s)', { errors });
  }
}

async function updateStock(_, { dishId, stock }) {
  const db = getDb();
  validateStock(stock);
  await db.collection('stocks').updateOne({ dishId }, { $set: { stock } });
  const savedStock = await db.collection('stocks').findOne({ dishId });
  return savedStock;
}

async function listComment(_, { dishId, page }) {
  const db = getDb();
  const filter = {};
  filter.dishId = dishId;

  const cursor = await db.collection('comments').find(filter)
    .sort({ id: 1 })
    .skip(COMMENT_PAGE_SIZE * (page - 1))
    .limit(COMMENT_PAGE_SIZE);

  const totalCount = await cursor.count(false);
  const comments = cursor.toArray();
  const pages = Math.ceil(totalCount / COMMENT_PAGE_SIZE);
  return { comments, pages };
}

function validateComment(commentInput) {
  const errors = [];
  if (commentInput.comment.length < 5) {
    errors.push('Field "comment" must be at least 5 characters long.');
  }
  if (commentInput.author.length < 3) {
    errors.push('Field "author" must be at least 3 characters long.');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid comment input(s)', { errors });
  }
}

async function addComment(_, { comment }) {
  const db = getDb();
  validateComment(comment);
  const newComment = Object.assign({}, comment);
  newComment.date = new Date();
  newComment.id = await getNextSequence('comments');

  const result = await db.collection('comments').insertOne(newComment);
  const savedComment = await db.collection('comments')
    .findOne({ _id: result.insertedId });
  return savedComment;
}

module.exports = {
  listDish, getDish, listStock, getStock, updateStock, listComment, addComment,
};
