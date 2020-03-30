import { TransformCategory, ExistingTransformCategory } from './asset';
export declare class TransformConfiguration {
    /**
     * Defines all allowed crop aspect ratios. The crop ratio cards are shown in the given order.
     * @example // Defaults to:
     *  [{
     *  "identifier": "imgly_transforms_common",
     *  "items": [
     *    { "identifier": "imgly_transform_common_custom" },
     *    { "identifier": "imgly_transform_common_square" },
     *    { "identifier": "imgly_transform_common_4" },
     *    { "identifier": "imgly_transform_common_16" },
     * ] }, {
     *  "identifier": "imgly_transforms_facebook",
     *    "items": [
     *      { "identifier": "imgly_transform_facebook_profile" },
     *      { "identifier": "imgly_transform_facebook_ad" },
     *      { "identifier": "imgly_transform_facebook_post" },
     *      { "identifier": "imgly_transform_facebook_cover" }]
     * }]
     */
    categories?: Array<TransformCategory | ExistingTransformCategory>;
    /**
     * Decides whether rotation is enabled
     * @example // Defaults to:
     * true
     */
    enableRotation?: boolean;
    /**
     * Decides whether flip is enabled
     * @example // Defaults to:
     * true
     */
    enableFlip?: boolean;
    /**
     * Whether categories should be flattened which effectively hides the categories.
     * If this is enabled all crop ratios will be shown in the top-level of the transform selection tool
     * ordered according to their parent category.
     * @example // Defaults to:
     * false
     */
    flattenCategories?: boolean;
}
