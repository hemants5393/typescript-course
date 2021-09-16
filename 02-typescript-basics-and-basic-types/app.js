/*
    Using Types
*/
(function () {
    function add(n1, n2) {
        return n1 + n2;
    }
    var number1 = 5;
    var number2 = 15;
    var result = add(number1, number2);
    console.log("add() Result:", result);
})();
/*
    Working with numbers, string and booleans
*/
(function () {
    function add(n1, n2, showResult, resultPhrase) {
        var result = n1 + n2;
        if (showResult) {
            console.log(resultPhrase, result);
        }
        else {
            return result;
        }
    }
    var number1 = 15;
    var number2 = 5.9;
    var printResult = true;
    var resultPhrase = "Result is: ";
    add(number1, number2, printResult, resultPhrase);
})();
