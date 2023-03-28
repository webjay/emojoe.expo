import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
  PutCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';

const docClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: 'eu-central-1' }),
);

async function get(getItemInput) {
  const { Item } = await docClient.send(new GetCommand(getItemInput));
  return Item;
}

async function query(queryInput) {
  const { Items } = await docClient.send(new QueryCommand(queryInput));
  return Items;
}

function put(TableName, Item) {
  return docClient.send(new PutCommand({ TableName, Item }));
}

function remove(TableName, Key) {
  return docClient.send(new DeleteCommand({ TableName, Key }));
}

export { docClient, get, query, put, remove };
