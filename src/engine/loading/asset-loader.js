import { Asset } from './asset.js'

/**
 * Handles the loading of the assets
 */
export class AssetLoader {
    /** @private @type {Asset[]} Hash map of all image assets that are loaded or to be loaded */
    static assets_ = {};

    /**
     * Returns the loaded asset or loads it
     * @param {string} source Path the the file
     * @returns {Asset}
     */
    static get(source) {
        return assets_[source];
    }
}
