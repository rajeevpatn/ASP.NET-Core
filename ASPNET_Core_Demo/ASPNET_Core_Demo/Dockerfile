FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["ASPNET_Core_Demo/ASPNET_Core_Demo.csproj", "ASPNET_Core_Demo/"]
RUN dotnet restore "ASPNET_Core_Demo/ASPNET_Core_Demo.csproj"
COPY . .
WORKDIR "/src/ASPNET_Core_Demo"
RUN dotnet build "ASPNET_Core_Demo.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ASPNET_Core_Demo.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ASPNET_Core_Demo.dll"]