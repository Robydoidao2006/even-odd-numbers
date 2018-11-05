var number = document.querySelector('#number').value; // number to be divide 

var button = document.querySelector('#buttonOne');
button.addEventListener('click', function(){

    var number            = document.querySelector('#number').value; // number to be divide 
    var displayMessageOne = document.querySelector('#displayMessageOne');
    var messageEven       = number + ' is an even number';
    var messageOdd        = number + ' is an odd number';   

    // checks a sigle user input and outputs a single result.
    function eventOne(){
   
        if (number % 2 === 0){
            displayMessageOne.textContent = messageEven;
            displayMessageOne.style.background = 'green';
        } else {
            displayMessageOne.textContent = messageOdd;
            displayMessageOne.style.background = 'red';
        }

    } 
    eventOne();

});

var button = document.querySelector('#buttonTwo');
button.addEventListener('click', function(){

    var numberArray        = document.querySelector('#numberArray').value ++; // arra number
    var displayMessageEven = document.querySelector('#displayMessageEven');
    var displayMessageOdd  = document.querySelector('#displayMessageOdd');
  
    // loops throu array and display all even and odd numbers
    function eventTwo(){
        
        for (var i = 1; i < numberArray +1; i++){   
            
            var messageEven =  i + ' is an even number' + '<br>';
            var messageOdd  =  i + ' is an odd number' + '<br>';

            if ( i % 2 === 0){

                displayMessageEven.innerHTML += messageEven;
                //displayMessageTwo.style.background += 'green'; 

            } else {

                displayMessageOdd.innerHTML += messageOdd ;
                //displayMessageTwo.style.background = 'red';
                $('#myForm2')[0].reset();  
            }          
        }  
                    
    }
    eventTwo();
   
}); // event listener.




