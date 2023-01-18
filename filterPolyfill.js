let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]

Array.prototype.filter2 = function (callback) {
    if (this == null) {
        throw new Error('Cant be null or undefined')
    }

    const arr = this
    let result = []


    for (let i = 0; i <= arr.length; i++) {
        if (arr[i]) {
            if (callback(arr[i], i, arr)) {
                result.push(arr[i])
            }

        }
    }

    return result

}


const result = testArray.filter2((value, index, array) => {
    return value <= 15

})


console.log('r', result)

