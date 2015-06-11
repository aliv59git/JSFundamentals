/*•	Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
•	Return the elements in a JSON object.*/

function parseUrl() {
    var result, inputUrl, protocolIndex, protocol, serverIndex, server, resource;
    inputUrl = document.getElementById('input-text').value;
    protocolIndex = inputUrl.indexOf(':');
    protocol = inputUrl.substring(0, protocolIndex);
    serverIndex = inputUrl.indexOf('/', protocolIndex + 3);
    server = inputUrl.substring(protocolIndex + 3, serverIndex);
    resource = inputUrl.substring(serverIndex);
    result = {
        'protocol': protocol,
        'server': server,
        'resource': resource
    };
    console.log(result);
    return result;

}