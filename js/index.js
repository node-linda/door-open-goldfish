$(function(){
    $('#btn_open').click(function(e){
        $('#btn_open').attr('disabled','disabled');
        $.ajax(
            {
                url : app_root+'/open',
                type : 'POST',
                data : '',
                success : function(data, type){
                    alert('door open!');
                },
                error : function(xhr, stat, err){
                    alert('door error..');
                },
                complete : function(){
                    $('#btn_open').attr('disabled', null);
                },
                dataType : 'text'
            }
        );
    });
});
