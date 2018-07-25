export function toParams(obj) {

 var param = ""
    for (const name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name])
        }
    }
    console.log(param.substring(1))
    return param.substring(1)
}