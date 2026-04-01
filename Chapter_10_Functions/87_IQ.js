function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}

// Arguments
console.log(runTest("Login", "pass", 320)); //print the func using console.log-returns var
// "Login: pass (320ms)"