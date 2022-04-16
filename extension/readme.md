## To update GRPC client and models:

``` bash
apt update
apt install -y protobuf-compiler

protoc automaited.proto --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --js_out="import_style=commonjs,binary:./src/grpc" --ts_out="./src/grpc" --proto_path="../proto/"

protoc automaited.proto --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" --js_out="import_style=commonjs,binary:./src/grpc" --ts_out="service=grpc-web:./src/grpc" --proto_path="../proto/"
```