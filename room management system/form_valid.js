// JavaScript Document

function check_login_form()
{
	if((document.getElementById('acc_name').value.length)<=5)
	{
		document.getElementById('acc_name_mes').innerHTML='Account name is incorrect';
		return false;
	}
	if((document.getElementById('acc_pass').value.length)<=5)
	{
		document.getElementById('login_mes').innerHTML='The account name or password you entered is incorrect';
		return false;
	}
}
function clear_mes()
{
	document.getElementById('acc_name_mes').innerHTML='';
	document.getElementById('login_mes').innerHTML='';
}

function check_sign_up_form()
{
	if(((document.getElementById('acc_name').value).length<6) || ((document.getElementById('acc_pass').value).length<6) || ((document.getElementById('acc_pass').value)!=		
		(document.getElementById('acc_repass').value)) )
		return false;
	
	var no=0;	
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	for(var i=1;i<=10;i++)
	{
		var check_exist=document.getElementById("mem_name_"+i);
		if(!check_exist)
			no=i;
	}
	for(var i=1;i<no;i++)
	{
		var member_name=document.getElementById("mem_name_"+i).value;
		var member_emailid=document.getElementById("mem_email_"+i).value;
		var member_mobile=document.getElementById("mem_mobile_"+i).value;
		member_name=remove_whitespaces(member_name.toLowerCase());
		if(member_name=='')
		{
			document.getElementById("mem_mes_"+i).innerHTML='Enter member '+i+' name';
			return false;
		}
		if((reg.test(member_emailid) == false) && (member_emailid!=''))
		{
			document.getElementById("mem_mes_"+i).innerHTML='Enter a valid email id for member '+i;
			return false;
		}
		if(((isNaN(member_mobile)) && (member_mobile!=''))||((member_mobile!='') && (member_mobile.length<10)))
		{
			document.getElementById("mem_mes_"+i).innerHTML='Enter mobile no. correctly';
			return false;
		}
		
	}
	
		
		
}


function clear_mem_mes(ele)
{
	var id=ele.getAttribute('id');
	var mem_no=id.substring(id.length-1,id.length);
	document.getElementById("mem_mes_"+mem_no).innerHTML='';
}


function check_num()
{
	var val=document.getElementById('amt_paid').value;
	if(isNaN(val))
	{
		document.getElementById('amount_span').innerHTML='Amount should be number only';
		valid=0;
	}
	else
	{
			document.getElementById('amount_span').innerHTML='';
			valid=1;
	}
}


function new_entry_form_validate()
{
	var val=document.getElementById('amt_paid').value;
	if(isNaN(val) || val=='')
	{
		document.getElementById('amount_span').innerHTML='Enter amount paid';
		return false;
	}
	if( remove_whitespaces(document.getElementById('amt_desc').value)=='' )
	{
		document.getElementById('amt_desc_mes').innerHTML='Amount description is mandatory'; return false;
	}
	if(!confirm_checkbox_sel())
		return false;
}

function confirm_checkbox_sel()
{
	var ele=document.getElementsByName('sharer');
	var one_check=0;
	for(loop=0;loop<ele.length;loop++)
	{
		if(ele[loop].checked)
			one_check=1;
	}
	if(one_check==0)
	{
		document.getElementById('selection_box_mes').innerHTML='Tick at least one member'; 
		return false;
	}
	else 
	{
		document.getElementById('selection_box_mes').innerHTML='';
		return true;
	}
}

	
function remove_whitespaces(str)
{
	var count=0;
	for(var i=0;i<str.length;i++)
		if(str[i]==' ')
			count++;
	for(i=1;i<=count;i++)
		str=str.replace(' ','');
	return str;
}

function clear_desc_error_mes()
{
	document.getElementById('amt_desc_mes').innerHTML='';
}
function desc_helper()
{
	document.getElementById('amt_desc').value=document.getElementById('desc_help').value;
}
