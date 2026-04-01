let config={};
config.browser="chrome";
config.timeout=3000;
config.timeout=5000; // Modifying the timeout value
console.log(config); // { browser: 'chrome', timeout: 5000 }
delete config.browser; // Deleting the browser property
console.log(config); // { timeout: 5000 }