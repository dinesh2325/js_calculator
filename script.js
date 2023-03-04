let string="";

for(var i=0;i<document.querySelectorAll(".button").length;i++)
document.querySelectorAll("button")[i].addEventListener("click", function handle(e){
  
  if(e.target.innerHTML== '=')
  {
    string=eval(string);
    document.querySelector('input').value=string;
  }
    else if(e.target.innerHTML=='c')
    {
      string="";
      document.querySelector("input").value=string;
    }
  else{
    string =string+e.target.innerHTML;
    document.querySelector('input').value=string;
  }
  
   
}
                  );





