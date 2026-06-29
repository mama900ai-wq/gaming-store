import React, { useState } from 'react';
import { ShoppingCart, Phone, X, Plus, Minus } from 'lucide-react';

export default function GamingStore() {
  const [language, setLanguage] = useState('ar');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gameId: ''
  });

  const translations = {
    ar: {
      storeName: 'متجر الفردوس الإلكتروني',
      subtitle: 'شحن فوري لأفضل الألعاب',
      welcome: 'مرحباً بك في متجرنا الإلكتروني',
      products: 'المنتجات',
      contact: 'تواصل معنا',
      cart: 'السلة',
      checkout: 'إتمام الطلب',
      addToCart: 'أضف للسلة',
      remove: 'حذف',
      quantity: 'الكمية',
      total: 'الإجمالي',
      usd: 'دولار',
      price: 'السعر',
      orderForm: 'نموذج الطلب',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      gameId: 'معرف اللاعب / UID',
      selectGame: 'اختر اللعبة',
      submitOrder: 'تأكيد الطلب',
      bankInfo: 'تحويل بنكي: بنك الخرطوم',
      contactInfo: 'رقم التواصل: +249909056304',
      emptycart: 'السلة فارغة',
      confirmOrder: 'تم استلام طلبك! سيتم التواصل معك قريباً.',
      backToShop: 'العودة للمتجر',
      freefire: 'فري فاير',
      clasofclans: 'كلاش أوف كلانس',
      efootball: 'eFootball'
    },
    en: {
      storeName: 'Al-Firdawsah Gaming Store',
      subtitle: 'Fast & Reliable Top-ups',
      welcome: 'Welcome to Our Gaming Store',
      products: 'Products',
      contact: 'Contact',
      cart: 'Cart',
      checkout: 'Checkout',
      addToCart: 'Add to Cart',
      remove: 'Remove',
      quantity: 'Quantity',
      total: 'Total',
      usd: 'USD',
      price: 'Price',
      orderForm: 'Order Form',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      gameId: 'Player ID / UID',
      selectGame: 'Select Game',
      submitOrder: 'Confirm Order',
      bankInfo: 'Bank Transfer: Al-Baraka Bank',
      contactInfo: 'Contact: +249909056304',
      emptycart: 'Cart is empty',
      confirmOrder: 'Your order received! We will contact you shortly.',
      backToShop: 'Back to Shop',
      freefire: 'Free Fire',
      clasofclans: 'Clash of Clans',
      efootball: 'eFootball'
    }
  };

  const t = translations[language];
  const isArabic = language === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const products = [
    {
      id: 1,
      name: t.freefire,
      game: 'freefire',
      packages: [
        { amount: 1, price: 6 },
        { amount: 2, price: 12 },
        { amount: 5, price: 30 },
        { amount: 10, price: 60 },
        { amount: 20, price: 120 },
        { amount: 50, price: 300 }
      ],
      image: '💎',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 2,
      name: t.clasofclans,
      game: 'clashofclans',
      packages: [
        { amount: 5, price: 5 },
        { amount: 10, price: 10 },
        { amount: 15, price: 15 }
      ],
      image: '⚔️',
      color: 'from-purple-500 to-blue-600'
    },
    {
      id: 3,
      name: t.efootball,
      game: 'efootball',
      packages: [
        { amount: 5, price: 5 },
        { amount: 10, price: 10 },
        { amount: 15, price: 15 },
        { amount: 20, price: 20 },
        { amount: 25, price: 25 },
        { amount: 50, price: 50 },
        { amount: 100, price: 100 }
      ],
      image: '⚽',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const addToCart = (product, packageItem) => {
    const cartItem = {
      id: `${product.id}-${packageItem.amount}`,
      name: product.name,
      game: product.game,
      amount: packageItem.amount,
      price: packageItem.price,
      quantity: 1
    };

    setCart(prev => {
      const exists = prev.find(item => item.id === cartItem.id);
      if (exists) {
        return prev.map(item =>
          item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, cartItem];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: qty } : item
        )
      );
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.gameId && cart.length > 0) {
      console.log('Order submitted:', { formData, cart, total: cartTotal });
      alert(t.confirmOrder);
      setFormData({ name: '', email: '', phone: '', gameId: '' });
      setCart([]);
      setShowCheckout(false);
      setShowCart(false);
    }
  };

  return (
    <div dir={dir} className={`min-h-screen ${isArabic ? 'font-arabic' : ''}`} style={{ backgroundColor: '#0f172a' }}>
      {/* Header */}
      <header className="border-b border-slate-700 sticky top-0 z-50" style={{ backgroundColor: '#1e293b' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{t.storeName}</h1>
            <p className="text-sm text-slate-400">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-600 transition"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative p-2 hover:bg-slate-700 rounded transition"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!showCheckout ? (
          <>
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">{t.welcome}</h2>
              <p className="text-slate-300 text-lg">
                {isArabic ? 'شحن آمن وسريع لجميع ألعابك المفضلة' : 'Safe and fast top-ups for all your favorite games'}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {products.map(product => (
                <div
                  key={product.id}
                  className="rounded-lg overflow-hidden border border-slate-700 hover:border-slate-500 transition"
                  style={{ backgroundColor: '#1e293b' }}
                >
                  {/* Product Header */}
                  <div className={`bg-gradient-to-r ${product.color} p-6 text-center`}>
                    <div className="text-5xl mb-3">{product.image}</div>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>

                  {/* Packages */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {product.packages.map((pkg, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded bg-slate-800 hover:bg-slate-700 transition"
                        >
                          <div>
                            <p className="font-semibold text-white">
                              {pkg.amount} {product.game === 'freefire' ? 'Diamond' : product.game === 'clashofclans' ? 'Gem' : 'Coin'}
                            </p>
                            <p className="text-sm text-slate-400">${pkg.price}</p>
                          </div>
                          <button
                            onClick={() => addToCart(product, pkg)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition font-medium"
                          >
                            {t.addToCart}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="border-t border-slate-700 pt-8 text-center text-slate-300">
              <p className="mb-2">📱 {t.contactInfo}</p>
              <p>🏦 {t.bankInfo}</p>
            </div>
          </>
        ) : (
          /* Checkout View */
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowCheckout(false)}
              className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2"
            >
              ← {t.backToShop}
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="rounded-lg border border-slate-700 p-6" style={{ backgroundColor: '#1e293b' }}>
                <h3 className="text-xl font-bold text-white mb-4">{t.cart}</h3>
                {cart.length === 0 ? (
                  <p className="text-slate-400">{t.emptycart}</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-slate-800 rounded">
                          <div className="flex-1">
                            <p className="font-semibold text-white">{item.name} - {item.amount}</p>
                            <p className="text-sm text-slate-400">${item.price} {t.usd}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-slate-700 rounded"
                            >
                              <Minus className="w-4 h-4 text-white" />
                            </button>
                            <span className="w-8 text-center text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-700 rounded"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-4 p-1 hover:bg-red-900 rounded text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-600 pt-4">
                      <div className="flex justify-between items-center text-lg font-bold text-white">
                        <span>{t.total}:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitOrder} className="rounded-lg border border-slate-700 p-6" style={{ backgroundColor: '#1e293b' }}>
                <h3 className="text-xl font-bold text-white mb-4">{t.orderForm}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.name}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder={t.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder={t.email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.phone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="+249..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">{t.gameId}</label>
                    <input
                      type="text"
                      required
                      value={formData.gameId}
                      onChange={(e) => setFormData({ ...formData, gameId: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                      placeholder="UID / Player ID"
                    />
                  </div>
                  <div className="pt-4 border-t border-slate-600">
                    <p className="text-sm text-slate-400 mb-3">💳 {t.bankInfo}</p>
                    <p className="text-sm text-slate-400 mb-4">📞 {t.contactInfo}</p>
                    <button
                      type="submit"
                      disabled={cart.length === 0}
                      className="w-full py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold rounded transition"
                    >
                      {t.submitOrder}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Cart Sidebar */}
      {showCart && !showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start pt-20">
          <div
            className={`${isArabic ? 'ml-auto' : 'mr-auto'} w-full max-w-sm rounded-lg border border-slate-700 p-6 shadow-xl`}
            style={{ backgroundColor: '#1e293b' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{t.cart}</h3>
              <button onClick={() => setShowCart(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-slate-400 text-center py-4">{t.emptycart}</p>
            ) : (
              <>
                <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-slate-800 rounded">
                      <div>
                        <p className="text-sm font-semibold text-white">{item.name}</p>
                        <p className="text-xs text-slate-400">${item.price} × {item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-600 pt-4 mb-4">
                  <div className="flex justify-between text-white font-bold mb-4">
                    <span>{t.total}:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      setShowCart(false);
                      setShowCheckout(true);
                    }}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition"
                  >
                    {t.checkout}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}