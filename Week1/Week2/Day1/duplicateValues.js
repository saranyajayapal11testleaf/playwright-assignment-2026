let num = [56,78,90,23,90,76,43,56]

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j]) {
            console.log(num[i]);
        }
    }
}

// let arr=[10,20,30];

// arr.splice(1,2,true);
// console.log(arr);

let arr = [1, 2, 3];

console.log(arr.toString());

arr.slice