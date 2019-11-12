function calculator(){
    const formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
     })
    
     let inputVal = Number(document.getElementById('input-calculator').value);
     console.log('inputVal from slider ----- ' + inputVal);


     let textInput = Number(document.getElementById('inputVal').value);
     console.log('text input val: ' + textInput);

     
     let initialInversion = Math.round(inputVal*0.05);

     let rentAnnual = Math.round(inputVal*0.045);

     let rentMonth = Math.round(rentAnnual/12);

     let buyerPriceY3 = Math.round(inputVal*(1+0.015*3));

     let creditAnnual = buyerPriceY3*0.01665;

     let inversionMonth = Math.round(creditAnnual/12);

     let permanenciaMinima = 3;

    //  document.getElementById('input-calculator').value = formatter.format(Number(inputVal));
     
     document.getElementById('initialInversion').innerHTML=formatter.format(initialInversion);
     document.getElementById('alquilerMensual').innerHTML=formatter.format(rentMonth);
     document.getElementById('monthlyInversion').innerHTML=formatter.format(inversionMonth);
     document.getElementById('minRental').innerHTML=permanenciaMinima + ' a&ntilde;os';
};

function calculator2(){
 //Set Currency
 var GBP = {
   mask: '£num',
   blocks: {
     num: {
       mask: Number,
       thousandsSeparator: ','
     }
   }
 }

 //Set Mask
 var masked = IMask.createMask(GBP);

};


// listen onchange updates slider position then fire calculator 
function listenTextChange(textInput, inputVal){
    $("input[type='text']").change(function(){
        textInput = $("input[type='text']").val();
        console.log('textInput after inputting value ~~~~ ' + textInput);

        $("input[type='range']").val(textInput);
        console.log('inputVal but over here --------> ' + inputVal);

        $("input[type='range']").trigger('change');

    })

}


function onSub(){
 $("input[type='range']").change(function() {
    calculator();
    calculator2();
    }
 )
}

listenTextChange();
onSub();
