const checkForSpam = function (message) {
    // твой код
    if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
        return true;
    }
    return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

