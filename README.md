# Timestamp Microservice

Pass a string as a url parameter, and it will check to see whether it contains either a unix timestamp or a natural language date (e.g: December 15, 2015). If it does, it returns both the unix timestamp and the natural language form of that date. If note, it returns null for those properties. 

### Example Usage ###
`https://mighty-cliffs-78730.herokuapp.com/1450137600`

`https://mighty-cliffs-78730.herokuapp.com/December%2015,%202015`

### Example Output ###
`{ "unix": 1450137600, "natural": "December 15, 2015" }`

### Running the project locally ###
`npm run start` or `node app.js`
