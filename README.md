        
1. ## Coding Challenge ##
   The purpose of this challenge is to see what agile engineering looks like to you. We want clean,
   maintainable, production-quality code. ​ Because we are focused on multiple dimensions of your
   code, the functional requirements are narrow and focused.
   Please use the JS framework of your choice (e.g., React) and Node to solve this challenge.
   After we receive your code, we may schedule a discussion with you to talk about what you did, and why.

    * ## The Problem: ##

      Our users are science teachers who are comfortable using a browser. In their “Unit Conversion”
      science unit, they want to assign students unit-conversion problems on paper worksheets. After
      students turn in their completed worksheet, the teachers want to be able to enter the questions and
      student responses into a computer to be graded. Students will convert:
        * temperatures ​ between ​ Kelvin, Celsius ​,​ Fahrenheit ​, and​ Rankine
        * volumes ​ between ​ liters ​, ​ tablespoons ​, ​ cubic-inches, cups ​,​ cubic-feet, ​and​ gallons

    * ## Requirements: ##

      The requirements below are not intended to suggest a particular user interface, just what data the user
      must provide as input and what data the system must provide as output.

       * The teacher must be able to provide an input numerical value, an input unit of measure, a target
          unit of measure, and a student’s numeric response.
        * The system indicates that the response is  **correct** ,  **incorrect** , or  **invalid** . To be
          considered correct , the student’s response must match an authoritative answer after both the
          student’s response and authoritative answer are rounded to the tenths place.
          
    * ## Example scenarios (not exhaustive): ##
    
| Input Numerical Value | Input Unit of Measure | Target Unit of Measure | Student Response | Output |
| 84.2 | Fahrenheit | Rankine | 543.94 | correct|
| 317.33 | Kelvin | Fahrenheit | 111.554 | incorrect|
| 25.6 | cups |liters | 6.1 | correct|
| 73.12 | gallons | Kelvin | 19.4 | invalid|
| 6.5 | Fahrenheit | Rankine | dog | incorrect|
| 136.1 | dog | Celsius | 45.32 | invalid|
      
 2. ## Development Environment ##
    * Mac OSX
    * IntelliJ IDE
       * ECMAScript 6
   * node.js: v11.12.0
       * package.json file contains a manifest of dependencies,
          scripts, and other info required to manage the application.
       * npm 6.7.0
          * install npm packages, they are specified in the package.json file.
             * npm install
          * npm scripts defined in package.json:
             * npm start : starts web service on localhost:3000  
             * npm run test : run unit tests on code base
             * npm start : start web service on localhost:3000
   * postman: 7.8.0
     * used for integration testing






        
