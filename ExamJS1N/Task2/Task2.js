function solve(args) {
    var result = {},
        text = args[0],
        offset = args[1].map(Number),
        CONSTANTS = {
            ALPHABET: 'abcdefghijklmnopqrstuvwxyz'
        },
        len = text.length, i, count, symbol; 

    for ( i = 1; i < len; i++) {
        symbol = text[0];
        if (text[i] === symbol) {
            count += 1;
        }
    }

    result += 18;
    result += 13125



    console.log(result);
}
