function clr(val)
{
document.getElementById("ans").value=val;
}
function val(val)
{
document.getElementById("ans").value+=val;
}
function eq() 
{ 
try 
{ 
  clr(eval(document.getElementById("ans").value)) 
} 
catch(eq) 
{
  clr('Error') 
} 
}  
