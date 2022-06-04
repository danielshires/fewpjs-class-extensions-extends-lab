// Your code here

class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        return this.array.length
    }

    get perimeter() {
        const initialValue = 0
        const sum = this.array.reduce((previousVal, currenValue) => previousVal + currenValue, initialValue)
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        function checkTriangle(a, b, c) {
            return (a + b) > c && (b + c) > a && (a + c) > b ? true : false
        }
        return checkTriangle(this.array[0], this.array[1], this.array[2])
    }
}

class Square extends Polygon {
    get isValid() {
        const allEqual = arr => arr.every(v => v === arr[0])
        return allEqual(this.array)
    }
    get area() {
        return Math.pow(this.array[0], 2)
    }
}

triangle = new Triangle([5, 5, 5])
triangle2 = new Triangle([15, 10, 1])
let square = new Square([5, 5, 5, 5])

console.log(square)