/* 
take 2 nos and they will be base exponent. multply it base with the no of exponents


*/

function pow(a,b) {

    // expo= a ** b;
    let result =1;

    for(let i=1; i<=b; i++)
    {
       result = a * result ;

    }
    return result;

}

let res= pow(2,3)

console.log(res)