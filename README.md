## Project Description
The `signIN` application is a simple front-end application that runs on a mobile device, e.g., an iPad or an Android tablet that communicated with a back-end database.  This application is used as a kiosk device to collect information on visitors for a corporation.


## Visitor's View

The `sign-in` application presents to users a web form asking for some necessary information:

- [x] Name
- [x] Email 
- [x] Telephone
- [x] Company
- [x] Official visit (checkbox)
- [x] Escort required (checkbox)
- [x] Escort name (if Escort is checked)

When a visitor hits `submit` the form is sent to the server and stored in a database. The application is then redirected back to the login screen.

## Installation Instructions
### Get the repository 

Fork the repository, then clone it to your local machine.

git clone https://github.com/ErnestUrzua/signIN.git

### Getting started with VirtualBox

Change to the directory of the `signIN` dir on your VirtualBox Ubuntu virtual machine.

```$ cd signIN```

clone it to your local machine.

https://github.com/ErnestUrzua/signIN.git

### Virtual Box Setup Instructions

These instructions assume an Ubuntu environment. 

**Install dependencies**
in a new terminal window
navigate to ```./signIN/signin```

**run the install script**
```$ npm install``` 

**start up the backend and frontend**
```$ npm run dev```

at this point you are now able to point your browser to localhost:8080 to see the home page

## Build Testing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Non Functional analysis
Based off this analysis sheet, **MEVN** stack is the most user friendly and is suitable for our application. Along with `bootstrap3.1` for the front end styling, this combination was the obvious choice given the short development time.
![developer tools](https://user-images.githubusercontent.com/4582375/30355067-b72ffe36-97e5-11e7-9786-5ada6d989cf6.png)
    
## Architecture Design
Since we are using the MEVN stack for this application.
**MongoDB**  database uses **Express.js** and **Node.js** to provide functionality to the database. 


**Vue.js**
front end framework is provided by Vue. In addition with `bootstrap` we cover all our basic needs. 


This stack is used as an alternative solution to more advanced stacks such as **MEAN** or **MERN**. 

## Plan Of Action
```
[x] Non Functional Analysis
[x] Architecture Design
[x] Frontend Design 
[x] Installation instructions
[x] Test deployment
```

## Additional features

You may implement additional features (not required) for improved grade scale:
```
- [] Admin authentication before accessing the data table
- [] Admin view has a page pagination
- [] Form entry validation
- [] Deploy the client on to a real tablet
- [x] Unit testing
- [] Email firing off to a designated admin address when a visitor has signed in
```