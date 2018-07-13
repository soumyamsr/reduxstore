import store from './store';
import $ from 'jquery';

$('#findStore').on( 'click', function(){
   let newValue = $('input[name=store-input]').val();
   let storeType = isNaN(newValue) ? 'NAME' : 'ZIP';
   store.dispatch({type: storeType, payload: {
     zip: newValue
   }});
});
