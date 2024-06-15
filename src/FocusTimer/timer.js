import state from "./state.js";
import * as Elements from './elements.js';
import { restartTimer } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countDown() {
    clearTimeout(state.countDownId);

    if(!state.isRunning) {
        return;
    }

    let minutes = Number(Elements.minutes.textContent);
    let seconds = Number(Elements.seconds.textContent);

    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if(minutes < 0) {
        restartTimer();
        kitchenTimer.play();
        return;
    }

    updateDisplay(minutes, seconds);
    state.countDownId = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    Elements.minutes.textContent = String(minutes).padStart(2, "0");
    Elements.seconds.textContent = String(seconds).padStart(2, "0");
}