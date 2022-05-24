function mapSemThis(arr) {
  arr.map(function(item) {
    return item * 2;
  })
}

const nums = [1, 4, 5, 9, 3, 2, 6, 7];

console.log(mapSemThis(nums));
console.log(nums);