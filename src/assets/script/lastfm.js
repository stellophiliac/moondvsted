//cred to septic.lol
document.addEventListener('DOMContentLoaded', function() {
    var user = document.getElementById("listen").getAttribute("user");
    var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + user + "&api_key=afc213709a996ae561e307f596c9952b&format=json";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
  
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        
        var data = JSON.parse(request.responseText);
        var artist = data.recenttracks.track[0].artist["#text"];
        var song = data.recenttracks.track[0]["name"];
        var artwork = data.recenttracks.track[0].image[1]["#text"];
        var link = data.recenttracks.track[0]["url"];
  
        var artworkImg = document.getElementById("artwork");
        artworkImg.setAttribute("src", artwork);

        if (song.length > 16) {
            var songTag = "marquee"
        } else {
            var songTag = "span"
        }

        if (artist.length > 16) {
            var artistTag = "marquee"
        } else {
            var artistTag = "span"
        }
  
        var trackInfo = document.getElementById("track");
        trackInfo.innerHTML = "\
          <a id='songname'><b>" +
          "<" + songTag + ">"
          +song+
          "</" + songTag +">"+
          "</b></a><br />\
          <" + artistTag + " id='artist'>"
          +artist+
          "</" + artistTag +">";

        var artworkLink = document.getElementById("artworklink");
        artworkLink.setAttribute("href", link);
        var songName = document.getElementById("songname");
        songName.setAttribute("href", link);
  
        if (typeof data.recenttracks.track[0]["@attr"] !== "undefined"){
          var listenInfo = document.getElementById("listen");
          listenInfo.innerHTML = '<b class="text-center d-block text-mono"><span class="blinker"></span>now playing:</b>';
        } else {
          var listenInfo = document.getElementById("listen");
          listenInfo.innerHTML = '<b class="text-center d-block text-mono">last played:</b>';
        }

        
      } else {
        console.error("Error fetching data from server.");
      }
    };
  
    request.onerror = function() {
      console.error("Connection error.");
    };
  
    request.send();
  });
  