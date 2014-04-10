var door_open = function(){
  $.ajax(
    {
      url : linda_url+"/"+space,
      type : 'POST',
      data : {tuple: JSON.stringify(tuple)},
      success : function(data,type){
        alert('door open!!')
      },
      error : function(xhr, stat, err){
        alert('door error..');
      },
      complete : function(){
        goldfish.exit();
      },
      dataType : 'text'
    }
  );
};

$(function(){
  var angle = 0;
  var int_id = setInterval(
    function (){
      var gyro = goldfish.gyroscope();
	  angle -= gyro.z * 3;
      if(angle < 1){
        angle = 0;
      }
      else if(angle > 90){
        clearInterval(int_id);
        door_open();
      }
	  $("#angle").text(angle);
	  $("#turn").rotate(parseInt(angle));
  	}, 50);
});
