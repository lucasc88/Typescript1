export function RuntimeLog() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();
            const originalReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, time expended to run ${(t2 - t1) / 1000} seconds`)
            originalReturn;
        }

        return descriptor;
    }

}