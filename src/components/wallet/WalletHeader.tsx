import React from 'react';

interface WalletHeaderProps {
  totalBalance: number;
  onSend: () => void;
  onExchange: () => void;
  onSell: () => void;
}

const WalletHeader: React.FC<WalletHeaderProps> = ({ totalBalance, onSend, onExchange, onSell }) => {
  return (
    <div className="p-4 text-white">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-400">Total Balance</p>
        <h1 className="text-3xl font-bold">${totalBalance}</h1>
      </div>
      
      <div className="flex justify-between px-4">
        <button onClick={onSend} className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
            <span>↑</span>
          </div>
          <span className="text-sm">Send</span>
        </button>
        
        <button onClick={onExchange} className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
            <span>⇄</span>
          </div>
          <span className="text-sm">Exchange</span>
        </button>
        
        <button onClick={onSell} className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-1">
            <span>$</span>
          </div>
          <span className="text-sm">Sell</span>
        </button>
      </div>
    </div>
  );
};

export default WalletHeader; 