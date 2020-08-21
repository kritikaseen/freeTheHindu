//Title
var html_title = document.querySelector('h1.title').innerText;
var html_title_head = html_title;
html_title = '<h1>' + html_title + '</h1>';

//Intro
var html_intro = document.querySelector('h2.intro').innerText;
if(html_intro !== null && html_intro !== '') {
	html_intro = '<br>' + '<h3><u>Intro</u> : ' + html_intro + '</h3>';
}else{
	html_intro = '';
}

//Main Content
var html_body = document.querySelector('div.paywall').innerHTML;

//Cleaning html_body
html_body = html_body.replace(/<\/p>/g, '</p><br>');;
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