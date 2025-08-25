import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart, Flower2, Sun, Droplets } from 'lucide-react';

const SeasonalSpring = () => {
  const springFlowers = [
    {
      id: 1,
      name: "Весенний рассвет",
      price: 2800,
      originalPrice: 3200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 167,
      flowers: ["Тюльпаны", "Нарциссы", "Гиацинты"],
      description: "Нежная композиция из первых весенних цветов",
      isPopular: true,
      availability: "В наличии"
    },
    {
      id: 2,
      name: "Пастельная мечта",
      price: 3200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 143,
      flowers: ["Розы", "Ранункулюсы", "Эустомы"],
      description: "Букет в нежных пастельных тонах",
      isPopular: false,
      availability: "В наличии"
    },
    {
      id: 3,
      name: "Солнечное настроение",
      price: 2600,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 189,
      flowers: ["Желтые тюльпаны", "Мимоза", "Нарциссы"],
      description: "Яркий букет солнечных оттенков",
      isPopular: true,
      availability: "В наличии"
    },
    {
      id: 4,
      name: "Весенний сад",
      price: 3800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 201,
      flowers: ["Пионы", "Тюльпаны", "Зелень"],
      description: "Композиция, напоминающая весенний сад",
      isPopular: true,
      availability: "Под заказ"
    },
    {
      id: 5,
      name: "Нежность весны",
      price: 2400,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 134,
      flowers: ["Розовые тюльпаны", "Белые розы", "Гипсофила"],
      description: "Романтичный букет в розово-белой гамме",
      isPopular: false,
      availability: "В наличии"
    },
    {
      id: 6,
      name: "Весенний бриз",
      price: 3000,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      flowers: ["Ирисы", "Фрезии", "Зелень"],
      description: "Легкая композиция с ароматными цветами",
      isPopular: false,
      availability: "В наличии"
    }
  ];

  const springTips = [
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Больше света",
      description: "Весенние цветы любят яркий, но рассеянный свет"
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Прохладная вода",
      description: "Используйте прохладную воду для весенних букетов"
    },
    {
      icon: <Flower2 className="w-8 h-8 text-green-500" />,
      title: "Свежий воздух",
      description: "Проветривайте помещение для лучшей сохранности"
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
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 via-yellow-50 to-pink-100">
        <div className="container mx-auto text-center">
          <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Весенняя коллекция</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Встречайте весну с нашей коллекцией свежих сезонных букетов. 
            Первые цветы сезона, полные жизни и энергии обновления.
          </p>
        </div>
      </section>

      {/* Season Info */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-yellow-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Сезон: Март - Май</h3>
                    <p className="text-gray-600 text-sm">Пик цветения весенних растений</p>
                  </div>
                  <div>
                    <Flower2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Свежесть гарантирована</h3>
                    <p className="text-gray-600 text-sm">Цветы срезаны в день доставки</p>
                  </div>
                  <div>
                    <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Особые предложения</h3>
                    <p className="text-gray-600 text-sm">Скидки на весенние букеты</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spring Collection */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Весенние букеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {springFlowers.map((bouquet) => (
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
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Sun className="w-3 h-3 mr-1" />
                      Весна 2024
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
                    <Sun className="w-4 h-4 text-yellow-500" />
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

      {/* Spring Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход за весенними цветами</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {springTips.map((tip, index) => (
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

      {/* Spring Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Весенние праздники</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                event: "8 Марта",
                date: "8 марта",
                flowers: "Тюльпаны, мимоза",
                discount: "15%"
              },
              {
                event: "День матери",
                date: "Последнее воскресенье мая",
                flowers: "Пионы, розы",
                discount: "10%"
              },
              {
                event: "Выпускной",
                date: "Май-июнь",
                flowers: "Смешанные букеты",
                discount: "20%"
              },
              {
                event: "Свадебный сезон",
                date: "Апрель-июнь",
                flowers: "Пионы, ранункулюсы",
                discount: "25%"
              }
            ].map((event, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2 text-green-600">{event.event}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mb-3">{event.flowers}</p>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Скидка {event.discount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Встречайте весну с нами!</h2>
          <p className="text-xl mb-8 opacity-90">
            Подарите радость весеннего обновления с нашими сезонными букетами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">Все весенние букеты</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/custom-order">Индивидуальный заказ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeasonalSpring;