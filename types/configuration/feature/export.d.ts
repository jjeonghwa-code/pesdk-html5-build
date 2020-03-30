import { ExportFormat } from './exportFormat';
import { ImageFormat } from './imageFormat';
/** A video format. */
export declare enum VideoFormat {
    MP4 = "video/mp4",
    MOV = "video/quicktime"
}
/** A video codec. */
export declare enum VideoCodec {
    H264 = "h264",
    HEVC = "hevc"
}
/** A serialization export type. */
export declare enum SerializationExportType {
    /** The exported serialization is saved to a file and the corresponding file URL is returned. */
    /** The exported serialization is returned as an object. */
    OBJECT = "object"
}
export declare class ExportConfiguration {
    /**
     * Image export configuration if the editor supports image editing.
     */
    image?: {
        /**
         *
         * @example // Defaults to:
         * ExportFormat.Image
         */
        exportType?: ExportFormat;
        /**
         * The image file format of the generated high resolution image.
         * @example // Defaults to:
         * ImageFormat.JPEG
         */
        format?: ImageFormat;
        /**
         * The compression quality to use when creating the output image with a lossy file format.
         * @example // Defaults to:
         * 0.9
         */
        quality?: number;
        enableDownload?: boolean;
    };
    /**
     * Video export configuration if the editor supports video editing.
     */
    video?: {
        /**
         * The video container format to export.
         * @example // Defaults to:
         * VideoFormat.MP4
         */
        format?: VideoFormat;
        /**
         * The video codec to use for the exported video.
         * @example // Defaults to:
         * VideoCodec.H264
         */
        codec?: VideoCodec;
        /**
         * The compression quality to use when exporting to VideoCodec.HEVC.
         * @example // Defaults to:
         * 0.9
         */
        quality?: number;
        /**
         * The bit rate in bits per second to use when exporting to VideoCodec.H264.
         * @example // Defaults to:
         * null
         */
        bitRate?: number | null;
    };
    /**
     * The filename for the exported data if the `exportType` is not `ImageExportType.DATA_URL`.
     * The correct filename extension will be automatically added
     * based on the selected export format. It can be an absolute path or file URL or a relative path.
     * If some relative path is chosen it will be created in a temporary system directory and overwritten
     * if the corresponding file already exists. If the value is `null` an new temporary file will be
     * created for every export.
     * @example // Defaults to:
     * 'photoeditorsdk-export'
     */
    filename?: string | null;
    /**
     * Export configuration of the serialized image and video editing operations that were applied to
     * the input media loaded into the editor. This also allows to recover these operations the next
     * time the editor is opened again.
     */
    serialization?: {
        /**
         * Whether the serialization of the editing operations should be exported.
         * @example // Defaults to:
         * false
         */
        enabled?: boolean;
        /**
         *
         * @example // Defaults to:
         * SerializationExportType.FILE_URL
         */
        exportType?: SerializationExportType;
        /**
         * The filename for the exported serialization data if the `exportType` is `SerializationExportType.FILE_URL`.
         * The filename extension for JSON will be automatically added.
         * It can be an absolute path or file URL or a relative path.
         * If some relative path is chosen it will be created in a temporary system directory and overwritten
         * if the corresponding file already exists. If the value is `null` an new temporary file will be
         * created for every export based on the filename for the exported image or video data.
         * @example // Defaults to:
         * null
         */
        filename?: string | null;
        /**
         * Whether the serialization data should include the original input image data.
         * @example // Defaults to:
         * false
         */
        embedSourceImage?: boolean;
    };
}
