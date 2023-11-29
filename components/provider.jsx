'use client';

import { bitsong, bitsongAssetList, osmosis, osmosisAssetList } from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { ssrPersistOptions } from '@quirks/store';
import { keplrExtension, leapExtension, cosmostationExtension } from '@quirks/wallets';

const config = {
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, bitsong],
  assetsLists: [osmosisAssetList, bitsongAssetList],
  persistOptions: ssrPersistOptions,
  sharedOptions: {
    enabled: true,
  }
};

export const Provider = ({ children }) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};
