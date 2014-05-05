// JavaScript Document// JavaScript Document

function display_mem()
{
	var mem=parseInt(document.getElementById('no_of_mem').value);
	//remove();
	document.getElementById('members_data').innerHTML="";
	for(var i=1; i<=mem; i++)
	{		
		document.getElementById('members_data').innerHTML+="<h3>Member "+i+"</h3>\
                                     <table cellpadding=\"4\" cellspacing=\"4\" style=\"padding-bottom:20px\">\
                                     <tr><span id=\"mem_mes_"+i+"\" class=\"side_mes\"></span>\
									        <td class=\"form_table_td\" >Name:</td>\
                                             <td><input class=\"text\" id=\"mem_name_"+i+"\" name=\"mem_name_"+i+"\" type=\"text\" maxlength=\"30\" 	\
											 				onfocus=\"clear_mem_mes(this);\" /></td>\
                                            \
                                             <td class=\"form_table_td\">Email id:</td>\
                                             <td><input class=\"text\" id=\"mem_email_"+i+"\" name=\"mem_email_"+i+"\" type=\"text\" maxlength=\"30\" \
											 				onfocus=\"clear_mem_mes(this);\"/></td>\
   											 \
                                             <td class=\"form_table_td\" style=\"padding-left:30px\" >Admin:</td>\
                                             <td><input type=\"checkbox\" id=\"is_admin"+i+"\" name=\"is_admin_"+i+"\" checked=\"checked\"/></td>\
	                                 </tr>\
                                     <tr>\
    	                                     <td class=\"form_table_td\">Mobile no.:</td>\
                                             <td><input class=\"text\" id=\"mem_mobile_"+i+"\" name=\"mem_mobile_"+i+"\" type=\"text\" maxlength=\"10\" \
											 				onfocus=\"clear_mem_mes(this);\"/></td>\
                                            \
                                             <td class=\"form_table_td\">Details:</td>\
                                             <td><input class=\"text\" id=\"mem_details_"+i+"\" name=\"mem_details_"+i+"\" type=\"text\" maxlength=\"70\"/></td>\
                                     </tr>\
                                    </table>";
	}
	document.getElementById('members_data').innerHTML+="<div align=\"center\" style=\"padding:40px\"><input class=\"portal-login-submit\" id=\"sign_up_sub\" name=\"commit\" type=\"submit\" 														value=\" Create Account \" /></div>";
}




function change_pass_form_validate()
{
	if(confirm_pass() && valid_pass_name())
		return true;
	else
		return false;
	
}
function confirm_pass()
{
	if(document.getElementById('acc_repass').value==document.getElementById('acc_pass').value)
	{
			document.getElementById('pass_validate').innerHTML='';
			return true;
	}
	else
	{
			document.getElementById('pass_validate').innerHTML='Password not matching';
			return false;
	}
}

function valid_pass_name()
{	
	if((document.getElementById('acc_pass').value).length<6)
	{
		document.getElementById('pass_length').innerHTML='Password should be of more than 5 charaters';
		return false;
	}
	else
	{
			document.getElementById('pass_length').innerHTML='';
			return true;
	}
}

function valid_acc_name()
{
	if((document.getElementById('acc_name').value).length<6)
	{
		document.getElementById('acc_validate').innerHTML='Account name should be of more than 5 charaters';
		valid=0;
	}
	else
	{
			document.getElementById('acc_validate').innerHTML='';
			valid=1;
	}
}






