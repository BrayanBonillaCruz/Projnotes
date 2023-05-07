# Adding a bundler

## Introduction
EIn the following work the installation of **webpack** dependencies is observed, at the end of the installation a series of steps will be seen that will allow configuring webpack for the client development serve. The main objective is to write a report that details the configuration of the **client development serve**. 

## Methods
Started by installing the following **webpack dependencies**:

* Webpack-cli.
* Webpack-cli-server.
* Webpack-dev-middleware.
* Webpack-hot-middleware.

The following command installs the aforementioned **dependencies**:

`npm i -S webpack webpack-cli webpack-dev-server webpack-dev-middleware webpack-hot-middleware`

To verify the installation, go to **package.json** and in the dependencies and devDependencies section you can see the webpack installation.

Once webpack is installed, a file with the name **webpack.config.js** is created, this file will contain the code shown below:

~~~
// Important notes
// 🚨 Configuration file must use ES5 not ES6
// that's why you will see "requires" not "imports"

// Importing an file routing manager
const path = require('path');

// We export a configuration object
// that will be used by webpack
module.exports = {
  // 1. The entry file from which
  // it will contain all the definitions to package
  entry: "./client/index.js",
  // 2. Specify the output file
  // Here it is detailed where the file will be
  // final packaged.
  output: {
    // 2.1 Absolute output path
    // Note that it is being placed in the directory
    // of the project's static files
    path: path.resolve(__dirname, "public"),
    // 2.2 Output file name
    filename: "bundle.js"
  },
  // 3. Configuring the development server
  // The development server serves the packaged files
  // to avoid having to repack on each code change.
  devServer: {
    // 3.1 Static files folder
    static: path.join(__dirname, "public"),
    // 3.2 Development server port
    port: 8080,
    // 3.3 Defining the host
    host: "localhost"
  }
}
~~~

A **script** with the name **dev-c** is created, this script will have the code shown below:.

~~~
  "scripts": {
    "start": "PORT=3000 APP_URL='http://localhost' DEBUG=projnotes node ./dist/bin/www",
    "dev": "NODE_ENV=development PORT=3000 APP_URL='http://localhost' DEBUG=projnotes babel-watch --watch ./server/views ./server/bin/www",
    "devc" : "NODE_ENV=development webpack serve --config ./webpack.config.js --mode development",
    "build": "npm run clean && babel ./server --out-dir dist --copy-files",
    "clean": "rm -rf dist"
  }
~~~

To test the webpack configuration, a folder called **client** is created, inside this a file called **index.js** is created, this file will contain the code shown below:

`console.log("🎉 Client Server working powered by Webpack 🎉")`

Next, inside the public folder, a file called **index.html** is created, this file will contain the code shown below: 

~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Webpack Dev Server</title>
</head>
<body>
  <div class="">
    <h1>🎉 Client Server working powered by Webpack 🎉</h1>
  </div>
  <script src="./bundle.js"></script>
</body>
</html>
~~~

To run the job, the following **code** must be executed in the terminal:

`npm run devc`

## Results
When executing the code, the correct installation of webpack is checked, in addition to confirming the functionality of the code entered in the Indexes and the script entered in the **package.json**, the following image shows the execution:

![Figure 1](/public/img/ABB.png)

## Discussions
During the development of the report, **update** the webpack dependencies, since in previous classes different versions were installed than those needed for the **webpack configuration**, when updating these dependencies, the configuration shown in the development of this report was started.