function clipping(num) {

    let newArr = [];

    let strNum = num.toString().split('');
    let val = '';

    for (let i = 0; i < strNum.length; i++) {
        val = val + strNum[i];
        newArr.push(val);
    }

    return newArr;
}