import type React from "react";
import { forwardRef } from "react";
import Rive, { type RiveRef } from "rive-react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import type { ImageSourcePropType } from "react-native";

type RiveComponentProps = Omit<
  React.ComponentProps<typeof Rive>,
  "url" | "resourceName"
> & {
  source: ImageSourcePropType;
};

// detects if it is an http or file url
const stringIsUrl = (uri: string) => {
  return uri.startsWith("http") || uri.startsWith("file");
};

export const RiveAnimation = forwardRef<RiveRef, RiveComponentProps>(
  (props, ref) => {
    const { source, ...riveProps } = props;
    const resolved = resolveAssetSource(source);

    const uriIsUrl = stringIsUrl(resolved.uri);

    return (
      <Rive
        ref={ref}
        {...riveProps}
        resourceName={!uriIsUrl ? resolved.uri : undefined}
        url={uriIsUrl ? resolved.uri : undefined}
      />
    );
  },
);
