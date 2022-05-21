export function RuntimeLog(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unity = 'miliseconds';
            if (inSeconds) {
                divisor = 1000;
                unity = 'seconds';
            }
            const t1 = performance.now();
            const originalReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, time expended to run ${(t2 - t1) / divisor} ${unity}`);
            originalReturn;
        };
        return descriptor;
    };
}
