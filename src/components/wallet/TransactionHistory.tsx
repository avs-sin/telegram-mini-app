import React from 'react';

interface Transaction {
  id: string;
  type: 'sent' | 'received';
  amount: number;
  symbol: string;
  timestamp: string;
  counterparty: string;
  counterpartyAvatar?: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="mt-4">
      <h2 className="text-gray-400 text-sm font-medium px-4 mb-2">TRANSACTION HISTORY</h2>
      <div className="flex flex-col">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-600 rounded-full mr-3">
                {tx.counterpartyAvatar ? (
                  <img 
                    src={tx.counterpartyAvatar} 
                    alt={tx.counterparty} 
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {tx.counterparty.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="text-white">{tx.counterparty}</p>
                <p className="text-sm text-gray-400">{tx.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={tx.type === 'received' ? 'text-green-500' : 'text-red-500'}>
                {tx.type === 'received' ? '+' : '-'}{tx.amount} {tx.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory; 