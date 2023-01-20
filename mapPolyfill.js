let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]


Array.prototype.map2 = function (callback, thisArg) {
    if (this == null) {
        throw  new Error('cant be null or undefined')
    }

    let context = this
    let result = []
    for (let i = 0; i <= this.length; i++) {

        if (i in this) {
            result.push(callback.call(context, this[i], i, this))
        }
    }

    return result
}

let result = testArray.map2((item, index, array) => {

    return item + 10
})


console.log('result', result)