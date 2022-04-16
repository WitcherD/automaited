using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((_, configuration) => configuration.WriteTo.Console());

builder.Services.AddHealthChecks();
builder.Services.AddGrpc();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", corsPolicyBuilder =>
{
    corsPolicyBuilder
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));

var app = builder.Build();
app.MapHealthChecks("/healthz");
app.UseRouting();
app.UseGrpcWeb();
app.UseCors();
app.UseEndpoints(endpoints =>
{
    endpoints
        .MapGrpcService<Automaited.Grpc.NotificationsService>()
        .EnableGrpcWeb()
        .RequireCors("AllowAll");
});

app.Run();