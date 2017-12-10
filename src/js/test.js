/**
    * Valtech UI exercise
    * Author: Jayson Hunter
    * Date: December 2017
    * Version: 1.0.0
*/


var valtech = (function(){

    function init() {
        var $body,
            $sidebarMenuLink,
            BODY_TAG = 'body',
            SIDEBAR_MENU_LINK_CLASS = '.js-sidebar-link',
            SIDEBAR_HIDDEN_CLASS = 'sidebar-is-hidden';

        $body = $(BODY_TAG);
        $sidebarMenuLink = $(SIDEBAR_MENU_LINK_CLASS);

        if($sidebarMenuLink.length >0) {
            $sidebarMenuLink.on('click touchend', function(e) {
                e.preventDefault();
                $body.toggleClass(SIDEBAR_HIDDEN_CLASS);
            })
        }
    }

    return {
        init: init
    };

})();


$(document).ready(function() {
    valtech.init();
})