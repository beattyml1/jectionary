/**
* Created by matthew on 9/16/14.
*/
var Jectionary;
(function (Jectionary) {
    /// <reference path="jectionary.core.ts"/>
    (function (Controls) {
        function registerControl(control) {
            controls.push(control);
        }
        Controls.registerControl = registerControl;

        var controls = [];

        function refreshControls(context, sender, data) {
            Jectionary.$.each(controls, function (index, control) {
                var $controlElement = Jectionary.$(context).find(control.selector());
                control.createFromElement($controlElement);
            });
        }
        Controls.refreshControls = refreshControls;

        function init() {
            Jectionary.Events.route('Jectionary.Ajax.ajaxHtmlViewLoaded', 'Jectionary.Controls.refreshControls');
            Jectionary.Events.listen('Jectionary.Controls.refreshControls', refreshControls);
        }
        Controls.init = init;
    })(Jectionary.Controls || (Jectionary.Controls = {}));
    var Controls = Jectionary.Controls;
})(Jectionary || (Jectionary = {}));
//# sourceMappingURL=jectionary.controls.js.map
