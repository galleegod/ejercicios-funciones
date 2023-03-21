 function calificacion(n){
    if(n>=90){
        return "A";
    }else if(n>=80 && n<89){
        return "B";
    }else if(n>=70 && n<79){
        return "C";
    }else if(n>=60 && n<69){
        return "D";
    }else{
        return "F";
    }
}

console.log("97"+ calificacion(97));
console.log("82"+ calificacion(82));
console.log("77"+ calificacion(77));
console.log("61"+ calificacion(61));
console.log("28"+ calificacion(28));