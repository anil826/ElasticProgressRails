// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks

//= require TweenMax.min.js
//= require elastic-progress.js
//= require main.js

//= require_tree .

function fakeLoading($obj, speed, failAt) {
    if (typeof speed == "undefined") speed = 2;
    if (typeof failAt == "undefined") failAt = -1;
    var v = 0;
    var l = function() {
        if (failAt > -1) {
            if (v >= failAt) {
                if (typeof $obj.jquery != "undefined") {
                    $obj.ElasticProgress("fail");
                } else {
                    $obj.fail();
                }
                return;
            }
        }
        v += Math.pow(Math.random(), 2) * 0.1 * speed;

        if (typeof $obj.jquery != "undefined") {
            $obj.ElasticProgress("setValue", v);
        } else {
            $obj.setValue(v);
        }
        if (v < 1) {
            TweenMax.delayedCall(0.05 + (Math.random() * 0.14), l)
        }
    };
    l();
}