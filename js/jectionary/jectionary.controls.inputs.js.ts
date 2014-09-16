/**
 * Created by matthew on 9/16/14.
 */

/// <reference path="jectionary.core.ts"/>
/// <reference path="jectionary.controls.ts"/>
module Jectionary.Controls {
    class DateInputBase implements IControl {
        selector() { return 'input[type=date]'; }
        createFromElement(jQueryElement) {
            throw 'Not Implemented';
        }
    }


}