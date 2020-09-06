export enum HTTPMethod {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
    TRACE = 'TRACE',
}

const defaultHeaders = {
    'Content-Type': 'application/json;charset=utf-8'
};

export async function request(url: URL, method: HTTPMethod, body?: any, headers?: any) {
    var response = await fetch(url.toString(), {
        method,
        headers: headers || defaultHeaders,
        body
    });

    if(response.ok)
        return response.json();
    else
        throw response;
};