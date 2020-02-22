// package: 
// file: todoservice.proto

var todoservice_pb = require("./todoservice_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Todo = (function () {
  function Todo() {}
  Todo.serviceName = "Todo";
  return Todo;
}());

Todo.CreateTodo = {
  methodName: "CreateTodo",
  service: Todo,
  requestStream: false,
  responseStream: false,
  requestType: todoservice_pb.TodoMessage,
  responseType: todoservice_pb.TodoMessage
};

Todo.GetTodos = {
  methodName: "GetTodos",
  service: Todo,
  requestStream: false,
  responseStream: false,
  requestType: todoservice_pb.TodoId,
  responseType: todoservice_pb.Todos
};

exports.Todo = Todo;

function TodoClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TodoClient.prototype.createTodo = function createTodo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Todo.CreateTodo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TodoClient.prototype.getTodos = function getTodos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Todo.GetTodos, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TodoClient = TodoClient;

