({
    appDir: "../",
    baseUrl: "scripts/",
    dir: "../../app-build",
    mainConfigFile: "main.js",
    
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",
    

    modules: [
        //Optimize the application files. Exclude jQuery since it is
        //included already in require-jquery.js
        {
            name: "main",
            exclude: ["require", "cordova-1.7.0"]
        }
    ]
})
