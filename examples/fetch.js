import { popen } from 'std';
export default function fetch(resource, init) {

    init = init || {
        method: 'GET',
        headers: null,
        body: null,
    };

    let spErr = {}
    let curlCmd = `curl -s -X${init.method} ${resource}`

    if (init.headers) {
        curlCmd += ` -H ${init.headers}`
    }

    if (init.body) {
        curlCmd += ` -d ${init.body}`
    }

    console.log(curlCmd);
    let sp = popen(curlCmd, 'r', spErr);
    let curlOutput = sp.readAsString();
    let responseUrl = resource;
    let responseHeaders = {};
    let responseOk = true;
    let responseStatus = 200;
    let curlJson = JSON.parse(curlOutput);




    let p = new Promise(function(resolve, reject) {
        console.log('initial');
        // resolve({a: 10, b: 20});
        // reject({msg: 'error'})

        
        // resolve({a: 10, b: 20});
        // console.log(sp.readAsString());

        let response = {
            headers: responseHeaders,
            ok: responseOk,
            url: responseUrl,
            json: () => curlJson,
            text: () => curlOutput,
        }
        

        resolve(response);
    });

    return p;
}