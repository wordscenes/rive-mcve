declare module 'react-native/Libraries/Image/resolveAssetSource' {
    import type { ResolvedAssetSource } from './AssetSourceResolver';
    import type { ImageSource } from './ImageSource';
  
    // Custom transformer type used for transforming asset sources.
    type CustomSourceTransformer = (
      resolver: any // Alternatively, if you have a type for AssetSourceResolver, replace `any` with that type.
    ) => ResolvedAssetSource | null | undefined;
  
    /**
     * Given an asset source (either a numeric ID or an ImageSource object), returns a
     * resolved asset source or the source itself if already resolved.
     */
    function resolveAssetSource(source: ImageSource | number | null | undefined): ResolvedAssetSource | ImageSource | null;
  
    namespace resolveAssetSource {
      // Utility function from AssetUtils to pick a scale (type left as any).
      const pickScale: any;
  
      /**
       * Overrides any previously registered custom source transformers with the provided one.
       */
      function setCustomSourceTransformer(transformer: CustomSourceTransformer): void;
  
      /**
       * Adds a transformer into the chain, which will be applied until one returns a non-null value.
       */
      function addCustomSourceTransformer(transformer: CustomSourceTransformer): void;
    }
  
    export = resolveAssetSource;
  }