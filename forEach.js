let testArray = [1, 2, 3, 4, 5, 6, 99, , , 31, 33, 12, , , , 15]

Array.prototype.forEach2 = function (callback, thisArg) {

    if (this == null) {
        throw new Error('this is not iterable object')
    }
    let context = this
    let arr = this

    if (arguments.length > 1) {
        context = thisArg
    }

    for (let i = 0; i <= this.length; i++) {


        if (i in arr) {
            callback.call(context, this[i], i, this)
        }
    }
}


const result = testArray.forEach2((value, index, array) => {
    console.log('value', value)
    console.log('index', index)
    console.log('array', array)
},)


console.log(result)