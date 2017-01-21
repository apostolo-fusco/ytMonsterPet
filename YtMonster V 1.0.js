var sendingRequest = 0;
var liker = function(){
		sendingRequest++;
	$.ajax({
                                url: 'https://api.ytmonster.net/client/watch/anouar1991',
                                success:function(data){
                                     var info = data.split('#');
                                     var videoId = info[0].split('?v=');
                                     sendingRequest--;
                                     if(videoId && videoId[0] != "Already watched."){
                                     	sendingRequest++;
                                     	console.log(videoId);

                                     	 $.ajax({
                             						 content: this,
                             						 url: 'https://api.ytmonster.net/client/mark/anouar1991/'+videoId[1],
                             								 success: function(data){
                                									sendingRequest--;
                                    					}           
                                				})

                                     }else{
                                     	//liker();
                                     }
                                    
                                 }
                             })

}
setInterval(function(){
	if(!sendingRequest){
		liker();
	}
},500)

var liker2 = function(){

	$.ajax({
                                url: 'https://api.ytmonster.net/client/watch/anouar1991',
                                success:function(data){
                                     var info = data.split('#');
                                     var videoId = info[0].split('?v=');
                                     
                                     if(videoId ){
                                     	console.log(videoId);
                                     	$.ajax({
                             						 content: this,
                             						 url: 'https://api.ytmonster.net/client/mark/anouar1991/'+videoId[1],
                             								 success: function(data){
                                    					}           
                                				})
                                     	 $.ajax({
                             						 content: this,
                             						 url: 'https://api.ytmonster.net/client/mark/anouar1991/'+videoId[1],
                             								 success: function(data){
                                									liker2();
                                    					}           
                                				})

                                     }else{
                                     	liker2();
                                     }
                                    
                                 }
                             })
}
liker2();

