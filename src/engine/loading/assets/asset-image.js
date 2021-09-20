import { AssetBase } from './asset-base.js';

export class AssetImage extends AssetBase {
    load_(source) {
        this.asset_ = new Image();
        this.asset_.src = source;
        this.asset_.addEventListener('load', () => { this.loaded_ = true; });
    }
}
