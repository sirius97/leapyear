var today = new Date();
var year = today.getFullYear();
if(year%4==0)
{
  if(year%100==0)
   {
     if(year%400==0)
      document.write(year," is a leap year","<br/>");
    else
     document.write(year," is not a leap year","<br/>");
   }
  else
  document.write(year," is a leap year","<br/>");
}
else
document.write(year," is not a leap year","<br/>");
document.write(" THANK YOU FOR VISITING !!!!!!!","<br/>");