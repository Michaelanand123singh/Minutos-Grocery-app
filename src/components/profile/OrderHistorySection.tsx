// src/app/components/profile/OrderHistorySection.tsx
import React from 'react';

interface OrderItem {
  id: string;
  date: string;
  time: string;
  cost: string;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  items: string[];
}

const OrderHistorySection: React.FC = () => {
  // Sample order data
  const orders: OrderItem[] = [
    {
      id: 'ORD12345',
      date: '2nd Feb 2025',
      time: '04:56 pm',
      cost: 'INR 450',
      status: 'Delivered',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    },
    {
      id: 'ORD12346',
      date: '2nd Feb 2025',
      time: '04:56 pm',
      cost: 'INR 320',
      status: 'Delivered',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    }
  ];
  
  return (
    <div className="flex-grow bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-6">Order History</h2>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-md p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium">Order {order.status}</p>
                  <p className="text-sm text-gray-500">
                    Ordered at {order.date}, {order.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Cost {order.cost}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {order.items.map((_, index) => (
                  <div 
                    key={index} 
                    className="h-10 w-10 bg-gray-200 rounded-md mr-2"
                  ></div>
                ))}
              </div>
              
              <div className="flex justify-end">
                <button className="text-red-500">Order Again</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistorySection;