/**
 * Created by matthew on 9/16/14.
 */

module Jectionary {
    export var $: any;
}

module Jectionary.Events {
    export function register(eventName: string) {

    }

    export function listen(eventName: string,
                           processor: (name: string, context: any, sender: any, data: any) => any) {

    }

    export function trigger(eventName: string, context: any, sender: any, data: any) {

    }

    export function route(fromEventName: string, toEventname: string) {

    }
}