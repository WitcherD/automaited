// package: automaited
// file: automaited.proto

import * as automaited_pb from "./automaited_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NotificationsServiceNotifyUrlChanged = {
  readonly methodName: string;
  readonly service: typeof NotificationsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof automaited_pb.UrlChangedRequest;
  readonly responseType: typeof automaited_pb.UrlChangedResponse;
};

export class NotificationsService {
  static readonly serviceName: string;
  static readonly NotifyUrlChanged: NotificationsServiceNotifyUrlChanged;
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

export class NotificationsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  notifyUrlChanged(
    requestMessage: automaited_pb.UrlChangedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: automaited_pb.UrlChangedResponse|null) => void
  ): UnaryResponse;
  notifyUrlChanged(
    requestMessage: automaited_pb.UrlChangedRequest,
    callback: (error: ServiceError|null, responseMessage: automaited_pb.UrlChangedResponse|null) => void
  ): UnaryResponse;
}

