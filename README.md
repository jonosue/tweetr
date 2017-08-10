# Jonathan Sue's "Tweeter" Project (Lighthouse Labs)

Tweeter is a simple, single-page Twitter clone, created as part of the Lighthouse Labs curriculum. In this project, I did all of the CSS styling, as well as writing functions and event handlers using JavaScript, JQuery, and AJAX in order to asynchronously compose, submit, and retrieve tweets from a MongoDB collection. Finally, I also did some rudimentary image editing in order to style the icons how I wanted them to appear.


## Functional Requirements

- Primarily a client-side Single Page App (SPA)
- The client-side app communicates with a server via AJAX
- Tweets are persisted to MongoDB and survive server restart


## Final Product

!["Screenshot of Main Page, with Form Showing"](https://raw.githubusercontent.com/jonosue/tweetr/master/docs/tweet-compose.png)
!["Screenshot of Main Page, with Form Hidden"](https://raw.githubusercontent.com/jonosue/tweetr/master/docs/tweet-form-hidden.png)
!["Screenshot of Tweet Composer, with Character Limit Exceeded"](https://raw.githubusercontent.com/jonosue/tweetr/master/docs/tweet-counter-red-text.png)
!["Screenshot of Alert for Exceeding Character Limit"](https://raw.githubusercontent.com/jonosue/tweetr/master/docs/tweet-submit-over-limit.png)
!["Screenshot of Tweet List, with New Tweet Added"](https://raw.githubusercontent.com/jonosue/tweetr/master/docs/tweet-result-list.png)


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.


## Dependencies

- body-parser
- chance
- Express
- md5
- MongoDB
- Node 5.10.x or above


## Contact

Questions? Comments? Please tweet me at [@JonoSue](http://twitter.com/JonoSue).