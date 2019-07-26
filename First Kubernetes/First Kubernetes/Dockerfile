FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["First Kubernetes/First_Kubernetes.csproj", "First Kubernetes/"]

RUN dotnet restore "First Kubernetes/First_Kubernetes.csproj"
COPY . .
WORKDIR "/src/First Kubernetes"
RUN dotnet build "First_Kubernetes.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "First_Kubernetes.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "First_Kubernetes.dll"]