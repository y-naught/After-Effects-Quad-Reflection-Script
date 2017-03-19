{

function QuadReflection()
    {
        var scriptName = "Quad Reflection";
        
        
        // Checks to see if the user has an active Composition
        var activeItem = app.project.activeItem;
        if((activeItem == null) || !(activeItem instanceof CompItem))
            {
                alert("Please Open and Select a Composition First");
            }
        else{
            //
            var selectedLayers = activeItem.selectedLayers;
            
            // Must have a single layer selected for the function won't run
            if (activeItem.selectedLayers.length > 1)
                {
                    alert("Please Select One Layer At A Time");
                }
            if (activeItem.selectedLayers.length == 0)
                {
                    alert("You don't have a layer selected...");
                }
            else {
                
                var activeComp = activeItem;
                
                app.beginUndoGroup(scriptName);
                
                //reduces the layers to simple variables
                var Layers = activeComp.selectedLayers;
                var Layer = activeComp.selectedLayers[0];
                var Layer2 = Layer.duplicate();
                var Layer3 = Layer.duplicate();
                var Layer4 = Layer.duplicate();
                
                //creates variables that contain the comp height and width in pixels
                var compDimX = activeComp.width;
                var compDimY = activeComp.height;
                
                //scales the layer you selected and uses the negative scale to flip them vertically or horizontally 
                //for reflection at the seams
                Layer.scale.setValue([50, 50]);
                Layer2.scale.setValue([-50, 50]);
                Layer3.scale.setValue([50,-50]);
                Layer4.scale.setValue([-50,-50]);
                
                //takes all of the layers and repositions them in their respective quadrants
                Layer.position.setValue([(compDimX / 4),(compDimY / 4) , 0]);
                Layer2.position.setValue([((compDimX * 3) / 4), (compDimY / 4),0]);
                Layer3.position.setValue([(compDimX / 4), ((compDimY * 3) / 4), 0]);
                Layer4.position.setValue([((compDimX * 3) / 4), ((compDimY * 3) / 4), 0]);

                
                app.endUndoGroup();
            }
        }
    }
    //runs the function
    QuadReflection(this);
}