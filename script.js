function invertString() {
    const str = document.getElementById('inputString').value;
    let invertedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }

    document.getElementById('result').textContent = invertedStr;
}
