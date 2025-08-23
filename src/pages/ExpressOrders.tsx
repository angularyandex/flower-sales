import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, Zap, Phone, MapPin, CheckCircle } from 'lucide-react';

const ExpressOrders = () => {
  const expressOptions = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Супер экспресс",
      time: "30 минут",
      price: "1200 ₽",
      description: "Максимально быстрая доставка готовых букетов"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Экспресс",
      time: "60 минут",
      price: "800 ₽",
      description: "Быстрая доставка с возможностью небольших изменений"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
      title: "Быстрый заказ",
      time: "90 минут",
      price: "500 ₽",
      description: "Создание букета по вашим пожеланиям"
    }
  ];

  const readyBouquets = [
    {
      id: 1,
      name: "Классические розы",
      price: 2500,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15 красных роз в элегантной упаковке",
      available: true,
      deliveryTime: "30 мин"
    },
    {
      id: 2,
      name: "Весенний микс",
      price: 1800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Тюльпаны, нарциссы и зелень",
      available: true,
      deliveryTime: "30 мин"
    },
    {
      id: 3,
      name: "Нежная композиция",
      price: 3200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Пионы и эустомы в пастельных тонах",
      available: false,
      deliveryTime: "60 мин"
    },
    {
      id: 4,
      name: "Яркий букет",
      price: 2200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Герберы и хризантемы",
      available: true,
      deliveryTime: "30 мин"
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
              <Link to="tel:+74951234567">
                <Phone className="w-4 h-4 mr-2" />
                Срочный заказ
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100">
        <div className="container mx-auto text-center">
          <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Экспресс заказы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Нужны цветы срочно? Мы готовы доставить свежие букеты в кратчайшие сроки! 
            Работаем 24/7 для ваших неотложных потребностей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="tel:+74951234567">
                <Phone className="w-4 h-4 mr-2" />
                Заказать сейчас
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="#ready-bouquets">Готовые букеты</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Express Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Варианты экспресс доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expressOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-yellow-200">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <div className="flex justify-center items-center space-x-2">
                    <Badge className="bg-yellow-500 hover:bg-yellow-600 text-lg px-3 py-1">
                      {option.time}
                    </Badge>
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {option.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready Bouquets */}
      <section id="ready-bouquets" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Готовые букеты для экспресс доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readyBouquets.map((bouquet) => (
              <Card key={bouquet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={bouquet.available ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"}>
                      {bouquet.deliveryTime}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    {bouquet.available ? (
                      <Badge className="bg-green-500 hover:bg-green-600">В наличии</Badge>
                    ) : (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Под заказ</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">{bouquet.name}</h3>
                    <div className="text-lg font-bold text-gray-800">{bouquet.price} ₽</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{bouquet.description}</p>
                  <Button className="w-full" asChild>
                    <Link to={`/bouquet/${bouquet.id}`}>
                      <Zap className="w-4 h-4 mr-2" />
                      Заказать экспресс
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Как работает экспресс доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Звонок",
                description: "Позвоните нам или оформите заказ онлайн",
                icon: <Phone className="w-6 h-6 text-blue-500" />
              },
              {
                step: "02",
                title: "Выбор",
                description: "Выберите букет из готовых или опишите пожелания",
                icon: <Heart className="w-6 h-6 text-pink-500" />
              },
              {
                step: "03",
                title: "Подготовка",
                description: "Флорист готовит букет в течение 15-30 минут",
                icon: <Clock className="w-6 h-6 text-orange-500" />
              },
              {
                step: "04",
                title: "Доставка",
                description: "Курьер доставляет букет по указанному адресу",
                icon: <MapPin className="w-6 h-6 text-green-500" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="flex justify-center mb-2">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Экстренные ситуации</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Забыли о годовщине?",
                description: "Мы поможем исправить ситуацию! Романтический букет будет доставлен в течение часа.",
                icon: <Heart className="w-8 h-8 text-red-500" />
              },
              {
                title: "Срочная встреча?",
                description: "Нужен букет для важной деловой встречи? Элегантная композиция будет готова за 30 минут.",
                icon: <CheckCircle className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Неожиданный повод?",
                description: "Внезапное приглашение на торжество? Подберем подходящий букет и доставим вовремя.",
                icon: <Zap className="w-8 h-8 text-yellow-500" />
              }
            ].map((situation, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {situation.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{situation.title}</h3>
                  <p className="text-gray-600 text-sm">{situation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Стоимость экспресс доставки</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Дневное время (8:00 - 22:00)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>30 минут</span>
                        <Badge>1200 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>60 минут</span>
                        <Badge>800 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>90 минут</span>
                        <Badge>500 ₽</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Ночное время (22:00 - 8:00)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>30 минут</span>
                        <Badge>1700 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>60 минут</span>
                        <Badge>1300 ₽</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span>90 минут</span>
                        <Badge>1000 ₽</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Важно:</strong> Стоимость экспресс доставки добавляется к стоимости букета. 
                    В праздничные дни действует повышенный тариф.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Нужны цветы прямо сейчас?</h2>
          <p className="text-xl mb-8 opacity-90">
            Позвоните нам, и мы доставим свежие букеты в кратчайшие сроки!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <Phone className="w-6 h-6" />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="tel:+74951234567">Позвонить сейчас</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" asChild>
              <Link to="/catalog">Выбрать букет</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpressOrders;