/**
 * Created by matthew on 9/16/14.
 */



/// <reference path="jectionary.core.ts"/>
module Jectionary.Ajax {
    export function init() {
        Jectionary.Events.register('loadView');
        Jectionary.Events.register('ajaxCallComplete');
    }

    export function post(url: string, data: any, callback: (response: any)=>any) {

    }

//    export function get(url: string, callback: (response: any) => any);
    export function get(url: string, data: any, callback: (response: any) => any) {

    }

    export function loadView(selectorOrElement: string, url: string, data: any, callback: (response: any) => any) {
        get(url, data, (response: any)=>{
            Jectionary.$(selectorOrElement).html(response);
            Jectionary.Events.trigger('Jectionary.Ajax.viewLoaded', selectorOrElement, Jectionary.Ajax, null);
        })
    }
}