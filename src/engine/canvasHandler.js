export class CanvasHandler {
    //#region Fields
    /** Canvas object */
    _canvas;
    /** 2d drawing context of the canvas */
    _ctx;
    /** Aspect ration (width / height) */
    _ratio;
    /** Rendering resolution multiplier */
    _resScale;
    //#endregion


    //#region Constructors
    /**
     * Init the canvas handler
     * @param {string} canvasId String id of the canvas object to render the game
     * @param {number} aspectRatio Aspect ratio (width / height)
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    constructor(canvasId, aspectRatio, resolutionScale) {
        this._canvas = document.querySelector("#" + canvasId);
        this._ctx = this._canvas.getContext('2d');

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
        this._ratio = aspectRatio;
        this.clear();
    }
    /**
     * Update the rendering resolution
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    setResolutionScale(resolutionScale) {
        this._resScale = resolutionScale;
        this.clear();
    }
    /**
     * Automatically adjust the size to the bigest rectangle of current aspect ratio
     */
    adjustSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const targetWidth = windowHeight * this._ratio; 
        const targetHeight = windowWidth / this._ratio; 

        if (targetHeight > windowHeight) {
            this._setRenderResolution(targetWidth, windowHeight);
            this._setDisplayResolution(targetWidth, targetHeight)
        }
        else {
            this._setRenderResolution(windowWidth, targetHeight);
            this._setDisplayResolution(windowWidth, targetHeight)
        }
    }
    _setRenderResolution(width, height, useResolutionScale = true) {
        const scale = useResolutionScale ? this._resScale : 1;
        this._canvas.width = width * scale;
        this._canvas.height = height * scale;
    }
    _setDisplayResolution(width, height) {
        this._canvas.style.width = `${width}px`;
        this._canvas.style.height = `${height}px`;
    }
    //#endregion

    //#region Drawing
    /**
     * Clear the rendering surface
     */
    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    drawTest() {
        this._ctx.fillStyle = 'green';
        this._ctx.fillRect(20, 20, 150, 100);
    }
    drawTest2() {
        this._ctx.fillStyle = 'red';
        this._ctx.fillRect(40, 40, 150, 100);
    }
    //#endregion
}