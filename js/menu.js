var total = 0;

function validate(){
  var Total = document.getElementById("total")
  if(Total.values=='0.00'){
     alert("Please select your favorite dish");
      return false;
   }
   else{
     return true
   }
}
// Dishes represents the appetizer prices only
var dish1 = 0;
var dish2 = 0;
var dish3 = 0;
var dish4 = 0;
// Dishes represents the burgur prices only
var main1 = 0;
var main2 = 0;
var main3 = 0;
var main4 = 0;
// Dishes represents the desert prices only
var dess1 = 0;
var dess2 = 0;
var dess3 = 0;
var dess4 = 0;
// Dishes represents the desert prices only
var drink1 = 0;
var drink2 = 0;
var drink3 = 0;
var drink4 = 0;
// Prices for Dishes
var price1 = 350;
var price2 = 300;
var price3 = 250;
var price4 = 400;
var price5 = 150;
var price6 = 200;
var price7 = 100;
var price8 = 700;
var price9 = 300;
var price10 = 320;
var price11 = 350;
var price12 = 400;
var price13 = 150;
var price14 = 180;
var price15 = 180;
var price16 = 100;
// Num represents dish numbers
function changeQuantity(amount,num)
{
  var displayDish = 0; // Represents the dish the needs to be shown

  if(num == 1)
  {
    if(dish1+amount>=0) {
      dish1+=amount;
    }
    displayDish = 1;
    updateTotal(amount,price1);
  }
  else if(num ==2)
  {
    if(dish2+amount>=0) {
      dish2+=amount;
    }
    displayDish = 2;
    updateTotal(amount,price2);
  }
  else if(num ==3)
  {
    if(dish3+amount>=0) {
      dish3+=amount;
    }
    displayDish = 3;
    updateTotal(amount,price3);
  }
  else if(num ==4)
  {
    if(dish4+amount>=0) {
      dish4+=amount;
    }
    displayDish = 4;
    updateTotal(amount,price4);
  }
  else if(num ==5)
  {
    if(main1+amount>=0) {
      main1+=amount;
    }
    displayDish = 5;
    updateTotal(amount,price5);
  }
  else if(num ==6)
  {
    if(main2+amount>=0) {
      main2+=amount;
    }
    displayDish = 6;
    updateTotal(amount,price6);
  }
  else if(num ==7)
  {
    if(main3+amount>=0) {
      main3+=amount;
    }
    displayDish = 7;
    updateTotal(amount,price7);
  }
  else if(num ==8)
  {
    if(main4+amount>=0) {
      main4+=amount;
    }
    displayDish = 8;
    updateTotal(amount,price8);
  }
  else if(num ==9)
  {
    if(dess1+amount>=0) {
      dess1+=amount;
    }
    displayDish = 9;
    updateTotal(amount,price9);
  }
  else if(num ==10)
  {
    if(dess2+amount>=0) {
      dess2+=amount;
    }
    displayDish = 10;
    updateTotal(amount,price10);
  }
  else if(num ==11)
  {
    if(dess3+amount>=0) {
      dess3+=amount;
    }
    displayDish = 11;
    updateTotal(amount,price11);
  }
  else if(num ==12)
  {
    if(dess4+amount>=0) {
      dess4+=amount;
    }
    displayDish = 12;
    updateTotal(amount,price12);
  }
  
  else if(num ==13)
  {
    if(drink1+amount>=0) {
      drink1+=amount;
    }
    displayDish = 13;
    updateTotal(amount,price13);
  }
  else if(num ==14)
  {
    if(drink2+amount>=0) {
      drink2+=amount;
    }
    displayDish = 14;
    updateTotal(amount,price14);
  }
  else if(num ==15)
  {
    if(drink3+amount>=0) {
      drink3+=amount;
    }
    displayDish = 15;
    updateTotal(amount,price15);
  }
  else if(num ==16)
  {
    if(drink4+amount>=0) {
      drink4+=amount;
    }
    displayDish = 16;
    updateTotal(amount,price16);
  }

  displayQuantity(displayDish);
}

function updateTotal(amount,price)
{
  if(amount == -1 && (total-price >= 0))
  {
    total-=price;
  }
  else if(amount == 1){
    total+=price;
  }

  displayTotal();
}

