import { Configuration } from './configuration';
import { EventEmitter } from './eventEmitter';
import { UIEvent } from './events';
export declare abstract class EditorInterface extends EventEmitter<UIEvent> {
    /**
     * Disposes the PhotoEditor SDK Engine instance
     */
    abstract dispose: () => void;
    /**
     * Closes the PhotoEditor SDK UI and disposes all Engine instance
     */
    abstract close: () => void;
    /**
     * Exports an image
     * @param {Boolean} download = false
     * @return {Promise}
     */
    abstract export: (download?: boolean) => Promise<string>;
    /**
     * Dynamically sets the image to the ui
     * @param {Image} image
     */
    abstract setImage: (image: string | HTMLImageElement) => void;
}
/**
 * The UI of PhotoEditor SDK
 */
export interface PhotoEditorSDKUIInterace {
    init: (config: Configuration) => Promise<EditorInterface>;
}
