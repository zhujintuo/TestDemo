/**
 * http://usejsdoc.org/
 */
var Single=require('./single_class');
var singleObj1=new Single('2015-12-03');
var singleClass1=singleObj1.getInstance('2015-12-03');
singleClass1.show();

var singleObj2=new Single('2015-12-04');
var singleClass2=singleObj2.getInstance('2015-12-04s');
singleClass2.show();
