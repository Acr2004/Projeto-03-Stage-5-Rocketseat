import state from './state.js';
import * as Events from './events.js';
import * as Timer from './timer.js';

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    Timer.updateDisplay();

    Events.registerControls();
    Events.setMinutes();
}