using Grpc.Core;

namespace Automaited.Grpc;

public class NotificationsService : Automaited.NotificationsService.NotificationsServiceBase
{
    private readonly ILogger<NotificationsService> _logger;

    public NotificationsService(ILogger<NotificationsService> logger)
    {
        _logger = logger;
    }

    public override Task<UrlChangedResponse> NotifyUrlChanged(UrlChangedRequest request, ServerCallContext context)
    {
        _logger.LogInformation(request.NewUrl);
        return Task.FromResult(new UrlChangedResponse { Acknowledged = true });
    }
}