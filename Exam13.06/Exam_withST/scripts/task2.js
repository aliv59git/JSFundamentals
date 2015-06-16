function solve(args) {
    var result = {},
        text = args[0],
        offset = +args[1],
        CONSTANTS = {
            ALPHABET: 'abcdefghijklmnopqrstuvwxyz'
        }, len, i, count=1, begin, 
        result1='', result2='', len1, sum, product, number, result3, result4;
        text = text.split('');

        for ( i = 0, len = text.length; i < len-1; i+=1) {
          begin = text[i];
          if(text[i]===text[i+1]){
            count +=1;
              if(i===len-2){
                if(count<3){
                result1+=begin+begin;
              } else{
                result1+=count+begin;
              }
            }
          } else {
            if(count>2){
              result1+=count+begin;
              count=1;
            } else if(count===2) {
              result1+=begin+begin;
              count=1;
            } else {
              result1+=begin;
            }
            if(i===len-2){
                result1+= text[i+1];
              }            
          }
        };

        for (i = 0, len1=result1.length; i <len1; i+=1) {
          if(result1[i]-0 < 60){
            result2+=result1[i];
          } else {
            result2+= ascii(result1[i])^(97+(26-offset+(ascii(result1[i])-97)%26))
          }
        };

        function ascii(symbol){
          for (var i = 0, len=CONSTANTS.ALPHABET.length; i < len; i+=1) {
            if(symbol === CONSTANTS.ALPHABET[i]){
            return 97+i;
            } 
          };
        }

        result2 = result2.split('').map(Number);
        function isOdd(number){
          return !!(number%2);
        }
        function isEven(number){
          return !(number%2);
        }

        result3 = result2.filter(isOdd);
        result4 = result2.filter(isEven);

        sum = result4.reduce(function(sum, number){
          return sum+number;
        }, 0);

        product = result3.reduce(function(product, number){
            return product*number;
        }, 1);

    // console.log(result1);
    // console.log(offset);
    // console.log(ascii('c'));
    // console.log(result3);
    // console.log(result4);
    // console.log(sum);
    console.log(sum);
    console.log(product);
}

test = ['aaaabbbccccaa',
'3'];

console.log(solve(test));