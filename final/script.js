function create() {
  location.href = "activity.html";
}

function select() {
  location.href = "duration.html";
  var app = express();
  app.get
}

function generate() {
  location.href = "preview.html";
}

function save() {
  var express = require('express'); // Express web server framework
  var app = express();
  app.use(express.static(__dirname + '/public'));
  console.log('Listening on 8888');
  app.listen(8888);

  var client_id = '90b2323d868d4aeebfea4e13456dc23c';
  var redirect_uri = '../../../index.html';

  var state = generateRandomString(16);

  localStorage.setItem(stateKey, state);
  var scope = 'ugc-image-upload playlist-modify-private playlist-modify-public ';

  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);

  app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'ugc-image-upload playlist-modify-private playlist-modify-public ';
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });
}}

//generating playlist//

const app = {};

//step 1: get recommendations//
//step 2: create playlist//
//step 3: search for songs//
//step 4: add songs to playlist//
app.getRecommendations = function(tracks) {

}

app.getTracks = function(tracks){
  $.when(...tracks)
		.then((...tracks) => {
			tracks = tracks
				.map(getDataObject)
				.reduce((prev,curr) => [...prev,...curr],[]);
			const randomPlayList = getRandomTracks(50,tracks);
			app.createPlayList(randomPlayList);
		})
};


app.createPlayList = function(songs){
  const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
  songs = songs.map(song => song.id).join(',');
  $('.loader').removeClass('show');
  $('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
}
