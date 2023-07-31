import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  QueryCommand,
  ScanCommand,
  PutCommand,
  DeleteCommand,
  BatchWriteCommand,
} from '@aws-sdk/lib-dynamodb';

export const docClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: process.env.REGION }),
);

export async function get(getItemInput) {
  const { Item } = await docClient.send(new GetCommand(getItemInput));
  return Item;
}

export async function scan(scanCommandInput) {
  const { Items } = await docClient.send(new ScanCommand(scanCommandInput));
  return Items;
}

export async function query(queryInput) {
  const { Items } = await docClient.send(new QueryCommand(queryInput));
  return Items;
}

export function put(TableName, Item) {
  return docClient.send(new PutCommand({ TableName, Item }));
}

export function batchWrite(TableName, requests) {
  return docClient.send(
    new BatchWriteCommand({ RequestItems: { [TableName]: requests } }),
  );
}

export function remove(TableName, Key) {
  return docClient.send(new DeleteCommand({ TableName, Key }));
}
