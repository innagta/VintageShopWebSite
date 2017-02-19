function validateForm(){
      
         if( document.registrationForm.firstName.value == "" )
         {
            alert( "Please enter your first name!" );
            document.registrationForm.firstName.focus() ;
            return false;
         }
         if( document.registrationForm.lastName.value == "" )
         {
            alert( "Please enter your last name!" );
            document.registrationForm.lastName.focus() ;
            return false;
         }
         if( document.registrationForm.eMail.value == "" )
         {
            alert( "Please enter your Email address!" );
            document.registrationForm.eMail.focus() ;
            return false;
         }
         
        if( document.registrationForm.phoneNumber.value == "" )
         {
            alert( "Please enter your Phone Number!" );
            document.registrationForm.phoneNumber.focus() ;
            return false;
         }
         if( document.registrationForm.pwrd.value == "" )
         {
            alert( "Please enter a password!" );
            document.registrationForm.pwrd.focus() ;
            return false;
         }

          if( document.registrationForm.confirmPwrd.value == "" )
         {
            alert( "Please re-enter your password!" );
            document.registrationForm.confirmPwrd.focus() ;
            return false;
         }
        
            if(document.registrationForm.pwrd.value != document.registrationForm.confirmPwrd.value){
            alert("The two passwords does not match!");
					return false;
			} 
			else
			return (true);
		}