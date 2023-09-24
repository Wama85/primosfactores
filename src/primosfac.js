class primos{
  factorprimo(n){
    let resulprimos=[];
    let cantidad=2;

    while (n>1){

      while(n%cantidad===0){
        resulprimos.push(cantidad);
        n/=cantidad;
      }
      cantidad ++;
    }
    
      if(n>1){
        resulprimos.push(n);
      }
      
     

    return resulprimos;
  }
}
export default primos;
