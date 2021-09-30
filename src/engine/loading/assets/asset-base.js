export class AssetBase {
    /** @private A reference to the asset */
    _asset;
    /** @private @type {boolean} If the asset is loaded */
    _loaded;

    constructor(source) {
        this._loaded = false;
        this._load(source);
    }

    /**
     * @private Load the asset
     * @param {string} source The path to the asset file
     */
    _load(source) {};

    /**
     * Return a reference to the asset
     * @returns {object}
     */
    asset() {
        return this._asset;
    }

    /**
     * Returns if the asset is loaded
     * @returns {boolean}
     */
    loaded() {
        return this._loaded;
    }
}
