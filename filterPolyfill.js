let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]

Array.prototype.filter2 = function (callback, thisArg) {
    if (this == null) {
        throw new Error('Cant be null or undefined')
    }

    let result = []
    let context = this

    if(arguments.length > 1) {
        context = thisArg
    }


    for (let i = 0; i <= this.length; i++) {
        if (this[i]) {
            if (callback.call(context, this[i], i, this)) {
                result.push(this[i])
            }

        }
    }

    return result

}


const result = testArray.filter2((value, index, array) => {
    return value <= 15

})


console.log('r', result)

