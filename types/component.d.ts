import React from 'react';
import { EventEmitter } from './eventEmitter';
import { UIEvent } from './events';
import { Configuration } from './configuration';
export declare class PhotoEditorSDKUIComponent extends React.Component<Configuration> {
    ui: EventEmitter<UIEvent>;
    /**
     * Disposes the PhotoEditor SDK Engine instance
     */
    dispose(): void;
    /**
     * Closes the PhotoEditor SDK UI and disposes all Engine instance
     */
    close(): void;
    /**
     * Exports an image
     * @param {Boolean} download = false
     * @return {Promise}
     */
    export(download?: boolean): Promise<string>;
    /**
     * Dynamically sets the image to the ui
     * @param {Image} image
     */
    setImage(image: string | HTMLImageElement): void;
}
