# webpack-kit

Webpack configuration for Express + Angular 1.x projects.

**Usage**:
Before running the app enter in terminal: ```npm install```.
Then run in terminal ```npm start```.

If you want change build from *production* to *dev*, please change line 7 in 
```package.json``` from ```npm run prod-build``` to ```npm run dev-build```.

Please note that every ```index.js``` file in ```src``` folder contains feature related angular modules. 
And ```app.js``` file is entry point of angular app.

```src``` folder contains front-end part of app. ```server``` folder contains back-end part of app.
