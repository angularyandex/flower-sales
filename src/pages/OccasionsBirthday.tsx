import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, ShoppingCart, Gift, Cake, PartyPopper, Sparkles } from 'lucide-react';

const OccasionsBirthday = () => {
  const [filterAge, setFilterAge] = useState('all');
  const [filterGender, setFilterGender] = useState('all');

  const birthdayBouquets = [
    {
      id: 1,
      name: "Праздничный фейерверк",
      price: 3200,
      originalPrice: 3800,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      flowers: ["Герберы", "Хризантемы", "Альстромерии"],
      description: "Яркий букет для веселого празднования",
      ageGroup: "adult",
      gender: "unisex",
      isPopular: true
    },
    {
      id: 2,
      name: "Нежное поздравление",
      price: 2800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 189,
      flowers: ["Розы", "Эустомы", "Гипсофила"],
      description: "Элегантный букет в пастельных тонах",
      ageGroup: "adult",
      gender: "female",
      isPopular: false
    },
    {
      id: 3,
      name: "Солнечный день рождения",
      price: 2600,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      flowers: ["Подсолнухи", "Герберы", "Зелень"],
      description: "Солнечный букет для позитивного настроения",
      ageGroup: "young",
      gender: "unisex",
      isPopular: true
    },
    {
      id: 4,
      name: "Классическое поздравление",
      price: 4200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 201,
      flowers: ["Красные розы", "Лилии", "Зелень"],
      description: "Торжественный букет для особого дня",
      ageGroup: "senior",
      gender: "female",
      isPopular: false
    },
    {
      id: 5,
      name: "Мужской стиль",
      price: 3600,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 143,
      flowers: ["Антуриумы", "Хризантемы", "Зелень"],
      description: "Стильная композиция для мужчины",
      ageGroup: "adult",
      gender: "male",
      isPopular: true
    },
    {
      id: 6,
      name: "Детская радость",
      price: 2200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 167,
      flowers: ["Разноцветные герберы", "Ромашки", "Зелень"],
      description: "Яркий букет для маленького именинника",
      ageGroup: "child",
      gender: "unisex",
      isPopular: false
    }
  ];

  const ageGroups = [
    { value: 'all', label: 'Все возрасты' },
    { value: 'child', label: 'Дети (до 12 лет)' },
    { value: 'young', label: 'Молодежь (13-25 лет)' },
    { value: 'adult', label: 'Взрослые (26-60 лет)' },
    { value: 'senior', label: 'Пожилые (60+ лет)' }
  ];

  const genders = [
    { value: 'all', label: 'Для всех' },
    { value: 'female', label: 'Для женщин' },
    { value: 'male', label: 'Для мужчин' },
    { value: 'unisex', label: 'Универсальные' }
  ];

  const filteredBouquets = birthdayBouquets.filter(bouquet => {
    const ageMatch = filterAge === 'all' || bouquet.ageGroup === filterAge;
    const genderMatch = filterGender === 'all' || bouquet.gender === filterGender || bouquet.gender === 'unisex';
    return ageMatch && genderMatch;
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
          <Cake className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Букеты на день рождения</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сделайте день рождения незабываемым с нашими праздничными букетами. 
            Яркие композиции для любого возраста и настроения.
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
                <Select value={filterAge} onValueChange={setFilterAge}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ageGroups.map(age => (
                      <SelectItem key={age.value} value={age.value}>
                        {age.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterGender} onValueChange={setFilterGender}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map(gender => (
                      <SelectItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Найдено: {filteredBouquets.length} букетов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Bouquets */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBouquets.map((bouquet) => (
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
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">
                      <Cake className="w-3 h-3 mr-1" />
                      День рождения
                    </Badge>
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
                      <div className="flex gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {ageGroups.find(a => a.value === bouquet.ageGroup)?.label}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {genders.find(g => g.value === bouquet.gender)?.label}
                        </Badge>
                      </div>
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
                    <PartyPopper className="w-4 h-4 text-yellow-500" />
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

      {/* Birthday Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Как выбрать букет на день рождения</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Cake className="w-8 h-8 text-yellow-500" />,
                title: "Учитывайте возраст",
                description: "Для детей - яркие цветы, для взрослых - элегантные композиции"
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Знайте предпочтения",
                description: "Любимые цвета и виды цветов именинника"
              },
              {
                icon: <Gift className="w-8 h-8 text-purple-500" />,
                title: "Добавьте подарок",
                description: "Дополните букет открыткой или небольшим сувениром"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                title: "Создайте настроение",
                description: "Яркие цвета для веселья, пастельные - для нежности"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Recommendations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Рекомендации по возрастам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                age: "Дети (до 12 лет)",
                flowers: ["Герберы", "Ромашки", "Тюльпаны"],
                colors: ["Яркие", "Разноцветные", "Радужные"],
                style: "Игривый, веселый"
              },
              {
                age: "Подростки (13-17 лет)",
                flowers: ["Розы", "Герберы", "Альстромерии"],
                colors: ["Модные", "Контрастные", "Стильные"],
                style: "Современный, трендовый"
              },
              {
                age: "Молодые (18-35 лет)",
                flowers: ["Розы", "Пионы", "Эустомы"],
                colors: ["Пастельные", "Яркие", "Монохром"],
                style: "Стильный, элегантный"
              },
              {
                age: "Зрелые (35+ лет)",
                flowers: ["Розы", "Лилии", "Орхидеи"],
                colors: ["Классические", "Благородные", "Сдержанные"],
                style: "Изысканный, роскошный"
              }
            ].map((recommendation, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-yellow-600">{recommendation.age}</h3>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-sm mb-1">Цветы:</h4>
                    <p className="text-xs text-gray-600">{recommendation.flowers.join(', ')}</p>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-sm mb-1">Цвета:</h4>
                    <p className="text-xs text-gray-600">{recommendation.colors.join(', ')}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-1">Стиль:</h4>
                    <p className="text-xs text-gray-600">{recommendation.style}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Traditions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Традиции дарения цветов на день рождения</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-yellow-600">Количество цветов</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Cake className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Нечетное количество - для радостных событий</span>
                    </li>
                    <li className="flex items-start">
                      <Cake className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Один цветок на каждый год жизни (для детей)</span>
                    </li>
                    <li className="flex items-start">
                      <Cake className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Букет из 25, 51 или 101 цветка для юбилеев</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-4 text-yellow-600">Символика цветов</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <PartyPopper className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Герберы - радость и веселье</span>
                    </li>
                    <li className="flex items-start">
                      <PartyPopper className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Подсолнухи - позитив и энергия</span>
                    </li>
                    <li className="flex items-start">
                      <PartyPopper className="w-4 h-4 text-yellow-500 mr-2 mt-1" />
                      <span>Розы - любовь и уважение</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Сделайте день рождения незабываемым!</h2>
          <p className="text-xl mb-8 opacity-90">
            Подарите радость и улыбки с нашими праздничными букетами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-order">Создать уникальный букет</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-yellow-600" asChild>
              <Link to="/gift-compositions">Подарочные наборы</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OccasionsBirthday;