function displayQuantity(num)
{

  if(num === 1)
  {
    document.getElementById("quantity1-1").innerHTML = dish1.toString();
    document.getElementById("quantity1-2").innerHTML = dish1.toString();
    if(dish1 === 0)
    {
      document.getElementById("check1").style.display = 'none';
    }
    else{
      document.getElementById("check1").style.display = 'block';
    }
  }
  else if(num == 2)
  {
    document.getElementById("quantity2-1").innerHTML = dish2.toString();
    document.getElementById("quantity2-2").innerHTML = dish2.toString();
    if(dish2 === 0)
    {
      document.getElementById("check2").style.display = 'none';
    }
    else{
      document.getElementById("check2").style.display = 'block';
    }
  }
  else if(num == 3)
  {
    document.getElementById("quantity3-1").innerHTML = dish3.toString();
    document.getElementById("quantity3-2").innerHTML = dish3.toString();
    if(dish3 === 0)
    {
      document.getElementById("check3").style.display = 'none';
    }
    else{
      document.getElementById("check3").style.display = 'block';
    }
  }
  else if(num == 4)
  {
    document.getElementById("quantity4-1").innerHTML = dish4.toString();
    document.getElementById("quantity4-2").innerHTML = dish4.toString();
    if(dish4 === 0)
    {
      document.getElementById("check4").style.display = 'none';
    }
    else{
      document.getElementById("check4").style.display = 'block';
    }
  }
  else if(num == 5)
  {
    document.getElementById("quantity5-1").innerHTML = main1.toString();
    document.getElementById("quantity5-2").innerHTML = main1.toString();
    if(main1 === 0)
    {
      document.getElementById("check5").style.display = 'none';
    }
    else{
      document.getElementById("check5").style.display = 'block';
    }
  }
  
  else if(num == 6)
  {
    document.getElementById("quantity6-1").innerHTML = main2.toString();
    document.getElementById("quantity6-2").innerHTML = main2.toString();
    if(main2 === 0)
    {
      document.getElementById("check6").style.display = 'none';
    }
    else{
      document.getElementById("check6").style.display = 'block';
    }
  }
  else if(num == 7)
  {
    document.getElementById("quantity7-1").innerHTML = main3.toString();
    document.getElementById("quantity7-2").innerHTML = main3.toString();
    if(main3 === 0)
    {
      document.getElementById("check7").style.display = 'none';
    }
    else{
      document.getElementById("check7").style.display = 'block';
    }
  }
  else if(num == 8)
  {
    document.getElementById("quantity8-1").innerHTML = main4.toString();
    document.getElementById("quantity8-2").innerHTML = main4.toString();
    if(main4 === 0)
    {
      document.getElementById("check8").style.display = 'none';
    }
    else{
      document.getElementById("check8").style.display = 'block';
    }
  }
  else if(num == 9)
  {
    document.getElementById("quantity9-1").innerHTML = dess1.toString();
    document.getElementById("quantity9-2").innerHTML = dess1.toString();
    if(dess1 === 0)
    {
      document.getElementById("check9").style.display = 'none';
    }
    else{
      document.getElementById("check9").style.display = 'block';
    }
  }
  else if(num == 10)
  {
    document.getElementById("quantity10-1").innerHTML = dess2.toString();
    document.getElementById("quantity10-2").innerHTML = dess2.toString();
    if(dess2 === 0)
    {
      document.getElementById("check10").style.display = 'none';
    }
    else{
      document.getElementById("check10").style.display = 'block';
    }
  }
  else if(num == 11)
  {
    document.getElementById("quantity11-1").innerHTML = dess3.toString();
    document.getElementById("quantity11-2").innerHTML = dess3.toString();
    if(dess3 === 0)
    {
      document.getElementById("check11").style.display = 'none';
    }
    else{
      document.getElementById("check11").style.display = 'block';
    }
  }
  else if(num == 12)
  {
    document.getElementById("quantity12-1").innerHTML = dess4.toString();
    document.getElementById("quantity12-2").innerHTML = dess4.toString();
    if(dess4 === 0)
    {
      document.getElementById("check12").style.display = 'none';
    }
    else{
      document.getElementById("check12").style.display = 'block';
    }
  }
  else if(num == 13)
  {
    document.getElementById("quantity13-1").innerHTML = drink1.toString();
    document.getElementById("quantity13-2").innerHTML = drink1.toString();
    if(drink1 === 0)
    {
      document.getElementById("check13").style.display = 'none';
    }
    else{
      document.getElementById("check13").style.display = 'block';
    }
  }
  else if(num == 14)
  {
    document.getElementById("quantity14-1").innerHTML = drink2.toString();
    document.getElementById("quantity14-2").innerHTML = drink2.toString();
    if(drink2 === 0){
      document.getElementById("check14").style.display = 'none';
    }
    else{
      document.getElementById("check14").style.display = 'block';
    }
  }
  else if(num == 15)
  {
    document.getElementById("quantity15-1").innerHTML = drink3.toString();
    document.getElementById("quantity15-2").innerHTML = drink3.toString();
    if(drink3 === 0)
    {
      document.getElementById("check15").style.display = 'none';
    }
    else{
      document.getElementById("check15").style.display = 'block';
    }
  }
  else if(num == 16)
  {
    document.getElementById("quantity16-1").innerHTML = drink4.toString();
    document.getElementById("quantity16-2").innerHTML = drink4.toString();
    if(drink4 === 0)
    {
      document.getElementById("check16").style.display = 'none';
    }
    else{
      document.getElementById("check16").style.display = 'block';
    }
  }

}

function displayTotal()
{
  var result = Math.round(total*100) / 100;
  result = result.toFixed(2);

  document.getElementById("total").innerHTML = result.toString();
}
