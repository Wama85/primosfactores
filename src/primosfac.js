class primos{
  factorprimo(n){
    let resulprimos=[];
  
    for(let cantidad=2;n>1;cantidad++){
      
      while(n%cantidad===0){
        resulprimos.push(cantidad);
        n/=cantidad;
      }
    }
    
     

    return resulprimos;
  }
}
export default primos;
