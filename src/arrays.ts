/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const len = numbers.length;
    if (len > 0) {
        let ret = [];
        ret.push(numbers[0]);
        ret.push(numbers[len - 1]);
        return ret;
    } else {
        return numbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const len = numbers.length;
    if (len > 0) {
        let ret = numbers.map((num: number): number => num * 3);
        return ret;
    } else {
        return numbers;
    }
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const len = numbers.length;
    if (len > 0) {
        let ret: number[] = numbers.map((str) =>
            Number.isNaN(Number(str)) ? 0 : Number(str),
        );
        return ret;
    } else {
        return [];
    }
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const len = amounts.length;
    if (len > 0) {
        let ret1: string[] = amounts.map((str) =>
            str.charAt(0) === "$" ? str.slice(1) : str,
        );
        let ret2: number[] = ret1.map((str) =>
            Number.isNaN(Number(str)) ? 0 : Number(str),
        );
        return ret2;
    } else {
        return [];
    }
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const len = messages.length;
    if (len > 0) {
        let ret1: string[] = messages.map((str) =>
            str.charAt(str.length - 1) === "!" ? str.toUpperCase() : str,
        );
        let ret2: string[] = ret1.filter(
            (str) => str.charAt(str.length - 1) !== "?",
        );
        return ret2;
    } else {
        return [];
    }
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const len = words.length;
    if (len > 0) {
        let ret = words.reduce(
            (total: number, count: string) =>
                count.length < 4 ? (total += 1) : total,
            0,
        );

        return ret;
    } else {
        return 0;
    }
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const len = colors.length;
    if (len > 0) {
        let ret = colors.reduce(
            (total: boolean, count: string) =>
                count !== "red" && count !== "blue" && count !== "green" ?
                    (total = false)
                :   total,
            true,
        );

        return ret;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const len = addends.length;
    if (len > 0) {
        let ret1 = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        let ret2 = addends.reduce(
            (str: string, num: number) => (str += num + "+"),
            ret1 + "=",
        );
        let str = ret2.slice(0, -1);
        return str;
    } else {
        return "0=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const len = values.length;
    if (len > 0) {
        let ret3 = [...values];
        let ret1 = values.findIndex((index: number): boolean => index < 0);
        if (ret1 === -1) {
            let ret2 = values.reduce(
                (total: number, num: number) => (total += num),
                0,
            );
            ret3.splice(ret3.length, 0, ret2);
        } else {
            let ret2 = values.reduce(
                (total: number, num: number) =>
                    ret1 > values.indexOf(num) ? (total += num) : total,
                0,
            );
            ret3.splice(ret1 + 1, 0, ret2);
        }
        return ret3;
    } else {
        return [0];
    }
}
