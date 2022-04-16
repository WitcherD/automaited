#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Automaited.Grpc/Automaited.Grpc.csproj", "Automaited.Grpc/"]
RUN dotnet restore "Automaited.Grpc/Automaited.Grpc.csproj"
COPY . .
WORKDIR "/src/Automaited.Grpc"
RUN dotnet build "Automaited.Grpc.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Automaited.Grpc.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Automaited.Grpc.dll"]