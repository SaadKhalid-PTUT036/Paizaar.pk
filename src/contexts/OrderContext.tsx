import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CartItem } from "./CartContext";

interface OrderItem {
  name: string;
  size?: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerId?: string;
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    province: string;
    postalCode: string;
  };
  items: OrderItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  paymentMethod: string;
  date: string;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'status' | 'date'>) => string;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Generate a simple unique ID
let orderIdCounter = Date.now();
function generateOrderId() {
  orderIdCounter++;
  return `ORD-${orderIdCounter}`;
}

// Get orders from localStorage or initialize with default orders
const getOrdersFromStorage = () => {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    return JSON.parse(storedOrders);
  }
  // Return default orders if no stored orders exist
  return [
    { 
      id: "ORD-1001", 
      customerInfo: { fullName: "Ahmad Khan", email: "ahmad@example.com", phone: "03001234567", address: "123 Main St", city: "Karachi", province: "sindh", postalCode: "75500" }, 
      items: [{ name: "Oxford Leather Shoes", size: "42", quantity: 1, price: 6499 }], 
      total: 6499, 
      status: "Delivered", 
      paymentMethod: "cod",
      date: "2024-01-15",
      customerId: "user1"
    },
    { 
      id: "ORD-1002", 
      customerInfo: { fullName: "Fatima Ali", email: "fatima@example.com", phone: "03007654321", address: "456 Oak St", city: "Lahore", province: "punjab", postalCode: "54000" }, 
      items: [{ name: "Premium Peshawari Sandal", size: "41", quantity: 1, price: 3499 }, { name: "Beige Suede Loafers", size: "40", quantity: 1, price: 5999 }], 
      total: 9498, 
      status: "Shipped", 
      paymentMethod: "bank",
      date: "2024-01-16",
      customerId: "user2"
    },
    { 
      id: "ORD-1003", 
      customerInfo: { fullName: "Hassan Ahmed", email: "hassan@example.com", phone: "03112345678", address: "789 Pine St", city: "Islamabad", province: "ict", postalCode: "44000" }, 
      items: [{ name: "Modern White Sneakers", size: "43", quantity: 1, price: 4999 }], 
      total: 4999, 
      status: "Processing", 
      paymentMethod: "cod",
      date: "2024-01-17",
      customerId: "user3"
    },
    { 
      id: "ORD-1004", 
      customerInfo: { fullName: "Ayesha Malik", email: "ayesha@example.com", phone: "03219876543", address: "321 Elm St", city: "Peshawar", province: "kpk", postalCode: "25100" }, 
      items: [{ name: "Premium Peshawari Sandal", size: "40", quantity: 1, price: 3499 }], 
      total: 3499, 
      status: "Pending", 
      paymentMethod: "jazzcash",
      date: "2024-01-18",
      customerId: "user4"
    },
    { 
      id: "ORD-1005", 
      customerInfo: { fullName: "Bilal Shah", email: "bilal@example.com", phone: "03334567890", address: "654 Maple St", city: "Quetta", province: "balochistan", postalCode: "87300" }, 
      items: [{ name: "Oxford Leather Shoes", size: "44", quantity: 1, price: 6499 }, { name: "Casual Canvas Sneakers", size: "43", quantity: 1, price: 3999 }], 
      total: 10498, 
      status: "Delivered", 
      paymentMethod: "card",
      date: "2024-01-19",
      customerId: "user5"
    },
  ];
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(getOrdersFromStorage);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const createOrder = (orderData: Omit<Order, 'id' | 'status' | 'date'>): string => {
    const id = generateOrderId();
    const newOrder: Order = {
      ...orderData,
      id,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
    };
    
    setOrders(prev => [newOrder, ...prev]);
    return id;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};