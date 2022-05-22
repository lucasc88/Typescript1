export function domInjector(selector: string) {

    //target is , propertyKey is the variable name
    //getter will be used to replace the variable in the negotiationController 
    return function (target: any, propertyKey: string) {

        let element: HTMLElement;

        //this getter will take the element from DOM
        const getter = function () {
            if (!element) {//if is null
                element = <HTMLElement>document.querySelector(selector);//cast to HTMLElement
                console.log(`Getting the DOM Element ${selector} to inject in ${propertyKey}`);
            }

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