# NodeJS-CRUD
Getting started with NodeJS CRUD on MongoDB 

## To build docker image
```docker
docker build -t <your username>/node-crud .
```

## To run built docker image
```
docker run -p 49160:8080 -d <your username>/node-web-app
curl -i localhost:49160
```