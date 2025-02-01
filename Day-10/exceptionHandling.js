try {

    //console.log(1);
    // throw new myError=('My Error')
    const ans = getQuotient('a', 10);
    if (ans === Infinity) {
        throw new Error('Divided by 0 Error');
    }
    console.log(ans)
}
catch (error) {
    console.log(error.message);
    //  console.log(error.name);
    // console.log(error.stack)

}
finally {
    console.log('from finally')
}
function getQuotient(input1, input2) {
    if (isNaN(input1) || isNaN(input2)) {
        let error = new Error('Not a Valid Number');
        error.name = 'NotValidNumber';
        throw error;
    }
    return input1 / input2;
}