let userNumber="01609875822";
let userPin="0160";

document.getElementById("popup").style.display="none";
document.getElementById("notification").style.display="none"; 
document.getElementById("choose").style.display="none"; 

let amount=document.getElementById("amount");
let number=document.getElementById("number");
let pin=document.getElementById("pin");
let button=document.getElementById("button");

let notification=document.getElementById("notification");
let header=document.getElementById("header");

let p1=document.getElementById("p1");
p1.addEventListener("click",function(){
    document.getElementById("notification").style.display="none";   
})

let p2=document.getElementById("p2");
p2.addEventListener("click",function(){
    document.getElementById("popup").style.display="none";   
})

let p3=document.getElementById("p3");
p3.addEventListener("click",function(){
    document.getElementById("choose").style.display="none";   
})


let cashinButton=document.getElementById("cashinButton");
cashinButton.addEventListener("click",function(){
document.getElementById("popup").style.display="block";

 button.addEventListener("click",function(){
       
        if(amount.value==''){
        document.getElementById("notification").style.display="block"; 
        header.innerText="Enter the amount";

        }
        else if(number.value == "" ){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter Account Number";
        }

        else if(pin.value==""  ){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter the (4-digit) pin";
        }

        else if(number.value != userNumber ){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter the Valid Number";
        }
        else if(pin.value != userPin ){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter the Valid pin";
        }
        else{
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue+amountValue;
            document.getElementById("notification").style.display="block";
            header.innerText= `Cash In $ ${amountValue} successfull to ${number.value}`;
            amount.value=""
            number.value = ""
            pin.value=""
        }
  })

})

let cashoutButton=document.getElementById("cashoutButton");
cashoutButton.addEventListener("click",function(){

    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
   
           if(amount.value==''){
           document.getElementById("notification").style.display="block"; 
           header.innerText="Enter the amount";
   
           }

           else if(number.value=="" ){
               document.getElementById("notification").style.display="block"; 
               header.innerText="Enter the Number";
           }

           else if(number.value.length != 11){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Give 11 Number";
           }

           else if(pin.value==''){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter (4-digit) pin Number";
           }

         

           else if(pin.value != userPin){
            document.getElementById("notification").style.display="block"; 
            header.innerText="Enter vilid pin Number";
           }

        
           else{
               let totalBalance =document.getElementById("totalBalance");
               let totalBalanceValue=parseFloat(totalBalance.innerText);
               let amountValue=parseFloat(amount.value);
               totalBalance.innerText=totalBalanceValue-amountValue;
               document.getElementById("notification").style.display="block";
               header.innerText= `Cash Out $ ${amountValue} successfull to ${number.value}`;
               amount.value=""
               number.value = ""
               pin.value=""
           
           }

     })
})

let gp="017xxxxxxxx";
let banglalink="019xxxxxxxx";
let airtel="016xxxxxxxx";
let robi="018xxxxxxxx";
let telitalk="015xxxxxxxx";

let flexiButton=document.getElementById("flexiButton");
flexiButton.addEventListener("click",function(){

document.getElementById("choose").style.display="block"; 

})

// let amount=document.getElementById("amount");
// let number=document.getElementById("number");
// let pin=document.getElementById("pin");
// let button=document.getElementById("button");

let Gp=document.getElementById("Gp");
Gp.addEventListener("click",function(){
    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
        if(amount.value==""){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the amount";
        }
        else if(number.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the number";
        }
        else if(number.value[2]!=gp[2]){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter Gp number";
        }
        else if(number.value.length !=11){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter 11 number";
        }
        else if(pin.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter (4-digit) pin number";
        }
        else if(pin.value!=userPin){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter vilid Pin number";
        }
         else{
        
            let totalBalance =document.getElementById("totalBalance");
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue-amountValue;

            header.innerText= `Flexiload $ ${amountValue} successfull to ${number.value}`;
            document.getElementById("notification").style.display="block";
            amount.value=""
            number.value = ""
            pin.value=""
        }


    })

})

let Banglalink=document.getElementById("Banglalink");
Banglalink.addEventListener("click",function(){
    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
        if(amount.value==""){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the amount";
        }
        else if(number.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the number";
        }
        else if(number.value[2]!=banglalink[2]){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter Blanglalink number";
        }
        else if(number.value.length !=11){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter 11 number";
        }
        else if(pin.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter (4-digit) pin number";
        }
        else if(pin.value!=userPin){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter vilid Pin number";
        }
         else{
        
            let totalBalance =document.getElementById("totalBalance");
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue-amountValue;

            header.innerText= `Flexiload $ ${amountValue} successfull to ${number.value}`;
            document.getElementById("notification").style.display="block";
            amount.value=""
            number.value = ""
            pin.value=""
        }


    })

})


let Airtle=document.getElementById("Airtle");
Airtle.addEventListener("click",function(){
    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
        if(amount.value==""){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the amount";
        }
        else if(number.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the number";
        }
        else if(number.value[2]!=airtel[2]){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter Airtel number";
        }
        else if(number.value.length !=11){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter 11 number";
        }
        else if(pin.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter (4-digit) pin number";
        }
        else if(pin.value!=userPin){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter vilid Pin number";
        }
         else{
        
            let totalBalance =document.getElementById("totalBalance");
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue-amountValue;

            header.innerText= `Flexiload $ ${amountValue} successfull to ${number.value}`;
            document.getElementById("notification").style.display="block";
            amount.value=""
            number.value = ""
            pin.value=""
        }


    })


})

let Robi=document.getElementById("Robi");
Robi.addEventListener("click",function(){
    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
        if(amount.value==""){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the amount";
        }
        else if(number.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the number";
        }
        else if(number.value[2]!=robi[2]){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter Robi number";
        }
        else if(number.value.length !=11){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter 11 number";
        }
        else if(pin.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter (4-digit) pin number";
        }
        else if(pin.value!=userPin){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter vilid Pin number";
        }
         else{
        
            let totalBalance =document.getElementById("totalBalance");
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue-amountValue;

            header.innerText= `Flexiload $ ${amountValue} successfull to ${number.value}`;
            document.getElementById("notification").style.display="block";
            amount.value=""
            number.value = ""
            pin.value=""
        }


    })


})

let Telitalk=document.getElementById("Telitalk");
Telitalk.addEventListener("click",function(){
    document.getElementById("popup").style.display="block";

    button.addEventListener("click",function(){
        if(amount.value==""){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the amount";
        }
        else if(number.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter the number";
        }
        else if(number.value[2]!=telitalk[2]){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter Telitalk number";
        }
        else if(number.value.length !=11){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter 11 number";
        }
        else if(pin.value==''){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter (4-digit) pin number";
        }
        else if(pin.value!=userPin){
            document.getElementById("notification").style.display="block";
            header.innerText="Enter vilid Pin number";
        }
         else{
        
            let totalBalance =document.getElementById("totalBalance");
            let totalBalanceValue=parseFloat(totalBalance.innerText);
            let amountValue=parseFloat(amount.value);
            totalBalance.innerText=totalBalanceValue-amountValue;

            header.innerText= `Flexiload $ ${amountValue} successfull to ${number.value}`;
            document.getElementById("notification").style.display="block";
            amount.value=""
            number.value = ""
            pin.value=""
        }


    })


})