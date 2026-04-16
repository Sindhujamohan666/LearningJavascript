class TestCase{
    execute(){
        console.log("Running generic Test");
    }
}
class UnitTest extends TestCase {
    execute(){
        console.log("Runniing unit test-checking one func");
    }
}
class APITest extends TestCase {
    execute(){
        console.log("API Test Running-sending HTTP request");
    }
}
class E2E extends TestCase {
    execute(){
        console.log("Running E2E test-Opening browser");
    }
}

let tests=[new UnitTest(),new APITest(),new E2E()];
tests.forEach(function(test){
    test.execute();
});