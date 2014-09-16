/**
 * Created by matthew on 9/16/14.
 */

/// <reference path="jectionary.core.ts"/>
module Jectionary.UX {
    export function init() {
        Events.register('j.userActivity');

        $(document).bind('click mouseup mousedown mouseenter keyup keydown keypress dragstart dragend dragenter touchstart touchenter', ()=>{
            Events.trigger('j.userActivity', null, UX, null);
        });

        Events.listen('j.userActivity', (context, sender, data)=> {
            timeOfLastUserActivity = new Date().getTime();
        });

        window.setTimeout(processTimer, _timerInterval);
    }

    export function processTimer() {
        if (timeOfLastUserActivity < new Date().getTime() - _intactivePeriod) {

        } else {
            window.setTimeout(processTimer, _timerInterval);
        }
    }

    var _timerInterval = 30000; // 30 Seconds
    var _intactivePeriod = 300000 // 5 Minutes
    var timeOfLastUserActivity: number = new Date().getTime();
}