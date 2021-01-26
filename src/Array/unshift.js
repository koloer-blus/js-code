Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  return this
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.table([[1, 2, 3, 4], arr1.insertFirstPosition(0), (arr2.unshift(0), arr2)])