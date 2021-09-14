export class CanvasHandler {
    //#region Fields
    #canvas;
    #ctx;
    #ratio;
    #resScale;
    //#endregion

    constructor(canvasId, aspectRatio, resolutionScale) {
        this.#canvas = document.querySelector("#" + canvasId);
        this.#ctx = this.#canvas.getContext('2d');

        this.setAspectRatio(aspectRatio);
        this.setResolutionScale(resolutionScale);

        this.adjustSize();
    }

    setAspectRatio(aspectRatio) {
        this.#ratio = aspectRatio;
        this.clear();
    }

    setResolutionScale(resolutionScale) {
        this.#resScale = resolutionScale;
        this.clear();
    }


    clear() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }

    
    adjustSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const targetWidth = windowHeight * this.#ratio; 
        const targetHeight = windowWidth / this.#ratio; 

        if (targetHeight > windowHeight) {
            this.#setRenderResolution(targetWidth, windowHeight);
            this.#setDisplayResolution(targetWidth, targetHeight)
        }
        else {
            this.#setRenderResolution(windowWidth, targetHeight);
            this.#setDisplayResolution(windowWidth, targetHeight)
        }
    }

    #setRenderResolution(width, height, useResolutionScale = true) {
        const scale = useResolutionScale ? this.#resScale : 1;
        this.#canvas.width = width * scale;
        this.#canvas.height = height * scale;
    }
    #setDisplayResolution(width, height) {
        this.#canvas.style.width = `${width}px`;
        this.#canvas.style.height = `${height}px`;
    }
}
