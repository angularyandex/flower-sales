import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Building, Users, Gift, Calendar, Award, Briefcase, Star } from 'lucide-react';

const Corporate = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-blue-500" />,
      title: "Офисное озеленение",
      description: "Создаем зеленые зоны в офисах для улучшения атмосферы",
      price: "от 5,000 ₽/месяц",
      features: ["Подбор растений", "Регулярный уход", "Замена растений", "Консультации"]
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Корпоративные мероприятия",
      description: "Полное флористическое оформление ваших событий",
      price: "от 15,000 ₽",
      features: ["Концепция оформления", "Букеты и композиции", "Декор помещений", "Сервис на мероприятии"]
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Бизнес-подарки",
      description: "Элегантные цветочные подарки для партнеров и клиентов",
      price: "от 2,000 ₽",
      features: ["Индивидуальный дизайн", "Корпоративная упаковка", "Персонализация", "Массовые заказы"]
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Регулярные поставки",
      description: "Еженедельные или ежемесячные поставки свежих цветов",
      price: "от 3,000 ₽/месяц",
      features: ["Гибкий график", "Скидки на объем", "Персональный менеджер", "Отчетность"]
    }
  ];

  const packages = [
    {
      name: "Стартап",
      price: "10,000 ₽/месяц",
      description: "Для небольших офисов до 20 человек",
      features: [
        "2 композиции в месяц",
        "Офисное озеленение (5 растений)",
        "Консультации по уходу",
        "Замена увядших цветов"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "25,000 ₽/месяц",
      description: "Для средних компаний до 100 человек",
      features: [
        "6 композиций в месяц",
        "Офисное озеленение (15 растений)",
        "Оформление переговорных",
        "Персональный менеджер",
        "Скидка 10% на мероприятия"
      ],
      popular: true
    },
    {
      name: "Корпорация",
      price: "от 50,000 ₽/месяц",
      description: "Для крупных компаний от 100 человек",
      features: [
        "Безлимитные композиции",
        "Полное озеленение офиса",
        "Оформление всех зон",
        "Выделенная команда",
        "Скидка 20% на все услуги",
        "Приоритетная поддержка"
      ],
      popular: false
    }
  ];

  const clients = [
    {
      name: "ТехноКорп",
      logo: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=100",
      review: "Отличное обслуживание! Офис стал намного уютнее с их растениями.",
      rating: 5
    },
    {
      name: "Финанс Групп",
      logo: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=100",
      review: "Профессиональный подход к оформлению корпоративных мероприятий.",
      rating: 5
    },
    {
      name: "Строй Альянс",
      logo: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=100",
      review: "Регулярные поставки всегда вовремя, цветы свежие и красивые.",
      rating: 5
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
              <Link to="/contacts">Получить предложение</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-purple-50 to-green-100">
        <div className="container mx-auto text-center">
          <Briefcase className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Корпоративные услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаем комфортную рабочую атмосферу и помогаем произвести впечатление на партнеров 
            с помощью профессиональной флористики и озеленения.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Что включено:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Пакеты услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 hover:bg-blue-600">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Award className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Преимущества работы с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Персональный менеджер",
                description: "Выделенный специалист для вашего аккаунта"
              },
              {
                icon: <Calendar className="w-8 h-8 text-green-500" />,
                title: "Гибкий график",
                description: "Работаем по удобному для вас расписанию"
              },
              {
                icon: <Award className="w-8 h-8 text-purple-500" />,
                title: "Гарантия качества",
                description: "100% гарантия на все наши услуги"
              },
              {
                icon: <Gift className="w-8 h-8 text-orange-500" />,
                title: "Скидки на объем",
                description: "Выгодные условия для постоянных клиентов"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{client.name}</h4>
                      <div className="flex">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">"{client.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Офисное озеленение"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Офисное озеленение</Badge>
                <h3 className="text-xl font-semibold mb-2">IT-компания "ТехноСфера"</h3>
                <p className="text-gray-600 mb-4">
                  Создали зеленые зоны в open-space офисе на 150 сотрудников. 
                  Установили 50 растений различных видов и организовали регулярный уход.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Проект завершен</span>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Корпоративное мероприятие"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Корпоративное мероприятие</Badge>
                <h3 className="text-xl font-semibold mb-2">Юбилей банка "Финанс+"</h3>
                <p className="text-gray-600 mb-4">
                  Полное флористическое оформление юбилейного мероприятия на 300 гостей. 
                  Создали 15 композиций и оформили банкетный зал.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Проект завершен</span>
                  <Button variant="outline" size="sm">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8 opacity-90">
            Получите персональное предложение для вашей компании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Получить предложение</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="tel:+74951234567">Позвонить сейчас</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;