/**
* Created by matthew on 9/16/14.
*/
var Jectionary;
(function (Jectionary) {
    Jectionary.$;
})(Jectionary || (Jectionary = {}));

var Jectionary;
(function (Jectionary) {
    (function (Events) {
        function register(eventName) {
        }
        Events.register = register;

        function listen(eventName, processor) {
        }
        Events.listen = listen;

        function trigger(eventName, context, sender, data) {
        }
        Events.trigger = trigger;

        function route(fromEventName, toEventname) {
        }
        Events.route = route;
    })(Jectionary.Events || (Jectionary.Events = {}));
    var Events = Jectionary.Events;
})(Jectionary || (Jectionary = {}));
//# sourceMappingURL=jectionary.core.js.map
