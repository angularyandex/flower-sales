import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, Search, Filter, ShoppingCart } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filterCategory, setFilterCategory] = useState('all');

  const bouquets = [
    {
      id: 1,
      name: "Романтический микс",
      price: 2500,
      originalPrice: 3000,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 156,
      category: "romantic",
      description: "Нежные розы и эустомы в элегантной упаковке",
      isNew: false,
      isPopular: true
    },
    {
      id: 2,
      name: "Весенняя свежесть",
      price: 1800,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 89,
      category: "seasonal",
      description: "Яркие тюльпаны и нарциссы - символ весны",
      isNew: true,
      isPopular: false
    },
    {
      id: 3,
      name: "Элегантные розы",
      price: 3200,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 203,
      category: "premium",
      description: "Классические красные розы высшего качества",
      isNew: false,
      isPopular: true
    },
    {
      id: 4,
      name: "Полевые цветы",
      price: 1200,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 67,
      category: "rustic",
      description: "Натуральная красота полевых цветов",
      isNew: false,
      isPopular: false
    },
    {
      id: 5,
      name: "Пионовое облако",
      price: 4500,
      originalPrice: 5200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 134,
      category: "premium",
      description: "Роскошные пионы в пастельных тонах",
      isNew: true,
      isPopular: true
    },
    {
      id: 6,
      name: "Солнечный день",
      price: 2100,
      originalPrice: null,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 92,
      category: "bright",
      description: "Яркие подсолнухи и герберы",
      isNew: false,
      isPopular: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'romantic', label: 'Романтические' },
    { value: 'seasonal', label: 'Сезонные' },
    { value: 'premium', label: 'Премиум' },
    { value: 'rustic', label: 'Полевые' },
    { value: 'bright', label: 'Яркие' }
  ];

  const sortOptions = [
    { value: 'popular', label: 'По популярности' },
    { value: 'price-low', label: 'Сначала дешевые' },
    { value: 'price-high', label: 'Сначала дорогие' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'new', label: 'Новинки' }
  ];

  const filteredBouquets = bouquets.filter(bouquet => {
    const matchesSearch = bouquet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bouquet.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || bouquet.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/catalog" className="text-pink-500 font-semibold">Каталог</Link>
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Каталог букетов</h1>
          <p className="text-gray-600">Выберите идеальный букет из нашей коллекции</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск букетов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-600 flex items-center">
              Найдено: {sortedBouquets.length} букетов
            </div>
          </div>
        </div>

        {/* Bouquets Grid */}
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
                  {bouquet.isNew && (
                    <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
                  )}
                  {bouquet.isPopular && (
                    <Badge className="bg-orange-500 hover:bg-orange-600">Популярное</Badge>
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
                  <h3 className="text-xl font-semibold text-gray-800">{bouquet.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">{bouquet.price} ₽</div>
                    {bouquet.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{bouquet.originalPrice} ₽</div>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{bouquet.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{bouquet.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({bouquet.reviews} отзывов)</span>
                  </div>
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

        {/* Empty State */}
        {sortedBouquets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Букеты не найдены</h3>
            <p className="text-gray-500 mb-4">Попробуйте изменить параметры поиска или фильтры</p>
            <Button onClick={() => {
              setSearchTerm('');
              setFilterCategory('all');
              setSortBy('popular');
            }}>
              Сбросить фильтры
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {sortedBouquets.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Показать еще букеты
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;