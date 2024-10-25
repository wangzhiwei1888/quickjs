
import fetch from './fetch.js';


fetch('http://192.168.40.116:8081/doc/gui/api.json', {method: 'GET', headers: 'Content-Type: application/json', body: JSON.stringify({ 'id': 7, 'y': 70})})
.then(data => {
    console.log(JSON.stringify(data));

    return data.json();
})
.then(res => {
    console.log(JSON.stringify(res));
})
.catch(err => {
    console.log('err: ' + JSON.stringify(err));
});
