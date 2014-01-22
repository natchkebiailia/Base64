$(function() {
			$("button").click(function(){
				if(Base64.encode(Base64.decode(fix(noWhiteSpace($('.form-control:first').val())))).indexOf(noWhiteSpace($('.form-control:first').val()))>-1)
					$('.form-control:first').val(Base64.decode(noWhiteSpace($('.form-control:first').val())));
				else
					$('.form-control:first').val(Base64.encode(noWhiteSpace($('.form-control:first').val())).replace(/=/g, ''));
			});
		});
function fix(str){
	while(str.length%4!=0)
		str+='=';
	return str;
}
function noWhiteSpace(str){
	return 	str.replace(/^\s+|\s+$/g,'');
}