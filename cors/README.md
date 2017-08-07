# CORS

Sometimes when calling a third party API from the front-end javascript, there's nothing, but this in the developer console:

[No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.](https://user-images.githubusercontent.com/12662081/29005408-bfeb1d60-7aa0-11e7-9557-91bc2517846a.png)

##### What is "Access-Control-Allow-Origin"?
The `Access-Control-Allow-Origin` header is part of the Cross-Origin Resource Sharing (CORS) standard.

##### What is CORS?
CORS is is a way to get around Same Origin Policy.

##### What is Same Origin Policy?
[Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy) stops the browser to access data if the data and the web page and the data comes from the different origin. 
![Same Origin Policy diagram](https://user-images.githubusercontent.com/12662081/29013622-d0d47f22-7b09-11e7-8a55-09deb4ea392e.png)

##### Wy do we need Same Origin Policy?
This is to prevent advanced cross-site request forgery (CSRF). 
To prevent basic CSRF, servers issues an one-time key along with forms. With same-origin policy, the on-time key cannot be access by the phising site. 

##### That sounds like a very specific use case...
Yes it is. Most sites do not need this level of security. If you run a CDN, you do NOT want browser to intercept your content. That's where CORS comes to rescue.


#### Demo
Spin up 3 servers by executing these commends in 3 different terminal tabs:
```
node frontend_server.js
node api_server_cors.js	
node api_server_non_cors.js	
```
Then go to http:\\\\localhost:8000

##### Same origin policy
* "GET from localhost:8000" successfully retrieves data, and update the webpage.

* "GET from localhost:8001" failed to update the page with information, and has the "No 'Access-Control-Allow-Origin' header" error. However, checking the terminal, the server does receives the request. 


##### CORS
With the follwing code in the server,  
```javascript
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
```
"GET from localhost:8002" successfully retrieves data, and update the webpage.



### Reference
* [Discussion on same origin policy](https://security.stackexchange.com/questions/8264/why-is-the-same-origin-policy-so-important)
* [Cross-site Request Forgery by Computerphile](https://www.youtube.com/watch?v=vRBihr41JTo)