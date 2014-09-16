/**
 * Created by matthew on 9/16/14.
 */



/// <reference path="jectionary.core.ts"/>
module Jectionary.Ajax {
    export function init() {
        Jectionary.Events.register('Jectionary.Ajax.ajaxHtmlViewLoaded');
        Jectionary.Events.register('getCallComplete');
        Jectionary.Events.register('postCallComplete');
    }

    export function post(url: string, data: any, callback: (response: any)=>any) {
        Jectionary.$.post(url, data, (response: any) => {
            callback(response);
            Jectionary.Events.trigger('postCallComplete', null, Jectionary.Ajax, response);
        });
    }

//    export function get(url: string, callback: (response: any) => any);
    export function get(url: string, data: any, callback: (response: any) => any) {
        Jectionary.$.get(url, data, (response: any) => {
            callback(response);
            Jectionary.Events.trigger('getCallComplete', null, Jectionary.Ajax, response);
        });
    }

    export function loadHtmlView(selectorOrElement: string, url: string, data: any, callback: (response: any) => any) {
        get(url, data, (response: any) => {
            Jectionary.$(selectorOrElement).html(response);
            Jectionary.Events.trigger('Jectionary.Ajax.ajaxHtmlViewLoaded', selectorOrElement, Jectionary.Ajax, null);
        })
    }
}