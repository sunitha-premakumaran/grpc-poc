## Download and install proto compiler

```
curl -sSL https://github.com/protocolbuffers/protobuf/releases/download/v3.8.0/protoc-3.8.0-linux-x86_64.zip -o protoc.zip &&   unzip 
-qq protoc.zip &&  sudo cp ./bin/protoc /usr/local/bin/protoc

```

## Download grpc-web generator

```

curl -sSL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64 -o /usr/local/bin/protoc-gen
-grpc-web &&   chmod +x /usr/local/bin/protoc-gen-grpc-web


sudo mv ~/Downloads/${grpc_web_release} \
  /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web

```

## Generate gRPC service stub and message interfaces

```
cd todo-grpc-client

protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:src/app/generated" \
    --ts_out="service=grpc-web:src/app/generated" \
    --proto_path="../protos"  todoservice.proto

```

## Setup


```
docker-compose up
```
