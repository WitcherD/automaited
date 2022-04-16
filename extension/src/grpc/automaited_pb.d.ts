// package: automaited
// file: automaited.proto

import * as jspb from "google-protobuf";

export class UrlChangedRequest extends jspb.Message {
  getNewurl(): string;
  setNewurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlChangedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UrlChangedRequest): UrlChangedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlChangedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlChangedRequest;
  static deserializeBinaryFromReader(message: UrlChangedRequest, reader: jspb.BinaryReader): UrlChangedRequest;
}

export namespace UrlChangedRequest {
  export type AsObject = {
    newurl: string,
  }
}

export class UrlChangedResponse extends jspb.Message {
  getAcknowledged(): boolean;
  setAcknowledged(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlChangedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UrlChangedResponse): UrlChangedResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlChangedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlChangedResponse;
  static deserializeBinaryFromReader(message: UrlChangedResponse, reader: jspb.BinaryReader): UrlChangedResponse;
}

export namespace UrlChangedResponse {
  export type AsObject = {
    acknowledged: boolean,
  }
}

