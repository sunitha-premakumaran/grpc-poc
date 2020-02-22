import * as  grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { callbackify } from 'util';

const PROTO_PATH = './protos/todoservice.proto';

let todos = [];

const packageDefinitions = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    enums: String,
    bytes: Array
});

const todo_proto = grpc.loadPackageDefinition(packageDefinitions);

function pushTodo(data: { id: number, todoMessage: string, isCompleted: boolean }) {
    todos.push(data);
    console.log("Data recieved", data);
    return data;
}

function CreateTodo(call:grpc.ServerUnaryCall<{ id: number, todoMessage: string, isCompleted: boolean }>, callback) {
    callback(null, pushTodo(call.request));
}

function extractTodo(data: { id: number }) {
    return [{ todos: todos }];
}

function GetTodos(call, callback){
    callback(null, extractTodo(call.request));
}

var server = new grpc.Server();
server.addService((todo_proto as any).Todo.service, { CreateTodo: CreateTodo, GetTodos: GetTodos });
server.bind('0.0.0.0:9000', grpc.ServerCredentials.createInsecure());
server.start();
