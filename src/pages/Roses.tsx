import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Filter, ShoppingCart, Crown } from 'lucide-react';

const Roses = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [filterColor, setFilterColor] = useState('all');

  const roses = [
    {
      id: 1,
      name: "Красные розы Гран При",
      price: 3500,
      originalPrice: 4000,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      color: "red",
      count: "25 роз",
      description: "Классические красные розы премиум класса",
      isPopular: true,
      isPremium: true
    },
    {
      id: 2,
      name: "Белые розы Аваланш",
      price: 3200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 189,
      color: "white",
      count: "21 роза",
      description: "Элегантные белые розы для особых случаев",
      isPopular: false,
      isPremium: true
    },
    {
      id: 3,
      name: "Розовые розы Мемори",
      price: 2800,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      color: "pink",
      count: "19 роз",
      description: "Нежные розовые розы в стильной упаковке",
      isPopular: true,
      isPremium: false
    },
    {
      id: 4,
      name: "Желтые розы Пенни Лейн",
      price: 2600,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 143,
      color: "yellow",
      count: "17 роз",
      description: "Солнечные желтые розы для поднятия настроения",
      isPopular: false,
      isPremium: false
    },
    {
      id: 5,
      name: "Фиолетовые розы Мистик",
      price: 4200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 98,
      color: "purple",
      count: "15 роз",
      description: "Редкие фиолетовые розы для истинных ценителей",
      isPopular: false,
      isPremium: true
    },
    {
      id: 6,
      name: "Оранжевые розы Вау",
      price: 2900,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      reviews: 167,
      color: "orange",
      count: "23 розы",
      description: "Яркие оранжевые розы для энергичных натур",
      isPopular: true,
      isPremium: false
    }
  ];

  const colors = [
    { value: 'all', label: 'Все цвета', color: 'bg-gray-200' },
    { value: 'red', label: 'Красные', color: 'bg-red-500' },
    { value: 'white', label: 'Белые', color: 'bg-white border' },
    { value: 'pink', label: 'Розовые', color: 'bg-pink-500' },
    { value: 'yellow', label: 'Желтые', color: 'bg-yellow-500' },
    { value: 'purple', label: 'Фиолетовые', color: 'bg-purple-500' },
    { value: 'orange', label: 'Оранжевые', color: 'bg-orange-500' }
  ];

  const filteredRoses = roses.filter(rose => 
    filterColor === 'all' || rose.color === filterColor
  );

  const sortedRoses = [...filteredRoses].sort((a, b) => {
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-100 via-pink-50 to-rose-100">
        <div className="container mx-auto text-center">
          <Crown className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Розы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Королевы цветов в нашей коллекции. Свежие розы высшего качества 
            различных сортов и оттенков для любого повода и настроения.
          </p>
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
              <span className="text-sm text-gray-600">Найдено: {sortedRoses.length} букетов</span>
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

      {/* Rose Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRoses.map((rose) => (
              <Card key={rose.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={rose.image} 
                    alt={rose.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {rose.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Популярное</Badge>
                    )}
                    {rose.isPremium && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">
                        <Crown className="w-3 h-3 mr-1" />
                        Премиум
                      </Badge>
                    )}
                    {rose.originalPrice && (
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
                      <h3 className="text-xl font-semibold text-gray-800">{rose.name}</h3>
                      <p className="text-sm text-gray-500">{rose.count}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{rose.price} ₽</div>
                      {rose.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{rose.originalPrice} ₽</div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{rose.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{rose.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({rose.reviews} отзывов)</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${colors.find(c => c.value === rose.color)?.color}`}></div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${rose.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        В корзину
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/bouquet/${rose.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rose Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход за розами</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Обрезка стеблей",
                description: "Подрезайте стебли под углом 45° под проточной водой каждые 2-3 дня"
              },
              {
                title: "Свежая вода",
                description: "Меняйте воду полностью каждые 2 дня, промывая вазу"
              },
              {
                title: "Удаление листьев",
                description: "Убирайте все листья ниже уровня воды в вазе"
              },
              {
                title: "Прохладное место",
                description: "Держите розы подальше от прямых солнечных лучей и батарей"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rose Meanings */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Значение цветов роз</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                color: "Красные",
                meaning: "Страстная любовь и романтика",
                occasions: ["День Святого Валентина", "Годовщина", "Признание в любви"],
                bgColor: "bg-red-500"
              },
              {
                color: "Белые",
                meaning: "Чистота и невинность",
                occasions: ["Свадьба", "Извинения", "Новые начинания"],
                bgColor: "bg-white border"
              },
              {
                color: "Розовые",
                meaning: "Нежность и благодарность",
                occasions: ["День матери", "Благодарность", "Первое свидание"],
                bgColor: "bg-pink-500"
              },
              {
                color: "Желтые",
                meaning: "Дружба и радость",
                occasions: ["День рождения", "Поздравления", "Дружеские встречи"],
                bgColor: "bg-yellow-500"
              },
              {
                color: "Фиолетовые",
                meaning: "Очарование и мистика",
                occasions: ["Особые события", "Восхищение", "Магические моменты"],
                bgColor: "bg-purple-500"
              },
              {
                color: "Оранжевые",
                meaning: "Энтузиазм и желание",
                occasions: ["Поддержка", "Энергия", "Новые проекты"],
                bgColor: "bg-orange-500"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-6 h-6 rounded-full ${item.bgColor} mr-3`}></div>
                    <h3 className="font-semibold text-lg">{item.color} розы</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.meaning}</p>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Подходят для:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.occasions.map((occasion, occasionIndex) => (
                        <Badge key={occasionIndex} variant="outline" className="text-xs">
                          {occasion}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Подарите королеву цветов</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите идеальные розы для вашего особенного человека
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-order">Индивидуальный букет</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-red-600" asChild>
              <Link to="/contacts">Консультация флориста</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roses;