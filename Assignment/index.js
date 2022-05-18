var abc = {
    id: 1234,
    salary: 8,
    age: 21,
    name: "abc"
};
var def = {
    id: 12345,
    salary: 1,
    age: 2,
    name: "def"
};
var ghi = {
    id: 20,
    salary: 0,
    age: 12,
    name: "ghi"
};
var ab = [def, abc, ghi];
function sorts(arr, ex) {
    arr.sort(function (a, b) { return a[ex] - b[ex]; });
    // // return ts
    return arr;
}
// const wq=sorts(a,"id")
// console.log(wq)
console.log(sorts(ab, "id"));
