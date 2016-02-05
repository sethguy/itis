var itis = function(){

this.lray = function( ray , x  ){

var l_ = [ new Array() ];

for( var i = 0; i < ray.length; i++) {

l_[ l_.length-1 ].push( ray[i] );

if( (i+1)%x==0 ){

if( i < ray.length-1 )l_.push( new Array() );

}

}// loop

return l_;
}//lray


}//itis


