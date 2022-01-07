import React, { CSSProperties, memo, useCallback, useState } from 'react';

import { useAssetMetadata, getThumbnailUri } from 'lib/temple/front';

import AssetIcon from './AssetIcon';

export type SwapAssetIconProps = {
  assetSlug: string;
  className?: string;
  style?: CSSProperties;
  size?: number;
};

const SwapAssetIcon = memo((props: SwapAssetIconProps) => {
  const { assetSlug, className, style, size } = props;
  const metadata = useAssetMetadata(assetSlug);

  const thumbnailUri = getThumbnailUri(metadata);

  const [imageDisplayed, setImageDisplayed] = useState(true);
  const handleImageError = useCallback(() => setImageDisplayed(false), [setImageDisplayed]);

  return (
    <AssetIcon
      assetSlug={assetSlug}
      imageDisplayed={imageDisplayed}
      thumbnailUri={thumbnailUri}
      handleImageError={handleImageError}
      className={className}
      style={style}
      size={size}
    />
  );
});

export default SwapAssetIcon;
