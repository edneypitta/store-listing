# store-listing

React app to list stores returned by an api grouped by categories. 
Opened stores are shown first and it's possible to filter by tags by clicking on them.

## Notes

* This project uses React and was bootstrapped with Create React App
* A Node.js app was built for Server Side Rendering
* Code-splitting was also setup using `react-loadable`
* Enzyme was used along with Jest for testing

## Running the app locally

* First go to `/server` and run `npm install && npm run server`
* Now go to `/client` and run `npm install && npm run server`. 
This will build the client code (using Create React App) and run the Node.js server that actually serves the content. 
The app will be available at `http://localhost:3002/`
* To run tests, please run `npm test` at `/client`
