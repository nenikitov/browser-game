import { Vector2d } from "../utils/vector.js";

/**
 * Handles canvas initialization
 * Provides a simpler way of drawing objects onto a canvas
 */
export class CanvasHandler {
    //#region Fields
    /** @const @private @type {HTMLCanvasElement} Canvas object */
    canvas_;
    /** @const @private @type {CanvasRenderingContext2D} 2d drawing context of the canvas */
    ctx_;
    /** @const @private @type {number} Aspect ration (width / height) */
    ratio_;
    /** @const @private @type {number} Rendering resolution multiplier */
    resScale_;
    //#endregion


    //#region Constructors
    /**
     * Init the canvas handler
     * @param {string} canvasId String id of the canvas object to render the game
     * @param {number} aspectRatio Aspect ratio (width / height)
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    constructor(canvasId, aspectRatio, resolutionScale) {
        this.canvas_ = document.querySelector("#" + canvasId);
        this.ctx_ = this.canvas_.getContext('2d');

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
        this.ratio_ = aspectRatio;
        this.clear();
    }
    /**
     * Aspect ratio (width / height)
     * @returns {number} Aspect raio
     */
    getAspectRatio() {
        return this.ratio_;
    }
    /**
     * Update the rendering resolution
     * @param {number} resolutionScale Multiplier for rendering resolution
     */
    setResolutionScale(resolutionScale) {
        this.resScale_ = resolutionScale;
        this.clear();
    }
    /**
     * Get the multiplier for rendering resolution
     * @returns {number} Resolution scale
     */
    getResolutionscale() {
        return this.resScale_;
    }
    /**
     * Automatically adjust the size to the bigest rectangle of current aspect ratio
     */
    adjustSize() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const targetWidth = windowHeight * this.ratio_; 
        const targetHeight = windowWidth / this.ratio_; 

        if (targetHeight > windowHeight) {
            this.setRenderResolution_(targetWidth, windowHeight);
            this.setDisplayResolution_(targetWidth, targetHeight)
        }
        else {
            this.setRenderResolution_(windowWidth, targetHeight);
            this.setDisplayResolution_(windowWidth, targetHeight)
        }
    }
    /** @private */
    setRenderResolution_(width, height, useResolutionScale = true) {
        const scale = useResolutionScale ? this.resScale_ : 1;
        this.canvas_.width = width * scale;
        this.canvas_.height = height * scale;
    }
    /** @private */
    setDisplayResolution_(width, height) {
        this.canvas_.style.width = `${width}px`;
        this.canvas_.style.height = `${height}px`;
    }
    //#endregion

    //#region Drawing
    /**
     * Clear the rendering surface
     */
    clear() {
        this.ctx_.clearRect(0, 0, this.canvas_.width, this.canvas_.height);
    }
    drawImage(image, position, size, cropStart = undefined, cropSize = undefined) {
        cropStart = cropStart || new Vector2d(0, 0);
        cropSize = cropSize || new Vector2d(image.naturalWidth - cropStart.x, image.naturalHeight - cropStart.y);

        this.ctx_.drawImage(image, cropStart.x, cropStart.y, cropSize.x, cropSize.y, position.x, position.y, size.x, size.y);
    }
    //#endregion
}
