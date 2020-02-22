// package: 
// file: todoservice.proto

import * as jspb from "google-protobuf";

export class TodoMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTodomessage(): string;
  setTodomessage(value: string): void;

  getIscompleted(): boolean;
  setIscompleted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: TodoMessage): TodoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TodoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoMessage;
  static deserializeBinaryFromReader(message: TodoMessage, reader: jspb.BinaryReader): TodoMessage;
}

export namespace TodoMessage {
  export type AsObject = {
    id: number,
    todomessage: string,
    iscompleted: boolean,
  }
}

export class Todos extends jspb.Message {
  clearTodosList(): void;
  getTodosList(): Array<TodoMessage>;
  setTodosList(value: Array<TodoMessage>): void;
  addTodos(value?: TodoMessage, index?: number): TodoMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todos.AsObject;
  static toObject(includeInstance: boolean, msg: Todos): Todos.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Todos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todos;
  static deserializeBinaryFromReader(message: Todos, reader: jspb.BinaryReader): Todos;
}

export namespace Todos {
  export type AsObject = {
    todosList: Array<TodoMessage.AsObject>,
  }
}

export class TodoId extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoId.AsObject;
  static toObject(includeInstance: boolean, msg: TodoId): TodoId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TodoId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoId;
  static deserializeBinaryFromReader(message: TodoId, reader: jspb.BinaryReader): TodoId;
}

export namespace TodoId {
  export type AsObject = {
    id: number,
  }
}

