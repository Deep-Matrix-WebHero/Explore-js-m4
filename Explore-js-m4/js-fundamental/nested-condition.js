var B_HPrice = 15;
var lalChaPrice = 5;
var mistiPanPrice = 5;
var myBudgetPrice = B_HPrice + lalChaPrice + mistiPanPrice;
var yourPocketMoney = 50;
if( myBudgetPrice < yourPocketMoney){
    console.log(' jober khushite >>> amake trt ditei hobe!!');   
}
else if(myBudgetPrice > yourPocketMoney){
    console.log('next option!!');
}
else if( (B_HPrice && lalChaPrice)<yourPocketMoney){
    console.log('aita kintu must khaoaite hobe,nahole apbnar habi re vabi dakbo na!!!')
}
else{
    console.log('ami apnake trt dibo!!');
}