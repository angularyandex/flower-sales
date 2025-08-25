import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Filter, ShoppingCart, Flower2, Sun } from 'lucide-react';

const Tulips = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [filterColor, setFilterColor] = useState('all');

  const tulips = [
    {
      id: 1,
      name: "Красные тюльпаны Дарвин",
      price: 2200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 167,
      color: "red",
      count: "31 тюльпан",
      description: "Классические красные тюльпаны с крупными бутонами",
      isPopular: true,
      season: "Весна"
    },
    {
      id: 2,
      name: "Желтые тюльпаны Голден",
      price: 1900,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 143,
      color: "yellow",
      count: "25 тюльпанов",
      description: "Солнечные желтые тюльпаны для весеннего настроения",
      isPopular: true,
      season: "Весна"
    },
    {
      id: 3,
      name: "Розовые тюльпаны Анжелика",
      price: 2100,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 189,
      color: "pink",
      count: "27 тюльпанов",
      description: "Нежные розовые тюльпаны с махровыми лепестками",
      isPopular: false,
      season: "Весна"
    },
    {
      id: 4,
      name: "Белые тюльпаны Сноу Кристал",
      price: 2000,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 134,
      color: "white",
      count: "29 тюльпанов",
      description: "Элегантные белые тюльпаны для особых случаев",
      isPopular: false,
      season: "Весна"
    },
    {
      id: 5,
      name: "Фиолетовые тюльпаны Пурпл Принс",
      price: 2400,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      color: "purple",
      count: "23 тюльпана",
      description: "Редкие фиолетовые тюльпаны насыщенного оттенка",
      isPopular: true,
      season: "Весна"
    },
    {
      id: 6,
      name: "Микс тюльпанов Радуга",
      price: 2600,
      originalPrice: 3000,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 201,
      color: "mixed",
      count: "35 тюльпанов",
      description: "Яркий микс разноцветных тюльпанов",
      isPopular: true,
      season: "Весна"
    }
  ];

  const colors = [
    { value: 'all', label: 'Все цвета', color: 'bg-gray-200' },
    { value: 'red', label: 'Красные', color: 'bg-red-500' },
    { value: 'yellow', label: 'Желтые', color: 'bg-yellow-500' },
    { value: 'pink', label: 'Розовые', color: 'bg-pink-500' },
    { value: 'white', label: 'Белые', color: 'bg-white border' },
    { value: 'purple', label: 'Фиолетовые', color: 'bg-purple-500' },
    { value: 'mixed', label: 'Микс', color: 'bg-gradient-to-r from-red-500 to-yellow-500' }
  ];

  const filteredTulips = tulips.filter(tulip => 
    filterColor === 'all' || tulip.color === filterColor
  );

  const sortedTulips = [...filteredTulips].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    }
  });

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
              <Link to="/cart">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Корзина
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-100 via-pink-50 to-purple-100">
        <div className="container mx-auto text-center">
          <Flower2 className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Тюльпаны</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Символы весны и обновления. Свежие тюльпаны прямо из Голландии 
            в широкой палитре цветов для создания весеннего настроения.
          </p>
        </div>
      </section>

      {/* Season Banner */}
      <section className="py-8 px-4 bg-yellow-50 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <Sun className="w-6 h-6 text-yellow-500" />
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Весенний сезон тюльпанов</h3>
              <p className="text-sm text-gray-600">Лучшее время для заказа: март - май</p>
            </div>
            <Sun className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="font-semibold text-gray-800">Фильтры:</h3>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <Select value={filterColor} onValueChange={setFilterColor}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colors.map(color => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${color.color}`}></div>
                          <span>{color.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Найдено: {sortedTulips.length} букетов</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">Сначала дешевые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tulip Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTulips.map((tulip) => (
              <Card key={tulip.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={tulip.image} 
                    alt={tulip.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {tulip.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Популярное</Badge>
                    )}
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      <Sun className="w-3 h-3 mr-1" />
                      {tulip.season}
                    </Badge>
                    {tulip.originalPrice && (
                      <Badge variant="destructive">Скидка</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{tulip.name}</h3>
                      <p className="text-sm text-gray-500">{tulip.count}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{tulip.price} ₽</div>
                      {tulip.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{tulip.originalPrice} ₽</div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{tulip.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{tulip.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({tulip.reviews} отзывов)</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${colors.find(c => c.value === tulip.color)?.color}`}></div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${tulip.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        В корзину
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/bouquet/${tulip.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tulip Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход за тюльпанами</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Холодная вода",
                description: "Используйте прохладную воду 15-18°C, добавьте кубик льда"
              },
              {
                title: "Не обрезайте белую часть",
                description: "Срезайте только зеленую часть стебля под углом"
              },
              {
                title: "Заворачивайте на ночь",
                description: "Оборачивайте букет в бумагу на ночь для сохранения формы"
              },
              {
                title: "Прохладное место",
                description: "Держите в прохладном месте, избегайте тепла"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flower2 className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tulip Facts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Интересные факты о тюльпанах</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Родина тюльпанов",
                fact: "Тюльпаны родом из Центральной Азии, а не из Голландии, как многие думают"
              },
              {
                title: "Тюльпаномания",
                fact: "В 17 веке в Голландии луковица тюльпана стоила дороже дома"
              },
              {
                title: "Съедобные цветы",
                fact: "Лепестки тюльпанов съедобны и имеют сладковатый вкус"
              },
              {
                title: "Символ Голландии",
                fact: "Ежегодно в Голландии выращивается более 4 миллиардов луковиц тюльпанов"
              },
              {
                title: "Разнообразие сортов",
                fact: "Существует более 3000 различных сортов тюльпанов"
              },
              {
                title: "Весенние вестники",
                fact: "Тюльпаны одними из первых зацветают весной, символизируя обновление"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-yellow-600">{item.title}</h3>
                  <p className="text-gray-600">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Availability */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Сезонность тюльпанов</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">❄️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Зима</h3>
                    <p className="text-sm text-gray-600">Ограниченный выбор, высокие цены</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="font-semibold mb-2">Весна</h3>
                    <p className="text-sm text-gray-600">Пик сезона, лучший выбор и цены</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">☀️</span>
                    </div>
                    <h3 className="font-semibold mb-2">Лето</h3>
                    <p className="text-sm text-gray-600">Завершение сезона</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍂</span>
                    </div>
                    <h3 className="font-semibold mb-2">Осень</h3>
                    <p className="text-sm text-gray-600">Подготовка к новому сезону</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Встречайте весну с тюльпанами</h2>
          <p className="text-xl mb-8 opacity-90">
            Подарите кусочек весеннего солнца и радости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-order">Создать букет</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-yellow-600" asChild>
              <Link to="/seasonal/spring">Весенняя коллекция</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tulips;