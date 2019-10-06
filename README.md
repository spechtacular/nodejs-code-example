1. Conversion equations
    * Formula Conversion Constants
        * 9/5 = 1.8    
        * 9/4 = 2.25    
        * 10/8 = 1.25
    * Conversion algorithms
        * Fahrenheit to
            * Celsius	 C = ( F - 32) / 1.8
            * kelvin	K = ( F + 459.67) / 1.8
            * Rankine	 Ra =  F + 459.67
        * Celsius to
            * Fahrenheit	 F =  C × 1.8 + 32
            * kelvin	K = C  + 273.15
            * Rankine	 Ra =  C × 1.8 + 32 + 459.67
        * kelvin to
            * Celsius	 C = K - 273.15
            * Fahrenheit	 F = K × 1.8 - 459.67
            * Rankine	 Ra = K × 1.8
        * Rankine to
            * Celsius	 C = ( Ra - 32 - 459.67) / 1.8
            * Fahrenheit	 F =  Ra - 459.67
            * kelvin	K =  Ra / 1.8

2. Development Environment
    * IntelliJ IDE
       * node.js:
           * install npm packages, they are specified in the package.json file.
              * npm install
           * npm scripts defined in package.json:
              * npm start : start web service on localhost:3000
              * npm run cli_test : run a command line version for testing and development
              * npm run load_users : load application users from AD
              * npm run load_stray_users : load specified users not loaded by load_users
              * npm run delete_users : delete all users from development database only
        
