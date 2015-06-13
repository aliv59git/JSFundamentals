function solve(params) {
    var s = params[0].split(' ').map(Number),
    result;
    var i, j, len = s.length,
    maxRocksInValley = 0,
    currentRocksInValley = 0,
    maxRocksInValleyCounter = 0;
    for (i = 0; i < len; i += 1) {
        for (j = i; j < len; j += 1) {
            if (s[j] > s[j + 1]) {
                currentRocksInValley += 1;
            } else if (s[j] < s[j + 1]) {
                currentRocksInValley += 1;
                if (s[j + 1] < s[j + 2])
                    continue;
                else
                    break;
            }
        }
        if (currentRocksInValley > maxRocksInValley)
            maxRocksInValley = currentRocksInValley;
        currentRocksInValley = 0;
    }

    result = maxRocksInValley;
    console.log(result);
}