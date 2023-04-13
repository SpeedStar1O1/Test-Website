
// Hamburger icon effect
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu');
  
    hamburgerIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  
  
  // YouTube video ID
var videoID = "JMXAkZXvNyU";

// Create YouTube player object
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-preview', {
    height: '315',
    width: '560',
    videoId: videoID,
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'loop': 1,
      'mute': 1,
      'playlist': videoID
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// On player ready, show preview thumbnail
function onPlayerReady(event) {
  var thumbnailUrl = event.target.getVideoData().thumbnail_url;
  var previewDiv = document.getElementById('video-preview');
  previewDiv.innerHTML = '<img src="' + thumbnailUrl + '" alt="YouTube Video Preview">';
}

// On player state change, loop video
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    player.seekTo(0);
  }
}
