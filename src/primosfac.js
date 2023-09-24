class primos{
  factorprimo(n){
    let resulprimos=[];

    if (n>1){
      while(n%2===0){
        resulprimos.push(2);
        n/=2;

      }
      if(n>1){
        resulprimos.push(n);
      }
      
    } 

    return resulprimos;
  }
}
export default primos;
