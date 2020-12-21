function stringDedupe(str) {
    let newStr = '';
    dict = {};
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[str[i]]) {
            dict[str[i]]++;
            continue;
        } else if ((dict[str[i]] = 1)) {
            console.log(dict);
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}
