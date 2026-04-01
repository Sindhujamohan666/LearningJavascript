let config1={browser:"chrome",timeout:3000};
// ✅ Modifying properties — ALLOWED
config1.browser="firefox"; // Modifying an existing property
config1.timeout=5000; // Modifying an existing property
config1.retries=2; // Adding a new property 
console.log(config1); // { browser: 'firefox', timeout: 5000, retries: 2 }

config1={browser:"safari"}; // 
console.log(config1); //Reassigning let variable is allowed.

// print
console.log("---- ")
const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

config = { browser: "Safari" };// ❌ Reassigning the entire object — NOT ALLOWED
console.log(config);// This will throw an error because we cannot reassign a const variable