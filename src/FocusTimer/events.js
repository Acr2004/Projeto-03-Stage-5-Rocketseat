import { controls } from './elements.js';
import * as Actions from './actions.js';
import * as Elements from './elements.js';
import state from './state.js';
import { updateDisplay } from './timer.js';

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        if(typeof Actions[action]() != "function") {
            return;
        }

        Actions[action]();
    });
}

export function setMinutes() {
    Elements.minutes.addEventListener('focus', () => {
        Elements.minutes.textContent = "";
    });

    Elements.minutes.onkeydown = (event) => /\d/.test(event.key);

    Elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent;
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay();
        Elements.minutes.removeAttribute('contenteditable')
    });
}