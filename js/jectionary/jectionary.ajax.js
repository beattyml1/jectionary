/**
* Created by matthew on 9/16/14.
*/
var Jectionary;
(function (Jectionary) {
    /// <reference path="jectionary.core.ts"/>
    (function (Ajax) {
        function init() {
            Jectionary.Events.register('loadView');
            Jectionary.Events.register('ajaxCallComplete');
        }
        Ajax.init = init;

        function post(url, data, callback) {
        }
        Ajax.post = post;

        //    export function get(url: string, callback: (response: any) => any);
        function get(url, data, callback) {
        }
        Ajax.get = get;

        function loadView(selectorOrElement, url, data, callback) {
            get(url, data, function (response) {
                Jectionary.$(selectorOrElement).html(response);
                Jectionary.Events.trigger('Jectionary.Ajax.viewLoaded', selectorOrElement, Jectionary.Ajax, null);
            });
        }
        Ajax.loadView = loadView;
    })(Jectionary.Ajax || (Jectionary.Ajax = {}));
    var Ajax = Jectionary.Ajax;
})(Jectionary || (Jectionary = {}));
//# sourceMappingURL=jectionary.ajax.js.map
