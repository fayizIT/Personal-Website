$(document).ready(function(){
    $('#signup-form').validate({
        rules:{
            Name:{
                required:true,
                minlength:4
            },

            Email:{
                required:true,
                minlength:4
            },
            Phone:{
                matches: "[0-9]+",  // <-- no such method called "matches"!
        minlength:10,
        maxlength:10
            }
            
        }
        
    })
})                        



