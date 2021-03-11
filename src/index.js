module.exports = function toReadable(number) {
    if (typeof number == "undefined" || number < 0 || number > 1000)
        return "Wright the number 0 - 1000";

    let stringNumber = String(number);

    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tenth = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 0 && number <= 1000) {
        if (number <= 19) {
            return units[number];
        }
        if (number >= 20 && number < 100) {
            return number % 10 === 0
                ? tenth[parseInt(stringNumber[0])]
                : tenth[parseInt(stringNumber[0])] +
                      " " +
                      units[parseInt(stringNumber[1])];
        }
        return number % 100 === 0
            ? number % 1000 === 0
                ? units[parseInt(stringNumber[0])] + " " + "thousand"
                : units[parseInt(stringNumber[0])] + " " + "hundred"
            : stringNumber[1] === "1"
            ? parseInt(stringNumber.slice(1)) >= 10 &&
              parseInt(stringNumber.slice(1)) <= 12
                ? units[parseInt(stringNumber[0])] +
                  " " +
                  "hundred" +
                  " " +
                  units[parseInt(stringNumber.slice(1))]
                : units[parseInt(stringNumber[0])] +
                  " " +
                  "hundred" +
                  " " +
                  units[parseInt(stringNumber.slice(1))]
            : parseInt(stringNumber.slice(1)) % 10 === 0
            ? units[parseInt(stringNumber[0])] +
              " " +
              "hundred" +
              " " +
              tenth[parseInt(stringNumber[1])]
            : parseInt(stringNumber.slice(1)) < 10
            ? `${units[parseInt(stringNumber[0])]} hundred ${
                  units[parseInt(stringNumber.slice(1))]
              }`
            : `${units[parseInt(stringNumber[0])]} hundred ${
                  tenth[parseInt(stringNumber[1])]
              } ${units[parseInt(stringNumber[2])]}`;
    }
};
