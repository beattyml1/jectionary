/**
* Created by matthew on 9/16/14.
*/
var Jectionary;
(function (Jectionary) {
    /// <reference path="jectionary.core.ts"/>
    (function (Ajax) {
        function init() {
            Jectionary.Events.register('Jectionary.Ajax.ajaxHtmlViewLoaded');
            Jectionary.Events.register('getCallComplete');
            Jectionary.Events.register('postCallComplete');
        }
        Ajax.init = init;

        function post(url, data, callback) {
            Jectionary.$.post(url, data, function (response) {
                callback(response);
                Jectionary.Events.trigger('postCallComplete', null, Jectionary.Ajax, response);
            });
        }
        Ajax.post = post;

        //    export function get(url: string, callback: (response: any) => any);
        function get(url, data, callback) {
            Jectionary.$.get(url, data, function (response) {
                callback(response);
                Jectionary.Events.trigger('getCallComplete', null, Jectionary.Ajax, response);
            });
        }
        Ajax.get = get;

        function loadHtmlView(selectorOrElement, url, data, callback) {
            get(url, data, function (response) {
                Jectionary.$(selectorOrElement).html(response);
                Jectionary.Events.trigger('Jectionary.Ajax.ajaxHtmlViewLoaded', selectorOrElement, Jectionary.Ajax, null);
            });
        }
        Ajax.loadHtmlView = loadHtmlView;
    })(Jectionary.Ajax || (Jectionary.Ajax = {}));
    var Ajax = Jectionary.Ajax;
})(Jectionary || (Jectionary = {}));
//# sourceMappingURL=jectionary.ajax.js.map
