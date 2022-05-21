export function RuntimeLog() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const originalReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, time expended to run ${(t2 - t1) / 1000} seconds`);
            originalReturn;
        };
        return descriptor;
    };
}
