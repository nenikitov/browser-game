import { AssetBase } from './asset-base.js';

export class AssetImage extends AssetBase {
    _load(source) {
        this._asset = new Image();
        this._asset.src = source;
        this._asset.addEventListener('load', () => { this.loaded_ = true; });
    }
}
