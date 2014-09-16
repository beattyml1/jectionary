/**
 * Created by matthew on 9/16/14.
 */

/// <reference path="jectionary.core.ts"/>
module Jectionary.Controls {
    export interface IControl {
        selector(): string;
        createFromElement(jQueryObject: any): void;
    }

    export function registerControl(control: IControl) {
        controls.push(control);
    }

    var controls: IControl[] = [];

    export function refreshControls(context: any, sender: any, data: any) {
        $.each(controls, (index: number, control: IControl)=>{
            var $controlElement = $(context).find(control.selector());
            control.createFromElement($controlElement);
        });

    }

    export function init() {
        Jectionary.Events.route('Jectionary.Ajax.ajaxHtmlViewLoaded', 'Jectionary.Controls.refreshControls');
        Jectionary.Events.listen('Jectionary.Controls.refreshControls',  refreshControls);
    }
}