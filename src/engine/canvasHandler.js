export class CanvasHandler {
    //#region Fields
    /** Canvas object */
    #canvas;
    /** 2d drawing context of the canvas */
    #ctx;
    /** Aspect ration (width / height) */
    #ratio;
    /** Rendering resolution multiplier */
    #resScale;
    //#endregion


    //#region Constructors
    /**
     * Init the canvas handler
     * @param {string} canvasId String id of the canvas object to render the game
     * @param {number} aspectRatio Aspect ratio (width / height)
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    constructor(canvasId, aspectRatio, resolutionScale) {
        this.#canvas = document.querySelector("#" + canvasId);
        this.#ctx = this.#canvas.getContext('2d');

        this.setAspectRatio(aspectRatio);
        this.setResolutionScale(resolutionScale);

        this.adjustSize();
    }
    //#endregion


    //#region Size
    /**
     * Update the aspect ratio of the canvas
     * @param {number} aspectRatio Aspect ratio (width / height)
     */
    setAspectRatio(aspectRatio) {
        this.#ratio = aspectRatio;
        this.clear();
    }
    /**
     * Update the rendering resolution
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    setResolutionScale(resolutionScale) {
        this.#resScale = resolutionScale;
        this.clear();
    }
    /**
     * Automatically adjust the size to the bigest rectangle of current aspect ratio
     */
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
    //#endregion

    //#region Drawing
    /**
     * Clear the rendering surface
     */
    clear() {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
    drawTest() {
        this.#ctx.fillStyle = 'green';
        this.#ctx.fillRect(20, 20, 150, 100);
    }
    drawTest2() {
        this.#ctx.fillStyle = 'red';
        this.#ctx.fillRect(40, 40, 150, 100);
    }
    //#endregion
}
