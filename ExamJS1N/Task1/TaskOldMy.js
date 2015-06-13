function solve(params) {
   var s = params[0],
        result, arr, arrN, len, i, bestRange=1, range, begin, end;

    arr = s.split(' ');
    len = arr.length;
    arr = arr.map(Number);

    for (i = 1; i < len; i+=1) {
        if (arr[i] >= arr[i - 1]) {
            end = i;
            bestRange = i;
        } else {
            begin = i - 1;
            break;
        }

    }




    for (i = begin+1; i < len - 1; i += 1) {
        if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
            end = i;
        }
        if ((i === len - 2)&&(arr[len-1] >= arr[i])) {
            end = len - 1;
        }
        if (end - begin > bestRange) {
            bestRange = end - begin;
            begin = end;
        }
    }
    result = bestRange;



    //console.log(solve(test));

    // Your solution here
    console.log(result);
}

var test1 = ['1 7 9 11 21 4 8'];
console.log(test1);
console.log(solve(test1));

var test2 = ['5 1 7 6 3 6 4 2 3 8'];
console.log(solve(test2));

var test3 = ['10 1 2 3 4 5 4 3 2 1 10'];
console.log(solve(test3));
