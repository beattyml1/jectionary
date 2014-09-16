/**
* Created by matthew on 9/16/14.
*/
var Jectionary;
(function (Jectionary) {
    /// <reference path="jectionary.core.ts"/>
    (function (UX) {
        function init() {
            Jectionary.Events.register('j.userActivity');

            Jectionary.$(document).bind('click mouseup mousedown mouseenter keyup keydown keypress dragstart dragend dragenter touchstart touchenter', function () {
                Jectionary.Events.trigger('j.userActivity', null, UX, null);
            });

            Jectionary.Events.listen('j.userActivity', function (context, sender, data) {
                timeOfLastUserActivity = new Date().getTime();
            });

            window.setTimeout(processTimer, _timerInterval);
        }
        UX.init = init;

        function processTimer() {
            if (timeOfLastUserActivity < new Date().getTime() - _intactivePeriod) {
            } else {
                window.setTimeout(processTimer, _timerInterval);
            }
        }
        UX.processTimer = processTimer;

        var _timerInterval = 30000;
        var _intactivePeriod = 300000;
        var timeOfLastUserActivity = new Date().getTime();
    })(Jectionary.UX || (Jectionary.UX = {}));
    var UX = Jectionary.UX;
})(Jectionary || (Jectionary = {}));
//# sourceMappingURL=jectionary.ux.js.map
