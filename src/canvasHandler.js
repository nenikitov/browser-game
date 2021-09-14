class CanvasHandler {
    canvas;
    context;
    aspectRatio;

    constructor(canvasId, aspectRatio) {
        this.canvas = document.querySelector("#" + canvasId);
        this.context = this.canvas.context;
    
        this.aspectRatio = aspectRatio;
    }
    
    forceResize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    adjustSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const targetWidth = windowHeight * this.aspectRatio; 
        const targetHeight = windowWidth / this.aspectRatio; 

        if (targetHeight > windowHeight) {
            this.forceResize(targetWidth, windowHeight);
        }
        else {
            this.forceResize(windowWidth, targetHeight);
        }
    }
}


