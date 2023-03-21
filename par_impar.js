function par_impar(y){
    if(y%2 == 0){
        return "par";
    }else{
        return "impar";
    }
}

let res_par_impar= par_impar(3);
let resultado_par_impar= par_impar(4);

console.log("El número 3 es:", res_par_impar);
console.log("El número 4 es:", resultado_par_impar);