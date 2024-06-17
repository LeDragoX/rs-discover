# Usando JSON Server

```sh
npm install -g json-server
```

## Inicializando

```sh
cd ./src/2023/5-http/
json-server --watch db.json
```

## Retorno

GET em **/posts**

```sh
$ curl http://localhost:3000/posts
[
  {
    "id": "1",
    "title": "json-server",
    "author": "typicode"
  }
]
```

Headers em **/posts**

```sh
$ curl -i http://localhost:3000/posts
HTTP/1.1 200 OK
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Type: application/json
Date: Fri, 14 Jun 2024 18:05:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 79

[
  {
    "id": "1",
    "title": "json-server",
    "author": "typicode"
  }
]
```

### OPTIONS

```sh
$ curl -X OPTIONS -i http://localhost:3000/posts
HTTP/1.1 204 No Content
X-Powered-By: tinyhttp
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD, PUT, PATCH, POST, DELETE
Access-Control-Allow-Headers: content-type
Content-Length: 0
Date: Mon, 17 Jun 2024 13:59:06 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### POST

```sh
$ curl -d '{ "id": "3", "title": "a title", "views": 1000}' -H "Content-type: application/json" -X POST http://localhost:3000/posts
{
  "id": "3",
  "title": "a title",
  "views": 1000
}
```

### PUT

```sh
$ curl -d '{ "name": "ledragox" }' -H "Content-type: application/json" -X PUT http://localhost:3000/profile
{
  "name": "ledragox"
}
```

### PATCH

```sh
$ curl -d '{ "title":"my-title" }' -H 'Content-type: application/json' -X PATCH http://localhost:3000/posts/1
{
  "id": "1",
  "title": "my-title",
  "views": 100
}
```

### DELETE

```sh
$ curl -X DELETE http://localhost:3000/posts/2
{
  "id": "2",
  "title": "another title",
  "views": 200
}
```

## Créditos

Typicode: <https://github.com/typicode/json-server>
