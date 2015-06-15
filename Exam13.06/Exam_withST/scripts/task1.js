function solve(params) {
    var N = parseInt(params[0]),
        K = parseInt(params[1]),
        numbersAsString = params[2];
        numbers = numbersAsString.split(' ').map(Number);
            i=0, j=0, len = numbers.length,
            result = [], min = Number.MAX_VALUE, max = Number.MIN_VALUE, sum=0;

    for (i = 0; i < N-K+1; i+=1) {
        min = numbers[i];
        max = numbers[i];

        for (var j = i; j < K + i; j += 1) {
            if(numbers[j]< min){
                min = numbers[j];
            }
            if(numbers[j]>max){
                max = numbers[j];
            }
        } 
        sum = min+max;
        result.push(sum);

        sum = 0;
    }    


    return result.join(',');
}


var test = ['8',
'4',
'1 8 8 4 2 9 8 11'
];

console.log(solve(test));
