function pow(number, degree) {
    if(degree < 0){
        if(degree === -1){
            return 1/number;
        }
        else{
            return (1/number * pow(number, degree + 1)).toFixed(4);
        }
    }else if(degree === 0) {
        return 1;
    }else if(degree === 1) {
        return number;
    }
    else {
        return number * pow(number, degree - 1);
    }
}

let output = document.getElementsByClassName("result")[0];
output.innerHTML = pow(3, 0);