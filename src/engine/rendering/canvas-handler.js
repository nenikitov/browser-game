import { Vector2d } from "../utils/vector.js";

/**
 * Handles canvas initialization
 * Provides a simpler way of drawing objects onto a canvas
 */
export class CanvasHandler {
    //#region Fields
    /** @const @private @type {HTMLCanvasElement} Canvas object */
    _canvas;
    /** @const @private @type {CanvasRenderingContext2D} 2d drawing context of the canvas */
    _ctx;
    /** @const @private @type {number} Aspect ration (width / height) */
    _ratio;
    /** @const @private @type {number} Rendering resolution multiplier */
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
        this._canvas = document.querySelector('#' + canvasId);
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
     * Aspect ratio (width / height)
     * @returns {number} Aspect ratio
     */
    getAspectRatio() {
        return this._ratio;
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
     * Get the multiplier for rendering resolution
     * @returns {number} Resolution scale
     */
    getResolutionScale() {
        return this._resScale;
    }
    /**
     * Automatically adjust the size to the largest rectangle of current aspect ratio
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
    /** @private */
    _setRenderResolution(width, height, useResolutionScale = true) {
        const scale = useResolutionScale ? this._resScale : 1;
        this._canvas.width = width * scale;
        this._canvas.height = height * scale;
    }
    /** @private */
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
    drawImage(image, position, size, cropStart = undefined, cropSize = undefined) {
        cropStart = cropStart || new Vector2d(0, 0);
        cropSize = cropSize || new Vector2d(image.naturalWidth - cropStart.x, image.naturalHeight - cropStart.y);

        this._ctx.drawImage(image, cropStart.x, cropStart.y, cropSize.x, cropSize.y, position.x, position.y, size.x, size.y);
    }
    //#endregion
}
