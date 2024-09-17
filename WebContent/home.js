function contact()
{
	var name=document.help.name.value;
	var phno=document.help.phno.value;
	var email=document.help.email.value;
	
	if(phno.length!=10)
		{
		alert("Enter Correct Mobile Number!");
		return false;
		}
	else
		{
		alert("Thank You for Contacting us");		
		}
}
function form()
{
    var username=document.newaccount.username.value;
    var password=document.newaccount.password.value;
    var password2=document.newaccount.confirmpassword.value;
    var email=document.newaccount.email.value;
    var address=document.newaccount.address.value;
    var phno=document.newaccount.phno.value;

    if(username=="" ||username==null)
        {
            alert("username can't be blank");
            return false;        
        }
    else if(password.length<6)
        {
            alert("password should be atleast 6 characters");
            return false;
        }
    else if(email=="" ||email==null)
        {
            alert("email can't be blank");
            return false;
        }
    else if(address=="" || address==null)
        {
            alert("address can't be blank");
            return false;
        }
    else if(phno.length!=10)
        {
            alert("Enter correct phone no");
            return false;
        }
    else if(password!==password2)
        {
          alert("password do not match");
          return false;
        }
    else
    {
        alert("succesfully Registered");
    }
    
}
function validateform()
{
    var accountno=document.balance.accountno.value;
    var username=document.balance.username.value;
    var password=document.balance.password.value;

    if(accountno.length<16)
        {
            alert("Enter Correct Account NO");
            return false;
        }
    else if(username==null || username=="")
        {
            alert("Name can't be space");
            return false;
        }
    else if(password.length<6)
        {
            alert("password should be atleast 6 characters long");
            return false;
        }
    else
    	{
    	   alert("View your current balance");
    	}
}
function closeacc()
{
    var accno=document.vamsi.accountno.value;
    var uname=document.vamsi.username.value;
    var pword=document.vamsi.password.value;

    if(accno.length<16)
      {
         alert("Account number should be atleast 16 number");
         return false;
      }
    else if(uname==null || uname=="")
      {
         alert("name can't be blank");
         return false;
      }
    else if(pword.length<6)
      {
         alert("password should be atleast 6 numbers");
         return false;
      }
   else
   {
      alert("Account has been closed succesfully ");
   }
}
function depositform()
{
    var accno=document.deposit.accountno.value;
    var uname=document.deposit.username.value;
    var password=document.deposit.password.value;
    var amount=document.deposit.amount.value;

    if(accno.length<16)
    {
        alert("Enter correct Acount No");
        return false;
    }
    else if(uname=="" || uname=="")
    {
        alert("Name can't be blank");
        return false;        
    }
    else if(password.length<6)
    {
        alert("password should be atleast 6 numbers");
        return false;
    }
    else if(amount=="" || amount==null)
    {
        alert("Enter the Amount");
        return false;
    }
    else{
    	alert("Amount has been Deposited Successfully");
    }
}
function money()
{
    var accno=document.Transfer.accountno.value;
    var pass=document.Transfer.password.value;
    var taccno=document.Transfer.targetaccountno.value;

    if(accno.length<16)
    {
        alert("Enter correct account no");
        return false;
    }
    else if(pass.length<6)
    {
        alert("password should be atleast 6 digits");
        return false;
    }
    else if(taccno.length<16)
    {
        alert("Enter correct  target account no");
        return false;
    }
    else{
    	alert("Transferred Successfully");
    }
}
function withdrawal()
{
    var accno=document.draw.accountno.value;
    var uname=document.draw.username.value;
    var pword=document.draw.password.value;
    var amount=document.draw.amount.value;

    if(accno.length<16)
    {
        alert("Enter correct account no");
        return false;
    }
    else if(pword.length<6)
    {
        alert("password should be atleast 6 digits");
        return false;
    }
    else{
    	alert("successfully withdrawal");
    }
    
}




