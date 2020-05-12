
var contentBody = document.getElementById('content').getElementsByTagName('h2');
var headerImage = document.getElementById('headerImage');
var profileImage = document.getElementById('profileImage');
var links = document.getElementsByTagName('a');

function update_page(data){
	contentBody.textContent = data.content;
	headerImage.src = data.headerImage;
	profileImage.src = data.profileImage;
}


var pages = {
	home: {
		content: "frontpage",
		headerImage: '/sign.jpg',
		profileImage: 'img/me.jpg'
	},
	aboutme: {
		content: "aboutme",
		headerImage: 'img/aboutme.jpg',
		profileImage: ''
	}
}

function clickHandler(event) {
  var subpage = event.target.getAttribute('href').split('/').pop(),
      data = pages[subpage];
  update_page(data);

  history.pushState(data, event.target.textContent, event.target.href);
  return event.preventDefault();
}

for (var i = 0, l = links.length; i < l; i++) {
  links[i].addEventListener('click', clickHandler, true);
}

window.addEventListener('popstate', function(event) {
  console.log('popstate fired!', window);
  update_page(event.state);
});

history.replaceState(
	{
  		content: contentBody.textContent,
  		photo: headerImage.src
	}, 
	document.title, document.location.href);
