//Title
var html_title;
try{
	html_title = document.querySelector('h1.title').innerText;
}catch(err){
	html_title = document.querySelector('h2.special-article-heading').innerText;
}
var html_title_head = html_title;
html_title = '<h1>' + html_title + '</h1>';

//Intro

try {
  var html_intro = document.querySelector('h2.intro').innerText;
  html_intro = '<br>' + '<h3><u>Intro</u> : ' + html_intro + '</h3>';
}
catch(err) {
  html_intro = '';
}

//Main Content

var html_body;

try{
	html_body = document.querySelector('div.paywall').innerHTML;

}catch(err){
	html_body_l = document.querySelectorAll('*[id^="content-body-"]');
	html_body = html_body_l[0].innerHTML;
}

//Img Cleansing
var html_body_cleaned = '';
var done = true;
var search_init = 0;
while(html_body.indexOf("img-full-width",search_init) > -1){
	done = false;
	var ind = html_body.indexOf("img-full-width",search_init);

	html_body_cleaned += html_body.substring(search_init,ind-12);
	


	var ind_img = html_body.indexOf("<img",ind);
	var ind_img_s = html_body.indexOf("data-proxy-image",ind_img);
	var img_replacement_url = '';

	for(var i=ind_img_s+18; i<html_body.length;i++){
		if(html_body.charAt(i) != '"'){
			img_replacement_url += html_body.charAt(i);
		}else{
			break;
		}

	}

	//Replacing Img with better img
	if(img_replacement_url.indexOf("FREE")>-1){
		var _tem_ind = img_replacement_url.indexOf("FREE");
		img_replacement_url = img_replacement_url.substring(0,_tem_ind) + "FREE_615" +img_replacement_url.substring(_tem_ind+8);
		console.log(img_replacement_url);
	}

	html_body_cleaned += '<img src="'+img_replacement_url+'" style="width:100%;">';
	search_init = ind_img_s;
	
	var ind_final = html_body.indexOf("<p>",search_init);
	search_init = ind_final;

}

html_body_cleaned += html_body.substring(search_init);
html_body = html_body_cleaned;


//Cleaning html_body
html_body = html_body.replace(/<\/p>/g, '</p><br>');
html_body = '<div>' + html_body + '</div><br><br><br>';



//Final Addition

finalHTML = '<head>'
finalHTML += '<title>' + html_title_head + '</title>';
finalHTML += '<style>'
finalHTML += 'a {color:grey;text-decoration: none;}'
finalHTML += '</style>'
finalHTML += '</head>'


finalHTML += '<div style="width:800px; margin:0 auto; font-size:20px;">';
finalHTML += html_title;
finalHTML += html_intro;
finalHTML += html_body;


finalHTML += '<div style="text-align:center;"><a href="https://kritikaseen.github.io/index.html"> <style>.heart{color:#e25555;}</style> Made with <span class="heart">❤</span></a></div>';
finalHTML += '</div>';


document.documentElement.innerHTML = '';
document.documentElement.innerHTML += finalHTML;