# Table of content

- [Introduction](#introduction)
- [Using the module](#using-the-module-in-your-project)
- [Installation](#installation)
- [Usage](#usage)
- [Compiling](#compiling)
- [Publishing](#publishing)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Client module for the Revochat project, this module is made with NodeJS and Typescript.
With this module you can connect to the API and use the different endpoints using websockets.

## Using the module in your project
To use the module in your project, you need to install it using npm, you can do that by typing ```npm install @revochat/revochat-client``` in your terminal.
<br><br>
Then you can import the module in your project using ```import { RevochatClient } from '@revochat/revochat-client'```

To use the module you need to create a new instance of the RevochatClient class, you can do that by typing ```const client = new RevochatClient()```

Please refer to the [examples](/Client-Module/examples) folder to see how to use the module in your project.

## Installation
Make sure you have installed **typescript** on your system and **npm**, then head over to the root of the project and type ```npm install```
<br><br>
If you have any problems with the installation, you can open an issue in this repository.

## Usage
Run ```nodemon examples/exampleScript.ts``` to try a functional example of the module !

## Compiling
Run ```tsc --outDir ./dist``` to compile the project, the compiled files will be in the dist folder.

## Publishing

First head over to the [dist](/Client-Module/dist/) folder

Then type ```npm login``` in your terminal and login to your npm account. (You need to have access to the @revochat npm account)

Check the version on npm or in the package.json file, to publish a new version you first need to set the new version by typing ```npm version <version>``` in your terminal.

Then you can publish the new version by typing ```npm publish``` in your terminal.

## Contributing
If you want to contribute to this project you can fork this repository and make a pull request with your changes.
Anyone is welcome to contribute to this project.

## License
This project is under the MIT license.
