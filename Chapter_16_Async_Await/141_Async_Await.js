getToken()
    .then(function (token) {
        return getUser(token);
    })
    .then(function (user) {
        console.log(user);
    });


async function run() { //async is used before a function
    let token = await getToken();
    let user = await getUser();
}