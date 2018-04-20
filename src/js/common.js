
function replace(string, search, replacement) {
    return string.replace(new RegExp(search, 'g'), replacement);
}

function pad(number, length) {
    let str = '';
    let digital = 1;
    for (let index = 0; index < length - 1; index++) {
        digital *= 10;
        if (number < digital) {
            str += '0';
        }
    }
    return str + number;
}

function read(file, callback) {
    let reader = new FileReader();
    reader.onload = function (event) {
        let json = JSON.parse(event.target.result);
        callback(json);
    };
    reader.onerror = function (error) {
        alert('Unable to read this file!');
    }
    reader.readAsText(file);
}

function download(name, data) {
    let json;
    if ('string' == typeof data) {
        json = data;
    } else {
        json = JSON.stringify(data);
    }
    //console.log(json);

    let blob = new Blob([json], { type: 'application/json' });
    let link = document.createElement('a');
    link.download = name;
    link.href = URL.createObjectURL(blob);
    link.style = "display: none";
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
}
