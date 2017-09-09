var k;
  for(k=1;k<=100; k++){

      if(k%3===0 && k%5===0){
          console.log("fizz buzz");
          }

    else if(k%5===0){
        console.log('buzz');
        }

      else if(k%3==0){
        console.log('fuzz');
        }

      else{
      console.log(k);
      }

  }