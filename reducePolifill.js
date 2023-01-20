let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]


Array.prototype.reduce2 = function (callback, initialValue) {

    if (callback == null) {
        throw new Error(' cant be null or undefined')
    }

    let i = 0
    let acc

    if (arguments.length >= 2) {
        acc = initialValue
    } else {
        acc = this[0]
        i++
    }


    for (; i <= this.length; i++) {
        if (this[i]) {
            acc = callback(acc, this[i], i, this)
        }
    }
    return acc
}


const result = testArray.reduce2((acc, item,) => {
    return acc + item

}, 200)


console.log('result!', result)

