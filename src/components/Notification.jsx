// components/Notification.jsx
import { useCartContext } from '../context/CartContext'; // ✅ Importación nombrada

const Notification = () => {
  const { notification } = useCartContext();

  if (!notification) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in-up">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">{notification}</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;