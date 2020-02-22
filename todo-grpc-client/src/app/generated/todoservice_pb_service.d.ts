// package: 
// file: todoservice.proto

import * as todoservice_pb from "./todoservice_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TodoCreateTodo = {
  readonly methodName: string;
  readonly service: typeof Todo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todoservice_pb.TodoMessage;
  readonly responseType: typeof todoservice_pb.TodoMessage;
};

type TodoGetTodos = {
  readonly methodName: string;
  readonly service: typeof Todo;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todoservice_pb.TodoId;
  readonly responseType: typeof todoservice_pb.Todos;
};

export class Todo {
  static readonly serviceName: string;
  static readonly CreateTodo: TodoCreateTodo;
  static readonly GetTodos: TodoGetTodos;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TodoClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createTodo(
    requestMessage: todoservice_pb.TodoMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todoservice_pb.TodoMessage|null) => void
  ): UnaryResponse;
  createTodo(
    requestMessage: todoservice_pb.TodoMessage,
    callback: (error: ServiceError|null, responseMessage: todoservice_pb.TodoMessage|null) => void
  ): UnaryResponse;
  getTodos(
    requestMessage: todoservice_pb.TodoId,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todoservice_pb.Todos|null) => void
  ): UnaryResponse;
  getTodos(
    requestMessage: todoservice_pb.TodoId,
    callback: (error: ServiceError|null, responseMessage: todoservice_pb.Todos|null) => void
  ): UnaryResponse;
}

