import { AssetBase } from './assets/asset-base.js'
import { AssetImage } from './assets/asset-image.js';

const assetTypeLookup = {
    'image': AssetImage,
    //TODO add sound assets
}

/**
 * Handles the loading of the assets
 */
export class AssetHandler {
    /** @private @type {AssetBase[]} Hash map of all image assets that are loaded or to be loaded */
    static _assets = {};

    /**
     * Returns the loaded asset or loads it
     * @param {string} source Path the the file
     * @returns {AssetBase}
     */
    static get(type, source) {
        if (! this._assets[source]) {
            this._assets[source] = new assetTypeLookup[type](source);
        }

        return this._assets[source];
    }
}
