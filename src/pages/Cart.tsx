import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, ShoppingCart, Minus, Plus, Trash2, Gift, Truck, CreditCard } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Романтический микс",
      price: 2500,
      quantity: 1,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Нежные розы и эустомы"
    },
    {
      id: 2,
      name: "Весенняя свежесть",
      price: 1800,
      quantity: 2,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Яркие тюльпаны и нарциссы"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('standard');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryPrice = deliveryOption === 'express' ? 800 : deliveryOption === 'scheduled' ? 200 : 300;
  const discount = promoCode === 'SPRING2024' ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryPrice - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-800">ЦветочныйРай</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Главная</Link>
              <Link to="/catalog" className="text-gray-600 hover:text-pink-500 transition-colors">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-500 transition-colors">Контакты</Link>
            </nav>
            <Button variant="outline" asChild>
              <Link to="/catalog">Продолжить покупки</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Корзина</h1>
          <p className="text-gray-600">Проверьте ваш заказ перед оформлением</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-500 mb-8">Добавьте букеты из нашего каталога</p>
            <Button size="lg" asChild>
              <Link to="/catalog">Перейти к каталогу</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Товары в корзине ({cartItems.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        <p className="text-lg font-bold text-gray-800 mt-1">{item.price} ₽</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Delivery Options */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Способ доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="delivery" 
                        value="standard"
                        checked={deliveryOption === 'standard'}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="text-pink-500"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Стандартная доставка</div>
                        <div className="text-sm text-gray-600">2-4 часа • 300 ₽</div>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="delivery" 
                        value="express"
                        checked={deliveryOption === 'express'}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="text-pink-500"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Экспресс доставка</div>
                        <div className="text-sm text-gray-600">30-60 минут • 800 ₽</div>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="delivery" 
                        value="scheduled"
                        checked={deliveryOption === 'scheduled'}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="text-pink-500"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">Доставка к дате</div>
                        <div className="text-sm text-gray-600">К указанному времени • 200 ₽</div>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Gift Message */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gift className="w-5 h-5 mr-2" />
                    Подарочное сообщение
                  </CardTitle>
                  <CardDescription>
                    Добавьте персональное сообщение к вашему букету
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Напишите ваше сообщение..."
                    className="min-h-[100px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Итого к оплате</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товары:</span>
                      <span>{subtotal} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{deliveryPrice} ₽</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Скидка:</span>
                        <span>-{discount} ₽</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого:</span>
                    <span>{total} ₽</span>
                  </div>

                  {/* Promo Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Промокод</label>
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">Применить</Button>
                    </div>
                    {promoCode === 'SPRING2024' && (
                      <p className="text-sm text-green-600">Промокод применен! Скидка 10%</p>
                    )}
                  </div>

                  <Button className="w-full" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Оформить заказ
                  </Button>

                  <div className="text-xs text-gray-500 text-center">
                    Нажимая "Оформить заказ", вы соглашаетесь с условиями доставки и оплаты
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="mt-6">
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Гарантия свежести 7 дней</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Бесплатная замена при повреждении</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Фото-отчет о доставке</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Поддержка 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;