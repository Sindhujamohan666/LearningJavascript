function retry(testname,maxRetries=3,delay=1000){
    console.log(`Retrying ${testname} up to ${maxRetries} times, ${delay}ms apart`);
}

retry("Login");
retry("Checkout", 5);
retry("API Test", 2, 500);