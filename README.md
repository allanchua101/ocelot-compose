# Ocelot

![High Level Diagram](https://github.com/allanchua101/api-gateway-comparables/blob/master/000_docs/diagrams/Ocelot.png)

This section showcases basic usage of Ocelot as API Gateway.

### Why Ocelot

Ocelot is a pluggable API gateway that you can install on top of ASP.net core projects. DIY gateways generally offer the following benefits:

- Open-source and free of charge
- Good for existing on-premise deployments without modifications to ecosystem
- Can easily be propagated to cloud environments (Low migration cost)

### Pre-requisites

- Docker
- Docker Compose
- Postman (Optional for testing)

### Running Demo

Run the following shell command to boot up this demo

```sh
# Windows Users and Root Linux Users
docker-compose up -d

# Non-root Linux Users
sudo docker-compose up -d
```

### Importing Postman Payload

You can utilize the postman payload found on the root of this folder to test both downstream and gateway endpoints.

### Testing Dowstream APIs using CURL

To retrieve from downstream endpoints:

```sh
# Dowstream Product List
curl -i GET http://localhost:52790/api/products/list

# Dowstream User List
curl -i GET http://localhost:52791/api/users/list

# Dowstream Transaction List
curl -i GET http://localhost:52792/api/transactions/list
```

### Testing Gateway APIs using CURL

To retrieve from gateway endpoints:

```sh
# Gateway Product List
curl -i GET http://localhost:52793/api/products

# Gateway User List
curl -i GET http://localhost:52793/api/users

# Gateway Transaction List
curl -i GET http://localhost:52793/api/transactions
```
