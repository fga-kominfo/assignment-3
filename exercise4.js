function subArray(arr) {
    let max_current = arr[0];
    let max_global = arr[0];
    let start = 0;
    end = 0;
    s = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max_current + arr[i]) {
            max_current = arr[i];
            s = i;
        } else {
            max_current += arr[i];
        }

        if (max_current > max_global) {
            max_global = max_current;
            start = s;
            end = i;
        }
    }

    return [arr.slice(start, end + 1), max_global];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
