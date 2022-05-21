export function RuntimeLog(inSeconds: boolean = false) { //decorator with optional parameter
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {

            //just to show the time in seconds or miliseconds
            let divisor = 1;//in seconds
            let unity = 'miliseconds';
            if(inSeconds){
                divisor = 1000;
                unity = 'seconds';
            }

            const t1 = performance.now();
            const originalReturn = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, time expended to run ${(t2 - t1) / divisor} ${unity}`)
            originalReturn;
        }

        return descriptor;
    }

}