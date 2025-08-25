import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, ShoppingCart, Crown, Sparkles, Camera, Users } from 'lucide-react';

const OccasionsWedding = () => {
  const [filterStyle, setFilterStyle] = useState('all');
  const [filterSeason, setFilterSeason] = useState('all');

  const weddingBouquets = [
    {
      id: 1,
      name: "Классическая элегантность",
      price: 5500,
      originalPrice: 6200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      flowers: ["Белые розы", "Пионы", "Гипсофила"],
      description: "Изысканный свадебный букет в классическом стиле",
      style: "classic",
      season: "all",
      isPopular: true,
      isPremium: true
    },
    {
      id: 2,
      name: "Рустик шарм",
      price: 4200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 189,
      flowers: ["Полевые цветы", "Лаванда", "Зелень"],
      description: "Натуральный букет в стиле рустик",
      style: "rustic",
      season: "summer",
      isPopular: false,
      isPremium: false
    },
    {
      id: 3,
      name: "Романтическая мечта",
      price: 4800,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 201,
      flowers: ["Розовые пионы", "Ранункулюсы", "Эустомы"],
      description: "Нежный букет в розовых тонах",
      style: "romantic",
      season: "spring",
      isPopular: true,
      isPremium: true
    },
    {
      id: 4,
      name: "Современный стиль",
      price: 5200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      flowers: ["Орхидеи", "Каллы", "Зелень"],
      description: "Минималистичный букет для современной невесты",
      style: "modern",
      season: "all",
      isPopular: false,
      isPremium: true
    },
    {
      id: 5,
      name: "Каскадный водопад",
      price: 7500,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 143,
      flowers: ["Розы", "Орхидеи", "Плющ"],
      description: "Роскошный каскадный букет",
      style: "cascade",
      season: "all",
      isPopular: true,
      isPremium: true
    },
    {
      id: 6,
      name: "Бохо стиль",
      price: 4600,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 167,
      flowers: ["Сухоцветы", "Пампасная трава", "Эвкалипт"],
      description: "Свободный букет в стиле бохо",
      style: "boho",
      season: "autumn",
      isPopular: false,
      isPremium: false
    }
  ];

  const styles = [
    { value: 'all', label: 'Все стили' },
    { value: 'classic', label: 'Классический' },
    { value: 'romantic', label: 'Романтический' },
    { value: 'modern', label: 'Современный' },
    { value: 'rustic', label: 'Рустик' },
    { value: 'boho', label: 'Бохо' },
    { value: 'cascade', label: 'Каскадный' }
  ];

  const seasons = [
    { value: 'all', label: 'Круглый год' },
    { value: 'spring', label: 'Весна' },
    { value: 'summer', label: 'Лето' },
    { value: 'autumn', label: 'Осень' },
    { value: 'winter', label: 'Зима' }
  ];

  const filteredBouquets = weddingBouquets.filter(bouquet => {
    const styleMatch = filterStyle === 'all' || bouquet.style === filterStyle;
    const seasonMatch = filterSeason === 'all' || bouquet.season === filterSeason || bouquet.season === 'all';
    return styleMatch && seasonMatch;
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
              <Link to="/wedding-bouquets">Свадебные услуги</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100">
        <div className="container mx-auto text-center">
          <Crown className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Свадебные букеты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создайте идеальный образ невесты с нашими эксклюзивными свадебными букетами. 
            Каждая композиция создается индивидуально для самого важного дня в вашей жизни.
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
                <Select value={filterSeason} onValueChange={setFilterSeason}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {seasons.map(season => (
                      <SelectItem key={season.value} value={season.value}>
                        {season.label}
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

      {/* Wedding Bouquets */}
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
                    {bouquet.isPremium && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">
                        <Crown className="w-3 h-3 mr-1" />
                        Премиум
                      </Badge>
                    )}
                    <Badge className="bg-pink-500 hover:bg-pink-600">
                      <Heart className="w-3 h-3 mr-1" />
                      Свадьба
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
                          {styles.find(s => s.value === bouquet.style)?.label}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {seasons.find(s => s.value === bouquet.season)?.label}
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
                    <Crown className="w-4 h-4 text-pink-500" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${bouquet.id}`}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Заказать
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

      {/* Wedding Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Дополнительные свадебные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Букеты подружек",
                description: "Комплект букетов в едином стиле для подружек невесты"
              },
              {
                icon: <Crown className="w-8 h-8 text-purple-500" />,
                title: "Бутоньерки",
                description: "Элегантные бутоньерки для жениха и гостей"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                title: "Декор церемонии",
                description: "Полное оформление места проведения свадьбы"
              },
              {
                icon: <Camera className="w-8 h-8 text-green-500" />,
                title: "Фотосессия букета",
                description: "Профессиональные фото вашего свадебного букета"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Styles Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Гид по свадебным стилям</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                style: "Классический",
                description: "Элегантные белые и кремовые розы, пионы",
                features: ["Белая цветовая гамма", "Симметричная форма", "Атласные ленты"],
                occasions: ["Церковная церемония", "Торжественная регистрация"]
              },
              {
                style: "Романтический",
                description: "Нежные пастельные тона, воздушные текстуры",
                features: ["Розовые оттенки", "Мягкие формы", "Кружевные детали"],
                occasions: ["Выездная церемония", "Фотосессия"]
              },
              {
                style: "Рустик",
                description: "Натуральные полевые цветы, зелень",
                features: ["Природные материалы", "Свободная форма", "Джутовые ленты"],
                occasions: ["Загородная свадьба", "Эко-стиль"]
              },
              {
                style: "Современный",
                description: "Минималистичные композиции, необычные формы",
                features: ["Геометрические формы", "Монохром", "Современные материалы"],
                occasions: ["Городская свадьба", "Лофт-пространства"]
              },
              {
                style: "Бохо",
                description: "Свободные композиции, сухоцветы",
                features: ["Природные текстуры", "Асимметрия", "Перья и ленты"],
                occasions: ["Пляжная свадьба", "Фестивальный стиль"]
              },
              {
                style: "Каскадный",
                description: "Ниспадающие композиции, роскошные цветы",
                features: ["Водопадная форма", "Богатые текстуры", "Длинные ленты"],
                occasions: ["Торжественная церемония", "Классическая свадьба"]
              }
            ].map((guide, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-pink-600">{guide.style}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Особенности:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {guide.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Sparkles className="w-3 h-3 text-pink-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Подходит для:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.occasions.map((occasion, occasionIndex) => (
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

      {/* Wedding Planning Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Планирование свадебной флористики</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  period: "За 6-8 месяцев",
                  tasks: ["Выбор стиля свадьбы", "Определение цветовой гаммы", "Первая консультация с флористом"],
                  icon: "📅"
                },
                {
                  period: "За 3-4 месяца",
                  tasks: ["Выбор букета невесты", "Планирование декора церемонии", "Заказ букетов подружек"],
                  icon: "🌸"
                },
                {
                  period: "За 1-2 месяца",
                  tasks: ["Финальная примерка букета", "Подтверждение всех деталей", "Планирование доставки"],
                  icon: "✅"
                },
                {
                  period: "За 1 неделю",
                  tasks: ["Последние корректировки", "Подтверждение времени доставки", "Подготовка к свадьбе"],
                  icon: "⏰"
                }
              ].map((timeline, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{timeline.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-pink-600">{timeline.period}</h3>
                        <ul className="space-y-1">
                          {timeline.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center text-gray-600">
                              <Crown className="w-3 h-3 text-pink-500 mr-2" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Создайте свадьбу мечты!</h2>
          <p className="text-xl mb-8 opacity-90">
            Доверьте нам флористическое оформление самого важного дня в вашей жизни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/wedding-bouquets">Свадебные услуги</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600" asChild>
              <Link to="/contacts">Записаться на консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OccasionsWedding;