# CORS

#### Demo
Spin up 3 servers by executing these commends in 3 different terminal tabs:
```
node frontend_server.js
node api_server_cors.js	
node api_server_non_cors.js	

```
Then go to http:\\\\localhost:8000

#### What is CORS
Cross-origin resource sharing is a way to get around 
[Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy)

#### Why do we need CORS
For making HTTP request at the front-end.

#### How do we get around CORS
Set HTTP headers ON THE SERVER SIDE.