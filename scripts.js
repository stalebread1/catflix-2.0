const videos = [
    "catvideo1.mp4",
    "catvideo2.mp4",
    "catvideo3.mp4",
    "catvideo4.mp4",
    "catvideo5.mp4",
    "catvideo6.mp4",
    "catvideo7.mp4",
    "catvideo8.mp4",
    "catvideo9.mp4",
    "catvideo10.mp4",
    "catvideo11.mp4",
    "catvideo12.mp4",
    "catvideo13.mp4",
    "catvideo14.mp4",
    "catvideo15.mp4",
    "catvideo16.mp4",
    "catvideo17.mp4",
    "catvideo18.mp4",
    "catvideo19.mp4",
    "catvideo20.mp4"
];

let lastPlayedVideo = null;

function getRandomVideo() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videos.length);
    } while (videos[randomIndex] === lastPlayedVideo);
    lastPlayedVideo = videos[randomIndex];
    return videos[randomIndex];
}

function loadRandomVideo() {
    const videoElement = document.getElementById('catVideo');
    const randomVideo = getRandomVideo();
    videoElement.src = randomVideo;
    videoElement.play();
}

function showVideoContainer() {
    const logoContainer = document.getElementById('logoContainer');
    const videoContainer = document.getElementById('videoContainer');

    console.log('Transitioning from logo to video container');

    logoContainer.style.opacity = '0';
    setTimeout(() => {
        logoContainer.style.display = 'none';
        videoContainer.style.display = 'block';
        loadRandomVideo();
    }, 2000); // Matches the transition time of 2s
}

window.onload = () => {
    const startupSound = document.getElementById('startupSound');

    console.log('Playing startup sound');

    startupSound.play();

    // Ensure transition happens after the sound ends
    startupSound.onended = () => {
        console.log('Startup sound ended');
        showVideoContainer();
    };

    // Fallback in case the `onended` event doesn't fire
    setTimeout(showVideoContainer, 5000); // Adjust the timeout as needed (length of your startup sound)
};

document.getElementById('nextButton').addEventListener('click', loadRandomVideo);

