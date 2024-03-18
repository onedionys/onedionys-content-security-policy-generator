<h1 align="center">Welcome to One Dionys - Content Security Policy Generator! 👋 </h1>

<p align="center">A utility for generating and deploying content security policies in web applications, improving application security. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-content-security-policy-generator?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-content-security-policy-generator?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-content-security-policy-generator?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-content-security-policy-generator?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-content-security-policy-generator.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-content-security-policy-generator?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-content-security-policy-generator?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const generateCSP = require('content-security-policy-generator');

const options = {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'example.com'],
    // Add more directives as needed
};

const cspHeader = generateCSP(options);
console.log(cspHeader);
```

#### Explanation

* The generateCSP function takes an options object containing various directives for configuring the CSP. Each directive corresponds to a different aspect of web content security, such as allowed sources for scripts, styles, images, etc. The function then constructs a CSP header string based on these options and returns it.

#### Return Value

* The function returns a string representing the Content Security Policy header that should be included in HTTP responses to instruct browsers on how to handle various types of content.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Content Security Policy Generator is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Content Security Policy Generator? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
