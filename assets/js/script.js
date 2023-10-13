$(document).ready(function(){

    
    $("#formval").validate({
        rules:{
            name:{
                required:true,
                normalizer:function(value){
                    return $.trim(value);
                },
                minlength:3
                },
                email:{
                    required:true,
                },
                subject:{
                    required:true,
                    normalizer:function(value){
                        return $.trim(value);
                    },
                    minlength:6,
                },
                message:{
                    required:true,
                    normalizer:function(value){
                        return $.trim(value);
                    },
                    minlength:10,
                },
        }
        
    })
});


