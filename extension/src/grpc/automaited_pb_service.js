// package: automaited
// file: automaited.proto

var automaited_pb = require("./automaited_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NotificationsService = (function () {
  function NotificationsService() {}
  NotificationsService.serviceName = "automaited.NotificationsService";
  return NotificationsService;
}());

NotificationsService.NotifyUrlChanged = {
  methodName: "NotifyUrlChanged",
  service: NotificationsService,
  requestStream: false,
  responseStream: false,
  requestType: automaited_pb.UrlChangedRequest,
  responseType: automaited_pb.UrlChangedResponse
};

exports.NotificationsService = NotificationsService;

function NotificationsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NotificationsServiceClient.prototype.notifyUrlChanged = function notifyUrlChanged(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NotificationsService.NotifyUrlChanged, {
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

exports.NotificationsServiceClient = NotificationsServiceClient;

