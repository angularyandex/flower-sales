import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart, Sun, Flower, Thermometer } from 'lucide-react';

const SeasonalSummer = () => {
  const summerFlowers = [
    {
      id: 1,
      name: "Солнечный день",
      price: 3200,
      originalPrice: 3800,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 189,
      flowers: ["Подсолнухи", "Герберы", "Хризантемы"],
      description: "Яркий букет солнечных цветов для летнего настроения",
      isPopular: true,
      availability: "В наличии"
    },
    {
      id: 2,
      name: "Летний сад",
      price: 2800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      flowers: ["Лилии", "Дельфиниум", "Зелень"],
      description: "Композиция в стиле английского сада",
      isPopular: false,
      availability: "В наличии"
    },
    {
      id: 3,
      name: "Тропический рай",
      price: 4500,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 134,
      flowers: ["Орхидеи", "Антуриумы", "Монстера"],
      description: "Экзотическая композиция тропических цветов",
      isPopular: true,
      availability: "Под заказ"
    },
    {
      id: 4,
      name: "Морской бриз",
      price: 3600,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 167,
      flowers: ["Гортензии", "Эустомы", "Эвкалипт"],
      description: "Свежая композиция в сине-белых тонах",
      isPopular: false,
      availability: "В наличии"
    },
    {
      id: 5,
      name: "Летняя страсть",
      price: 3800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 201,
      flowers: ["Красные розы", "Гладиолусы", "Зелень"],
      description: "Страстная композиция ярко-красных цветов",
      isPopular: true,
      availability: "В наличии"
    },
    {
      id: 6,
      name: "Полевые травы",
      price: 2400,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 143,
      flowers: ["Лаванда", "Злаки", "Полевые цветы"],
      description: "Натуральная композиция полевых растений",
      isPopular: false,
      availability: "В наличии"
    }
  ];

  const summerTips = [
    {
      icon: <Thermometer className="w-8 h-8 text-red-500" />,
      title: "Прохладное место",
      description: "Держите букеты подальше от жары и прямых солнечных лучей"
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Частая смена воды",
      description: "Меняйте воду каждый день в жаркую погоду"
    },
    {
      icon: <Flower className="w-8 h-8 text-blue-500" />,
      title: "Опрыскивание",
      description: "Опрыскивайте лепестки прохладной водой утром и вечером"
    }
  ];

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
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100">
        <div className="container mx-auto text-center">
          <Sun className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Летняя коллекция</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Яркие краски лета в наших букетах. Солнечные подсолнухи, ароматные лилии 
            и экзотические цветы создают атмосферу вечного лета.
          </p>
        </div>
      </section>

      {/* Season Info */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Sun className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Сезон: Июнь - Август</h3>
                    <p className="text-gray-600 text-sm">Пик летнего цветения</p>
                  </div>
                  <div>
                    <Thermometer className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Жаростойкие сорта</h3>
                    <p className="text-gray-600 text-sm">Цветы, устойчивые к высоким температурам</p>
                  </div>
                  <div>
                    <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Летние скидки</h3>
                    <p className="text-gray-600 text-sm">Специальные предложения сезона</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summer Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Летние букеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {summerFlowers.map((bouquet) => (
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
                      <Sun className="w-3 h-3 mr-1" />
                      Лето 2024
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
                      <Badge 
                        variant={bouquet.availability === "В наличии" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {bouquet.availability}
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
                        <Badge key={index} variant="outline" className="text-xs">
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
                    <Sun className="w-4 h-4 text-orange-500" />
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

      {/* Summer Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход за летними цветами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {summerTips.map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Летние события</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                event: "Свадебный сезон",
                date: "Июнь-август",
                flowers: "Пионы, розы, гортензии",
                discount: "20%"
              },
              {
                event: "День семьи",
                date: "8 июля",
                flowers: "Семейные композиции",
                discount: "15%"
              },
              {
                event: "Летние фестивали",
                date: "Июль-август",
                flowers: "Яркие букеты",
                discount: "10%"
              },
              {
                event: "День молодежи",
                date: "27 июня",
                flowers: "Современные композиции",
                discount: "25%"
              }
            ].map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-orange-600">{event.event}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mb-3">{event.flowers}</p>
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    Скидка {event.discount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Summer Flowers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Популярные летние цветы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Подсолнухи",
                description: "Символ солнца и радости",
                season: "Июль-сентябрь",
                care: "Много воды, прохладное место"
              },
              {
                name: "Лилии",
                description: "Ароматные и элегантные",
                season: "Июнь-август",
                care: "Удалять пыльники, менять воду"
              },
              {
                name: "Гладиолусы",
                description: "Высокие и величественные",
                season: "Июль-сентябрь",
                care: "Глубокая ваза, подрезка"
              },
              {
                name: "Герберы",
                description: "Яркие и жизнерадостные",
                season: "Круглый год",
                care: "Теплая вода, солнечное место"
              }
            ].map((flower, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{flower.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{flower.description}</p>
                  <p className="text-xs text-gray-500 mb-1">Сезон: {flower.season}</p>
                  <p className="text-xs text-gray-500">Уход: {flower.care}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Наслаждайтесь летом круглый год!</h2>
          <p className="text-xl mb-8 opacity-90">
            Подарите кусочек лета с нашими яркими сезонными букетами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">Все летние букеты</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" asChild>
              <Link to="/custom-order">Создать летний букет</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalSummer;