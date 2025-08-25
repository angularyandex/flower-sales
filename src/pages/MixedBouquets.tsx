import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Filter, ShoppingCart, Palette, Sparkles } from 'lucide-react';

const MixedBouquets = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [filterStyle, setFilterStyle] = useState('all');

  const mixedBouquets = [
    {
      id: 1,
      name: "Весенняя симфония",
      price: 3200,
      originalPrice: 3800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      style: "romantic",
      flowers: ["Розы", "Тюльпаны", "Эустомы"],
      description: "Нежная композиция из весенних цветов в пастельных тонах",
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      name: "Яркий микс",
      price: 2800,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 189,
      style: "bright",
      flowers: ["Герберы", "Хризантемы", "Альстромерии"],
      description: "Энергичная композиция ярких цветов для поднятия настроения",
      isPopular: true,
      isNew: false
    },
    {
      id: 3,
      name: "Элегантная классика",
      price: 4500,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      style: "classic",
      flowers: ["Розы", "Лилии", "Гипсофила"],
      description: "Изысканная композиция в классическом стиле",
      isPopular: false,
      isNew: true
    },
    {
      id: 4,
      name: "Полевой букет",
      price: 2200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 143,
      style: "rustic",
      flowers: ["Ромашки", "Васильки", "Злаки"],
      description: "Натуральная красота полевых цветов",
      isPopular: false,
      isNew: false
    },
    {
      id: 5,
      name: "Тропический рай",
      price: 5200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 98,
      style: "exotic",
      flowers: ["Орхидеи", "Антуриумы", "Стрелиции"],
      description: "Экзотическая композиция из тропических цветов",
      isPopular: true,
      isNew: true
    },
    {
      id: 6,
      name: "Осенняя палитра",
      price: 3600,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 167,
      style: "seasonal",
      flowers: ["Хризантемы", "Подсолнухи", "Рудбекии"],
      description: "Теплые осенние оттенки в одной композиции",
      isPopular: true,
      isNew: false
    }
  ];

  const styles = [
    { value: 'all', label: 'Все стили' },
    { value: 'romantic', label: 'Романтический' },
    { value: 'bright', label: 'Яркий' },
    { value: 'classic', label: 'Классический' },
    { value: 'rustic', label: 'Рустик' },
    { value: 'exotic', label: 'Экзотический' },
    { value: 'seasonal', label: 'Сезонный' }
  ];

  const filteredBouquets = mixedBouquets.filter(bouquet => 
    filterStyle === 'all' || bouquet.style === filterStyle
  );

  const sortedBouquets = [...filteredBouquets].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'new':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100">
        <div className="container mx-auto text-center">
          <Palette className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Смешанные букеты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уникальные композиции из разных видов цветов. Каждый букет - это гармоничное 
            сочетание форм, цветов и ароматов, созданное нашими мастерами-флористами.
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
                <Select value={filterStyle} onValueChange={setFilterStyle}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map(style => (
                      <SelectItem key={style.value} value={style.value}>
                        {style.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Найдено: {sortedBouquets.length} букетов</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">Сначала дешевые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="new">Новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Bouquets Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBouquets.map((bouquet) => (
              <Card key={bouquet.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {bouquet.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Популярное</Badge>
                    )}
                    {bouquet.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Новинка
                      </Badge>
                    )}
                    {bouquet.originalPrice && (
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
                      <h3 className="text-xl font-semibold text-gray-800">{bouquet.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {styles.find(s => s.value === bouquet.style)?.label}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{bouquet.price} ₽</div>
                      {bouquet.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{bouquet.originalPrice} ₽</div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{bouquet.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Состав:</h4>
                    <div className="flex flex-wrap gap-1">
                      {bouquet.flowers.map((flower, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {flower}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{bouquet.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({bouquet.reviews} отзывов)</span>
                    </div>
                    <Palette className="w-4 h-4 text-purple-500" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${bouquet.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        В корзину
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/bouquet/${bouquet.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Composition Principles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Принципы создания смешанных букетов</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Цветовая гармония",
                description: "Сочетаем цвета по правилам колористики для создания гармоничной композиции"
              },
              {
                title: "Текстурный контраст",
                description: "Комбинируем разные текстуры лепестков и листьев для визуального интереса"
              },
              {
                title: "Размерный баланс",
                description: "Балансируем крупные и мелкие цветы для создания динамичной композиции"
              },
              {
                title: "Сезонность",
                description: "Учитываем сезонность цветов для максимальной свежести и стойкости"
              }
            ].map((principle, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Популярные сочетания</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Розы + Эустомы",
                description: "Классическое сочетание для романтических букетов",
                occasions: ["Свидания", "Годовщины", "Признания"],
                colors: ["Розовый", "Белый", "Кремовый"]
              },
              {
                name: "Пионы + Ранункулюсы",
                description: "Пышная текстура для особых торжеств",
                occasions: ["Свадьбы", "Юбилеи", "Праздники"],
                colors: ["Розовый", "Персиковый", "Белый"]
              },
              {
                name: "Герберы + Хризантемы",
                description: "Яркое сочетание для поднятия настроения",
                occasions: ["Дни рождения", "Поздравления", "Подарки"],
                colors: ["Оранжевый", "Желтый", "Красный"]
              },
              {
                name: "Лилии + Альстромерии",
                description: "Элегантная композиция с долгой стойкостью",
                occasions: ["Деловые встречи", "Благодарности", "Извинения"],
                colors: ["Белый", "Розовый", "Сиреневый"]
              },
              {
                name: "Тюльпаны + Нарциссы",
                description: "Весеннее сочетание для создания настроения",
                occasions: ["8 Марта", "Весенние праздники", "Новые начинания"],
                colors: ["Желтый", "Белый", "Розовый"]
              },
              {
                name: "Орхидеи + Антуриумы",
                description: "Экзотическое сочетание для особых случаев",
                occasions: ["VIP подарки", "Премьеры", "Торжества"],
                colors: ["Фиолетовый", "Белый", "Зеленый"]
              }
            ].map((combination, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-purple-600">{combination.name}</h3>
                  <p className="text-gray-600 mb-4">{combination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Подходит для:</h4>
                    <div className="flex flex-wrap gap-1">
                      {combination.occasions.map((occasion, occasionIndex) => (
                        <Badge key={occasionIndex} variant="outline" className="text-xs">
                          {occasion}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Популярные цвета:</h4>
                    <div className="flex space-x-2">
                      {combination.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="text-xs text-gray-500">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Mix Service */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Создайте свой уникальный микс</h2>
            <p className="text-xl text-gray-600 mb-8">
              Не нашли идеальное сочетание? Наши флористы создадут индивидуальную композицию 
              специально для вас с учетом всех ваших пожеланий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold mb-2">Выберите цвета</h3>
                <p className="text-sm text-gray-600">Определите цветовую гамму букета</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌸</span>
                </div>
                <h3 className="font-semibold mb-2">Выберите цветы</h3>
                <p className="text-sm text-gray-600">Укажите предпочитаемые виды цветов</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold mb-2">Получите результат</h3>
                <p className="text-sm text-gray-600">Мы создадим уникальную композицию</p>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/custom-order">Создать индивидуальный букет</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Откройте мир цветочных сочетаний</h2>
          <p className="text-xl mb-8 opacity-90">
            Каждый смешанный букет - это уникальная история, рассказанная языком цветов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">Смотреть все букеты</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/contacts">Консультация флориста</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MixedBouquets;