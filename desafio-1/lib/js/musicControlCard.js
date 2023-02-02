import img from '../img/img.png';
import playImg from '../img/play.svg';
import playBackImg from '../img/play-back.svg';
import playForwardImg from '../img/play-forward.svg';

export function controlCard() {
 
    document.querySelector('#app').innerHTML += `
    <div class="frame-play"> 
        <div>
            <div class="img-play">
                <img src="${img}" alt="">
            </div>

            <div class="art-info">
                <h1>Acorda Devinho</h1>
                <span>Banda Rocketseat</span>
            </div>
        </div>
        <div class="player-controls">
            <img src="${playBackImg}" alt="">
            <img src="${playImg}" alt="">
            <img src="${playForwardImg}" alt="">
        </div>
        <div class="trak-play">
            <span></span>
            <div class="trak-time">
                <span>3:20</span>
                <span>00:12</span>
            </div>
        </div>
    </div>
`;
}