import React from 'react';

interface Asset {
  name: string;
  symbol: string;
  balance: number;
  balanceUSD: number;
  icon?: string;
}

interface AssetListProps {
  assets: Asset[];
}

const AssetList: React.FC<AssetListProps> = ({ assets }) => {
  return (
    <div className="mt-4">
      {assets.map((asset, index) => (
        <div key={index} className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-3">
              {asset.icon ? (
                <img src={asset.icon} alt={asset.name} className="w-6 h-6" />
              ) : (
                <span className="text-lg">{asset.symbol.charAt(0)}</span>
              )}
            </div>
            <div>
              <h3 className="text-white font-medium">{asset.name}</h3>
              <p className="text-sm text-gray-400">{asset.balance} {asset.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white">${asset.balanceUSD}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetList; 