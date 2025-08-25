import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Heart, Palette, Calendar, MessageCircle, Upload, CheckCircle } from 'lucide-react';

const CustomOrder = () => {
  const [budget, setBudget] = useState([3000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFlowers, setSelectedFlowers] = useState<string[]>([]);

  const colors = [
    { name: 'Красный', value: 'red', color: 'bg-red-500' },
    { name: 'Розовый', value: 'pink', color: 'bg-pink-500' },
    { name: 'Белый', value: 'white', color: 'bg-white border' },
    { name: 'Желтый', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Фиолетовый', value: 'purple', color: 'bg-purple-500' },
    { name: 'Оранжевый', value: 'orange', color: 'bg-orange-500' }
  ];

  const flowers = [
    'Розы', 'Пионы', 'Тюльпаны', 'Лилии', 'Хризантемы', 
    'Герберы', 'Эустомы', 'Орхидеи', 'Гвоздики', 'Ирисы'
  ];

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleFlower = (flower: string) => {
    setSelectedFlowers(prev => 
      prev.includes(flower) 
        ? prev.filter(f => f !== flower)
        : [...prev, flower]
    );
  };

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
            <Button asChild>
              <Link to="/catalog">Готовые букеты</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100">
        <div className="container mx-auto text-center">
          <Palette className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Индивидуальный заказ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создайте уникальный букет по вашему вкусу. Выберите цветы, цвета, стиль и бюджет - 
            наши флористы воплотят ваши идеи в жизнь.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Создайте свой букет</CardTitle>
                <CardDescription>
                  Заполните форму, и мы создадим букет специально для вас
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Повод</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите повод" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">День рождения</SelectItem>
                      <SelectItem value="anniversary">Годовщина</SelectItem>
                      <SelectItem value="wedding">Свадьба</SelectItem>
                      <SelectItem value="valentines">День Святого Валентина</SelectItem>
                      <SelectItem value="mothers-day">День матери</SelectItem>
                      <SelectItem value="graduation">Выпускной</SelectItem>
                      <SelectItem value="apology">Извинение</SelectItem>
                      <SelectItem value="just-because">Просто так</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Бюджет: {budget[0]} ₽
                  </label>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={15000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1,000 ₽</span>
                    <span>15,000 ₽</span>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Предпочитаемые цвета
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => toggleColor(color.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedColors.includes(color.value)
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full mx-auto mb-1 ${color.color}`}></div>
                        <span className="text-xs">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Flowers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Предпочитаемые цветы
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {flowers.map((flower) => (
                      <button
                        key={flower}
                        onClick={() => toggleFlower(flower)}
                        className={`p-2 rounded-lg border text-sm transition-all ${
                          selectedFlowers.includes(flower)
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {flower}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Стиль букета</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите стиль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic">Классический</SelectItem>
                      <SelectItem value="romantic">Романтический</SelectItem>
                      <SelectItem value="modern">Современный</SelectItem>
                      <SelectItem value="rustic">Рустик</SelectItem>
                      <SelectItem value="boho">Бохо</SelectItem>
                      <SelectItem value="minimalist">Минималистичный</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Размер букета</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Маленький (15-20 цветов)</SelectItem>
                      <SelectItem value="medium">Средний (25-35 цветов)</SelectItem>
                      <SelectItem value="large">Большой (40-50 цветов)</SelectItem>
                      <SelectItem value="xl">Очень большой (55+ цветов)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Дата доставки</label>
                  <Input type="date" />
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Особые пожелания
                  </label>
                  <Textarea 
                    placeholder="Опишите ваши пожелания, предпочтения или особые требования..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Референсы (необязательно)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Загрузите фото букетов, которые вам нравятся
                    </p>
                    <Button variant="outline" className="mt-2">
                      Выбрать файлы
                    </Button>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Бюджет:</span>
                    <span className="font-semibold">{budget[0]} ₽</span>
                  </div>
                  {selectedColors.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-600">Цвета:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedColors.map(color => (
                          <Badge key={color} variant="secondary" className="text-xs">
                            {colors.find(c => c.value === color)?.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedFlowers.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-600">Цветы:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedFlowers.map(flower => (
                          <Badge key={flower} variant="outline" className="text-xs">
                            {flower}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Что входит в услугу:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      Индивидуальный дизайн
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      Консультация флориста
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      Премиум упаковка
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      Доставка включена
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      Гарантия свежести
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Время изготовления:</strong> 2-4 часа после подтверждения заказа
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Нужна помощь?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Свяжитесь с нашими флористами для консультации
                </p>
                <div className="space-y-2 text-sm">
                  <p>📞 +7 (495) 123-45-67</p>
                  <p>💬 Telegram: @flowerparadise</p>
                  <p>📧 custom@flowerparadise.ru</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;