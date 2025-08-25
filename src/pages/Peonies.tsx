import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Filter, ShoppingCart, Flower, Crown, Calendar } from 'lucide-react';

const Peonies = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [filterColor, setFilterColor] = useState('all');

  const peonies = [
    {
      id: 1,
      name: "Розовые пионы Сара Бернар",
      price: 4500,
      originalPrice: 5200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      color: "pink",
      count: "15 пионов",
      description: "Роскошные махровые пионы нежно-розового оттенка",
      isPopular: true,
      isPremium: true,
      season: "Май-Июнь"
    },
    {
      id: 2,
      name: "Белые пионы Дюшес де Немур",
      price: 4200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 189,
      color: "white",
      count: "13 пионов",
      description: "Элегантные белые пионы с кремовым центром",
      isPopular: true,
      isPremium: true,
      season: "Май-Июнь"
    },
    {
      id: 3,
      name: "Красные пионы Ред Чарм",
      price: 4800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 156,
      color: "red",
      count: "11 пионов",
      description: "Яркие красные пионы с бархатистыми лепестками",
      isPopular: false,
      isPremium: true,
      season: "Май-Июнь"
    },
    {
      id: 4,
      name: "Коралловые пионы Корал Сансет",
      price: 4600,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 143,
      color: "coral",
      count: "12 пионов",
      description: "Уникальные коралловые пионы редкого оттенка",
      isPopular: false,
      isPremium: true,
      season: "Май-Июнь"
    },
    {
      id: 5,
      name: "Пионы микс Гарден Парти",
      price: 5200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 198,
      color: "mixed",
      count: "17 пионов",
      description: "Изысканный микс пионов разных оттенков",
      isPopular: true,
      isPremium: true,
      season: "Май-Июнь"
    },
    {
      id: 6,
      name: "Пастельные пионы Свит Дримс",
      price: 4300,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 167,
      color: "pastel",
      count: "14 пионов",
      description: "Нежная композиция из пастельных пионов",
      isPopular: true,
      isPremium: false,
      season: "Май-Июнь"
    }
  ];

  const colors = [
    { value: 'all', label: 'Все цвета', color: 'bg-gray-200' },
    { value: 'pink', label: 'Розовые', color: 'bg-pink-500' },
    { value: 'white', label: 'Белые', color: 'bg-white border' },
    { value: 'red', label: 'Красные', color: 'bg-red-500' },
    { value: 'coral', label: 'Коралловые', color: 'bg-orange-400' },
    { value: 'mixed', label: 'Микс', color: 'bg-gradient-to-r from-pink-500 to-red-500' },
    { value: 'pastel', label: 'Пастельные', color: 'bg-gradient-to-r from-pink-200 to-purple-200' }
  ];

  const filteredPeonies = peonies.filter(peony => 
    filterColor === 'all' || peony.color === filterColor
  );

  const sortedPeonies = [...filteredPeonies].sort((a, b) => {
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100">
        <div className="container mx-auto text-center">
          <Flower className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Пионы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Роскошные пионы - символ богатства, чести и красоты. Эти пышные цветы 
            с неповторимым ароматом создают атмосферу праздника и изысканности.
          </p>
        </div>
      </section>

      {/* Season Banner */}
      <section className="py-8 px-4 bg-pink-50 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <Calendar className="w-6 h-6 text-pink-500" />
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">Сезон пионов</h3>
              <p className="text-sm text-gray-600">Лучшее время для заказа: май - июнь</p>
            </div>
            <Calendar className="w-6 h-6 text-pink-500" />
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
              <span className="text-sm text-gray-600">Найдено: {sortedPeonies.length} букетов</span>
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

      {/* Peony Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPeonies.map((peony) => (
              <Card key={peony.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={peony.image} 
                    alt={peony.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {peony.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Популярное</Badge>
                    )}
                    {peony.isPremium && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">
                        <Crown className="w-3 h-3 mr-1" />
                        Премиум
                      </Badge>
                    )}
                    <Badge className="bg-pink-500 hover:bg-pink-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {peony.season}
                    </Badge>
                    {peony.originalPrice && (
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
                      <h3 className="text-xl font-semibold text-gray-800">{peony.name}</h3>
                      <p className="text-sm text-gray-500">{peony.count}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{peony.price} ₽</div>
                      {peony.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{peony.originalPrice} ₽</div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{peony.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{peony.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({peony.reviews} отзывов)</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${colors.find(c => c.value === peony.color)?.color}`}></div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${peony.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        В корзину
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/bouquet/${peony.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peony Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход за пионами</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Теплая вода",
                description: "Используйте теплую воду 25-30°C для лучшего раскрытия бутонов"
              },
              {
                title: "Глубокий срез",
                description: "Срезайте стебли под углом на 3-5 см под проточной водой"
              },
              {
                title: "Удаление листьев",
                description: "Уберите все листья ниже уровня воды в вазе"
              },
              {
                title: "Прохладное место",
                description: "Держите в прохладном месте, избегайте прямых солнечных лучей"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Flower className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peony Varieties */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Виды пионов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Травянистые пионы",
                description: "Классические садовые пионы с крупными махровыми цветками",
                features: ["Цветение: май-июнь", "Высота: 60-90 см", "Аромат: сильный", "Стойкость: 5-7 дней"],
                image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                type: "Древовидные пионы",
                description: "Редкие кустарниковые пионы с особо крупными цветками",
                features: ["Цветение: апрель-май", "Высота: 100-150 см", "Аромат: нежный", "Стойкость: 7-10 дней"],
                image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300"
              },
              {
                type: "Ито-гибриды",
                description: "Современные гибриды с уникальными характеристиками",
                features: ["Цветение: май-июль", "Высота: 70-100 см", "Аромат: легкий", "Стойкость: 6-8 дней"],
                image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=300"
              }
            ].map((variety, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={variety.image} 
                    alt={variety.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-pink-600">{variety.type}</h3>
                  <p className="text-gray-600 mb-4">{variety.description}</p>
                  <ul className="space-y-1">
                    {variety.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Flower className="w-3 h-3 text-pink-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Peony Symbolism */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Символика пионов</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-pink-600">В восточной культуре</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Crown className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Символ богатства и процветания</span>
                    </li>
                    <li className="flex items-start">
                      <Crown className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Знак чести и благородства</span>
                    </li>
                    <li className="flex items-start">
                      <Crown className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Пожелание удачи в браке</span>
                    </li>
                    <li className="flex items-start">
                      <Crown className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Символ женской красоты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-pink-600">В западной традиции</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Выражение стыдливости</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Знак сострадания</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Пожелание исцеления</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-4 h-4 text-pink-500 mr-2 mt-1" />
                      <span>Символ счастливого брака</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Подарите роскошь пионов</h2>
          <p className="text-xl mb-8 opacity-90">
            Создайте незабываемые моменты с самыми изысканными цветами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-order">Индивидуальный букет</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600" asChild>
              <Link to="/wedding-bouquets">Свадебные пионы</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Peonies;