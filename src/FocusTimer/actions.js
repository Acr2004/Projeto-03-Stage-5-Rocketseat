import state from "./state.js";
import * as Timer from './timer.js';
import * as Elements from './elements.js';
import * as Sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    
    Timer.countDown();
    Sounds.buttonPressAudio.play();
}

export function setTimer() {
    Elements.minutes.setAttribute('contenteditable', true);
    Elements.minutes.focus();
}

export function restartTimer() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    Timer.updateDisplay();
}

export function toggleMusic() {
    state.isMute = !document.documentElement.classList.toggle('music-on');

    if(!state.isMute) {
        Sounds.bgAudio.play();
    }
    else {
        Sounds.bgAudio.pause();
    }
}