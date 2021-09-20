export class AssetBase {
    /** @private A reference to the asset */
    asset_;
    /** @private @type {boolean} If the asset is loaded */
    loaded_;

    constructor(source) {
        this.loaded_ = false;
        this.load_(source);
    }

    /**
     * @private Load the asset
     * @param {string} source The path to the asset file
     */
    load_(source) {};

    /**
     * Return a reference to the asset
     * @returns {object}
     */
    asset() {
        return this.asset_;
    }

    /**
     * Returns if the asset is loaded
     * @returns {boolean}
     */
    loaded() {
        return this.loaded_;
    }
}
