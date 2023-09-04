function sumFunction(){
    let accumulator = 0;
    function addFunction(newNumber){
        accumulator += newNumber;
        console.log(accumulator);
    }
    return addFunction;
}

let sum = sumFunction();

sum(3);
sum(5);
sum(20);



