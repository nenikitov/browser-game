export const assetTypes = {
    IMAGE: 'img',
    AUDIO: 'sound'
}

export class Asset {
    /** @private @type {Image | Audio} A reference to the asset */
    asset_;
    /** @private @type {boolean} If the asset is loaded */
    loaded_;
    
    constructor(type, source) {
        switch (type) {
            // Image
            case assetTypes.IMAGE:
                this.asset_ = new Image(0, 0);
                this.asset_.src = source;
                this.asset_.addEventListener('load', () => { this.loaded_ = true });
                break;
            // Audio
            case assetTypes.AUDIO:
                this.asset_ = new Audio(source);
                this.asset_.addEventListener('loadeddata', () => { this.loaded_ = true });
                break;
        }
    }

    /**
     * Return a reference to the asset
     * @returns {Image | Audio}
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
