export function domInjector(selector: string) {

    //target is , propertyKey is the variable name
    //getter will be used to replace the variable in the negotiationController 
    return function (target: any, propertyKey: string) {

        //this getter will take the element from DOM
        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`Getting the DOM Element ${selector} to inject in ${propertyKey}`);
            return element;
        }

        //Object.defineProperty will replace 
        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}