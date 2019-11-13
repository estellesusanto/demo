# Using the HTTP client to serve your front-end
If you have a minimal use case, using the lightweight NodeJS HTTP module might be the right move for you.

Documentation: https://nodejs.org/api/http.html

Express is faster and nice to develop with, but frankly, its slow and heavy. [Here's an article that can help explain](https://medium.com/sharenowtech/there-are-expressjs-alternatives-590d14c58c1c). Using the HTTP module may also save you money if you're deploying to the cloud.


## How to Run
* `npm install` in the "http" root folder
* `npm start` in the "http" root folder
    * [see npm start default configurations](https://docs.npmjs.com/cli/start.html)
* default configuration for http-server looks for the `/public` folder if there's no `server.js` file
    * http://localhost:8080/
    * http://localhost:8080/css/style.css
    * http://localhost:8080/img/kitten.jpg