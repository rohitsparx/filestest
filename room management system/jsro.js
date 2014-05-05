// JavaScript Document// JavaScript Document

function display_mem()
{
	var mem=parseInt(document.getElementById('no_of_mem').value);
	for(var i=1; i<=mem; i++)
	{		
		document.getElementById('members_data').innerHTML+="<h3>Member 1</h3>
                                     <table cellpadding=\"4\" cellspacing=\"4\" style=\"padding-bottom:20px\">
                                     <tr>
		                                     <td class=\"form_table_td\" >Name:</td>
                                             <td><input class=\"text\" id=\"mem_name_1\" name=\"mem_name_1\" type=\"text\" /></td>
                                            
                                             <td class=\"form_table_td\">Email id:</td>
                                             <td><input class=\"text\" id=\"mem_email_1\" name=\"mem_email_1\" type=\"text\" /></td>
    
                                             <td class=\"form_table_td\" style=\"padding-left:30px\" >Admin:</td>
                                             <td><input type=\"checkbox\" id=\"is_admin1\" name=\"is_admin_1\" checked=\"checked\"/></td>
	                                 </tr>
                                     <tr>
    	                                     <td class=\"form_table_td\">Mobile no.:</td>
                                             <td><input class=\"text\" id=\"mem_mobile_1\" name=\"mem_mobile_1\" type=\"text\" /></td>
                                            
                                             <td class=\"form_table_td\">Details:</td>
                                             <td><input class=\"text\" id=\"mem_details_1\" name=\"mem_details_1\" type=\"text\" /></td>
                                     </tr>
                                    </table>"
	}
}