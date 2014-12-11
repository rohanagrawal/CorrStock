var clog   = require('simpleclog');
var moment = require('moment');
require('twix');
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'AlOzrDBPdchFzvPPhhWFLtfTe'
  , consumer_secret:      'Cmi5rwFAgw5iJwAY1WCs7VEKA47I6XZtzrSsqTxpZi9fvWlhQ2'
  , access_token:         '53014080-1nJM35shK9oKQIaFG8VujKMYqCaa5of5nZcnRMK1p'
  , access_token_secret:  '7V8HvNMrzKxYxMQXLbcDfAUX7TPSOltcb0TprkBUe95fN'
});


var getData = function(stock, startDate, endDate, callback){
  var queryObjHardCode = {
    q:     'MSFT since:2014-12-03 until:2014-12-05',
    count: 200
  };

  var itr = moment(new Date(startDate)).twix(new Date(endDate)).iterate("days");
  var range = [];
  while(itr.hasNext()){
    var day = itr.next();
    var dayNum = day.toDate().getDay();
    if(dayNum !== 0 && dayNum !== 6){
      range.push(day.toISOString().slice(0,10));
    }
  }

  //rangeshould have 
  




};//end getData()