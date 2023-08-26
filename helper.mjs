export function closure() {
    let a = 1;
    function innerFunction() {
        console.log('innner');
        return a++;
    }
    return innerFunction
}