function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let patternURI = /^[\w.]+$/g;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialCharsPattern = /^[^<>&'"\\]*$/g;

    if (!validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || (obj.uri !== '*' && !obj.uri.match(patternURI))) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!obj.hasOwnProperty('message') || !obj.message.match(specialCharsPattern)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return obj;

}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
})
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
});