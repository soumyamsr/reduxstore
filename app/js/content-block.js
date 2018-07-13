import store from './store';
import $ from 'jquery';

$(function(){
    var updateZipCode = function() {
        $('.content-block .zip-code').text(store.getState().zip);
    };
    updateZipCode();
    store.subscribe(updateZipCode);
});
