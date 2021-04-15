window.addEventListener('DOMContentLoaded', () => {
       // Calculator

       const result = document.querySelector('.calculating__result span');
       let calc = quantity = 10000 , commission = 30, costWeek = 7, quantitySubscriptions = 3, middleWeek = 10, noPay = 10, cpi = 1.1, returnPay = 5;
       
       
       function calcTotal() {
        
           if (!quantity  || !commission || !costWeek || !quantitySubscriptions || !middleWeek || !noPay || !cpi || !returnPay) {
               result.textContent = '____'; 
               return;
           } else {
               
               result.textContent = (quantity / (((((+costWeek * +middleWeek) - (((+returnPay + +commission) * (+costWeek * +middleWeek)) / 100)) * +quantitySubscriptions) / 100) - (cpi - (cpi * (noPay / 100))))).toFixed(3)
               
          



            
           }
       }
   
       calcTotal();
   
    
   
       
       
   
       function getDynamicInformation(selector) {
           const input = document.querySelector(selector);
   
           input.addEventListener('input', () => {
               switch(input.getAttribute('id')) {
                   case "quantity":
                    quantity = +input.value;
                       break;
                   case "commission":
                    commission = +input.value;
                       break;
                   case "costWeek":
                    costWeek = +input.value;
                       break;
                   case "quantitySubscriptions":
                    quantitySubscriptions = +input.value;
                        break;
                   case "middleWeek":
                    middleWeek = +input.value;
                        break;
                   case "noPay":
                    noPay = +input.value;
                        break;
                   case "cpi":
                    cpi = +input.value;
                        break;
                   case "returnPay":
                    returnPay = +input.value;
                        break;
               }
   
               calcTotal();
           });
       }
   
       getDynamicInformation('#quantity');
       getDynamicInformation('#commission');
       getDynamicInformation('#costWeek');
       getDynamicInformation('#quantitySubscriptions');
       getDynamicInformation('#middleWeek');
       getDynamicInformation('#noPay');
       getDynamicInformation('#cpi');
       getDynamicInformation('#returnPay');
   
});