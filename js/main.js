
var count = document.getElementById('count');
count.onclick = function Saad () {
    var result = document.getElementById('result'),
    	wieght 	= document.getElementById('weight').value,
        tall   	= document.getElementById('tall').value,
        tall2	= tall * tall,
        tottal  = wieght / tall2,
        final   = Math.round(tottal * 10000);

	if(final <= 15 ){
		result.innerHTML = '<div class="alert alert-danger">Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br> <u> Very Very Thin </u></div>';
	}else if ( final > 15 && final <= 16){
		result.innerHTML = '<div class="alert alert-warning">Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br> <u> Very Thin </u> </div>';
	}else if( final > 16 && final <= 18.5 ){
		result.innerHTML = '<div class="alert alert-warning"> Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br><u> Mild Thin </u></div>';
	}else if( final > 18.5 && final <= 25 ){
		result.innerHTML = '<div class="alert alert-success"> Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br><u> Normal </u></div>';
	}else if( final > 25 && final <= 30 ){
		result.innerHTML = '<div class="alert alert-warning">Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br> <u> Over Weight </u></div>';
	}else if( final > 30 && final <= 35 ){
		result.innerHTML = '<div class="alert alert-warning">Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br> <u> Obesity G1 </u></div>';
	}else if( final > 35 && final <= 40 ){
		result.innerHTML = '<div class="alert alert-danger">Your B.M.I is ( <strong>' + Math.abs(final) + '</strong> ) <br> <u> Obesity G2 </u></div>';
	}else if( final > 40 ){
		result.innerHTML = '<div class="alert alert-danger">Your B.M.I is ( <strong> 40 </strong> ) <br><u> Obesity G3 </u></div>';
		
	}

	//Validation

	if (wieght === '0' ||tall === '0'){
		result.innerHTML = '<div class="alert alert-danger">No Zeros, GROW UP</div>';
	}else if( isNaN(wieght) || isNaN(tall) ) {
		result.innerHTML = '<div class="alert alert-danger">Just Numbers, GROW UP</div>';
	}else if(wieght === '' || tall === '' ){
		result.innerHTML = '<div class="alert alert-danger">You have to type something</div>';
	}else if(wieght < '0' || tall < '0' ){
		result.innerHTML = '<div class="alert alert-danger">NO -Negative- Numbers</div>';
	}else if(wieght > 500 || tall > 250){
		result.innerHTML = '<div class="alert alert-danger">Are you Kidding me !? </div>';

	}
}