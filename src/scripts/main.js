import Plyr from 'plyr';

const player = new Plyr('#player');
player.muted = true;
player.loop = true;
player.autoplay = true;

window.onload = () => {
    player.play();
};