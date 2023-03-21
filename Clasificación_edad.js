function edad(x){
    if(x<13){
        return "niño";
    }else if(x>=13 && x<18){
         return "adolescente";
    }else if(x>=19 && x<64){
        return "adulto";
    }else{
        return "mayor";
    }
}
console.log("9" + edad(9));
console.log("15" + edad(15));
console.log("30"+ edad(30));
console.log("80"+ edad(80));