/*•	Write a script that converts a number in the range [0…999] to words, 
 * corresponding to its English pronunciation.*/

function numberAsWords() {
    var numb = +document.getElementById("input-text").value;
    var numb1, numb2, numb3;
    if (numb < 0 || numb > 999) {
        jsConsole.writeLine("Invalid number!");
    }
    numb3 = numb % 10;
    numb2 = (numb / 10 | 0) % 10;
    numb1 = (numb / 100 | 0) % 10;

    if (numb1) {
        switch (numb1) {
            case 1: numb1 = "One"; break;
            case 2: numb1 = "Two"; break;
            case 3: numb1 = "Three"; break;
            case 4: numb1 = "Four"; break;
            case 5: numb1 = "Five"; break;
            case 6: numb1 = "Six"; break;
            case 7: numb1 = "Seven"; break;
            case 8: numb1 = "Eight"; break;
            case 9: numb1 = "Nine"; break;
            default: numb1 = ""; break;
        }
        if (numb2) {
            if (numb2 > 1) {
                switch (numb2) {
                    case 2: numb2 = "twenty"; break;
                    case 3: numb2 = "thirty"; break;
                    case 4: numb2 = "fourty"; break;
                    case 5: numb2 = "fifty"; break;
                    case 6: numb2 = "sixty"; break;
                    case 7: numb2 = "seventy"; break;
                    case 8: numb2 = "eighty"; break;
                    case 9: numb2 = "ninety"; break;
                    default: numb2 = ""; break;
                }
                switch (numb3) {
                    //case 0: numb3 = "zero"; break;
                    case 1: numb3 = "one"; break;
                    case 2: numb3 = "two"; break;
                    case 3: numb3 = "three"; break;
                    case 4: numb3 = "four"; break;
                    case 5: numb3 = "five"; break;
                    case 6: numb3 = "six"; break;
                    case 7: numb3 = "seven"; break;
                    case 8: numb3 = "eight"; break;
                    case 9: numb3 = "nine"; break;
                    default: numb3 = ""; break;
                }

            } else if(numb2===1){
                numb2 = "";
                switch (numb3) {
                    case 0: numb3 = "ten"; break;
                    case 1: numb3 = "eleven"; break;
                    case 2: numb3 = "twelve"; break;
                    case 3: numb3 = "thirteen"; break;
                    case 4: numb3 = "fourteen"; break;
                    case 5: numb3 = "fifteen"; break;
                    case 6: numb3 = "sixteen"; break;
                    case 7: numb3 = "seventeen"; break;
                    case 8: numb3 = "eighteen"; break;
                    case 9: numb3 = "nineteen"; break;
                    default: numb3 = ""; break;
                }
            } 
        } else {
            numb2 = "";
            switch (numb3) {
                case 0: numb3 = ""; break;
                case 1: numb3 = "one"; break;
                case 2: numb3 = "two"; break;
                case 3: numb3 = "three"; break;
                case 4: numb3 = "four"; break;
                case 5: numb3 = "five"; break;
                case 6: numb3 = "six"; break;
                case 7: numb3 = "seven"; break;
                case 8: numb3 = "eight"; break;
                case 9: numb3 = "nine"; break;
                default: numb3 = ""; break;
            }
        }
    } else if (numb2) {
        numb1 = "";
        if (numb2 > 1) {
            switch (numb2) {
                case 2: numb2 = "Twenty"; break;
                case 3: numb2 = "Thirty"; break;
                case 4: numb2 = "Fourty"; break;
                case 5: numb2 = "Fifty"; break;
                case 6: numb2 = "Sixty"; break;
                case 7: numb2 = "Seventy"; break;
                case 8: numb2 = "Eighty"; break;
                case 9: numb2 = "Ninety"; break;
                default: numb2 = ""; break;
            }
            switch (numb3) {
                //case 0: numb3 = "zero"; break;
                case 1: numb3 = "one"; break;
                case 2: numb3 = "two"; break;
                case 3: numb3 = "three"; break;
                case 4: numb3 = "four"; break;
                case 5: numb3 = "five"; break;
                case 6: numb3 = "six"; break;
                case 7: numb3 = "seven"; break;
                case 8: numb3 = "eight"; break;
                case 9: numb3 = "nine"; break;
                default: numb3 = ""; break;
            }
        } else {
            numb2 = "";
            switch (numb3) {
                case 0: numb3 = "Ten"; break;
                case 1: numb3 = "Eleven"; break;
                case 2: numb3 = "Twelve"; break;
                case 3: numb3 = "Thirteen"; break;
                case 4: numb3 = "Fourteen"; break;
                case 5: numb3 = "Fifteen"; break;
                case 6: numb3 = "Sixteen"; break;
                case 7: numb3 = "Seventeen"; break;
                case 8: numb3 = "Eighteen"; break;
                case 9: numb3 = "Nineteen"; break;
                default: numb3 = ""; break;
            }
        }
    }
    else {
        numb2 = "";
        switch (numb3) {
            case 0: numb3 = ""; break;
            case 1: numb3 = "One"; break;
            case 2: numb3 = "Two"; break;
            case 3: numb3 = "Three"; break;
            case 4: numb3 = "Four"; break;
            case 5: numb3 = "Five"; break;
            case 6: numb3 = "Sx"; break;
            case 7: numb3 = "Seven"; break;
            case 8: numb3 = "Eight"; break;
            case 9: numb3 = "Nine"; break;
            default: numb3 = ""; break;
        }
    }
    if (!numb) {
        jsConsole.writeLine("Zero");
    } else if(!(numb % 100)){
        jsConsole.writeLine(numb1 + ' hundred');
    } else if (numb > 100) {
        jsConsole.writeLine(numb1 + ' hundred and ' + numb2 + ' ' + numb3);
    } else  {
        jsConsole.writeLine(numb2 + ' ' + numb3);
    }


}