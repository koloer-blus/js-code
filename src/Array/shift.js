Array.prototype.removeFirstPosition = function () {
  const newArr = [];
  for (let i = 0, end = this.length - 1; i < end; i++) {
    newArr.push(this[i + 1])
  }
  return newArr
}
const arr = [1, 2, 3, 4, 5]
const arr1 = JSON.parse(JSON.stringify(arr))

console.table([arr, arr.removeFirstPosition(), (arr1.shift(), arr1)])