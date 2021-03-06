/*
* adapt-component
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/

define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Testcomponent = ComponentView.extend({
        
        postRender: function() {
            console.log("rendering");   
            // IMPORTANT! 
            // Both of the following methods need to be called inside your view.
            // Use this to set the model status to ready. 
            // It should be used when telling Adapt that this view is completely loaded.
            // This is sometimes used in conjunction with imageReady.
            this.setReadyStatus();
            // Use this to set the model status to complete.
            // This can be used with inview or when the model is set to complete/the question has been answered. 
        },
        //you have to declare component events in this syntax with return
        events: function(){
         return {
          'click .specialbtn' : 'clickbuton'    
         }      
        },
        //called events below
        clickbuton: function(event) {
            event.preventDefault();
            this.setCompletionStatus();
        },         
    });
       
    Adapt.register("testcomponent", Testcomponent);
    
    return Testcomponent;
});