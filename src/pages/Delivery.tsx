import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Truck, Clock, MapPin, Phone, Calendar, CreditCard, Shield, CheckCircle } from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    {
      zone: "Центр города",
      price: "Бесплатно",
      time: "1-2 часа",
      areas: ["Тверской", "Хамовники", "Басманный", "Красносельский"]
    },
    {
      zone: "Ближние районы",
      price: "300 ₽",
      time: "2-3 часа",
      areas: ["Сокольники", "Измайлово", "Преображенское", "Бутырский"]
    },
    {
      zone: "Дальние районы",
      price: "500 ₽",
      time: "3-4 часа",
      areas: ["Митино", "Бирюлево", "Капотня", "Северное Бутово"]
    },
    {
      zone: "Подмосковье",
      price: "от 800 ₽",
      time: "4-6 часов",
      areas: ["Химки", "Мытищи", "Люберцы", "Одинцово"]
    }
  ];

  const deliveryOptions = [
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Стандартная доставка",
      description: "Доставка в течение дня в удобное для вас время",
      price: "от 0 ₽",
      time: "2-6 часов"
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Экспресс доставка",
      description: "Срочная доставка в течение часа",
      price: "от 800 ₽",
      time: "30-60 минут"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Доставка к дате",
      description: "Доставка к определенной дате и времени",
      price: "от 200 ₽",
      time: "к указанному времени"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Анонимная доставка",
      description: "Доставка с сохранением анонимности отправителя",
      price: "от 300 ₽",
      time: "2-6 часов"
    }
  ];

  const paymentMethods = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      title: "Банковские карты",
      description: "Visa, MasterCard, МИР"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Электронные кошельки",
      description: "Apple Pay, Google Pay, Samsung Pay"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: "Наличными курьеру",
      description: "Оплата при получении"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Банковский перевод",
      description: "Для корпоративных клиентов"
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
              <Link to="/delivery" className="text-pink-500 font-semibold">Доставка</Link>
            </nav>
            <Button asChild>
              <Link to="/catalog">Заказать букет</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto text-center">
          <Truck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Доставка цветов</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и надежная доставка свежих букетов по Москве и Подмосковью. 
            Работаем 24/7, чтобы ваши эмоции дошли вовремя
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Варианты доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{option.description}</CardDescription>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-lg">{option.price}</Badge>
                    <p className="text-sm text-gray-600">Время: {option.time}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{zone.zone}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-500 hover:bg-green-600">{zone.price}</Badge>
                    <span className="text-sm text-gray-600">{zone.time}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {zone.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {area}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Подробная информация</h2>
          <Tabs defaultValue="schedule" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="schedule">График работы</TabsTrigger>
              <TabsTrigger value="conditions">Условия</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
              <TabsTrigger value="guarantee">Гарантии</TabsTrigger>
            </TabsList>
            
            <TabsContent value="schedule" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    График работы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Стандартная доставка</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>Понедельник - Пятница: 9:00 - 22:00</li>
                        <li>Суббота - Воскресенье: 10:00 - 21:00</li>
                        <li>Праздничные дни: 10:00 - 20:00</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Экспресс доставка</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>Ежедневно: 24/7</li>
                        <li>Ночная доставка: +500 ₽</li>
                        <li>Праздничные дни: +300 ₽</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800">
                      <strong>Важно:</strong> В праздничные дни (8 марта, 14 февраля, День матери) 
                      рекомендуем оформлять заказы заранее для гарантированной доставки в нужное время.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conditions" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-500" />
                    Условия доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Бесплатная доставка</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• При заказе от 3000 ₽ по центру</li>
                        <li>• При заказе от 5000 ₽ по городу</li>
                        <li>• Для постоянных клиентов</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Особые условия</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Подъем на этаж включен</li>
                        <li>• Ожидание получателя до 15 минут</li>
                        <li>• Фото-отчет о доставке</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800">
                      <strong>Обратите внимание:</strong> Доставка в офисные центры и торговые комплексы 
                      может занять дополнительное время из-за особенностей пропускного режима.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-purple-500" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                        {method.icon}
                        <div>
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800">
                      <strong>Безопасность:</strong> Все онлайн-платежи защищены SSL-сертификатом. 
                      Мы не храним данные ваших банковских карт.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guarantee" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-orange-500" />
                    Наши гарантии
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Свежесть цветов</h4>
                          <p className="text-gray-600 text-sm">Гарантируем свежесть букетов на 7 дней</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Точность доставки</h4>
                          <p className="text-gray-600 text-sm">Доставляем точно в указанное время</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Сохранность букета</h4>
                          <p className="text-gray-600 text-sm">Бережная транспортировка в специальных контейнерах</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Возврат средств</h4>
                          <p className="text-gray-600 text-sm">100% возврат при нарушении условий</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Замена букета</h4>
                          <p className="text-gray-600 text-sm">Бесплатная замена при повреждении</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-semibold">Поддержка 24/7</h4>
                          <p className="text-gray-600 text-sm">Круглосуточная поддержка клиентов</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Можно ли изменить адрес доставки после оформления заказа?",
                answer: "Да, вы можете изменить адрес доставки до момента передачи заказа курьеру. Свяжитесь с нами по телефону +7 (495) 123-45-67."
              },
              {
                question: "Что делать, если получатель отсутствует по указанному адресу?",
                answer: "Курьер ожидает получателя 15 минут бесплатно. Если получатель отсутствует, мы свяжемся с заказчиком для согласования дальнейших действий."
              },
              {
                question: "Доставляете ли вы в больницы и офисы?",
                answer: "Да, мы доставляем в больницы, офисы и другие учреждения. Учитывайте, что может потребоваться дополнительное время на прохождение пропускного режима."
              },
              {
                question: "Можно ли заказать доставку на определенную дату в будущем?",
                answer: "Конечно! Мы принимаем заказы с доставкой на любую дату в течение месяца. Рекомендуем оформлять заказы заранее, особенно на праздничные даты."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы оформить заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите букет и мы доставим его быстро и в идеальном состоянии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">Выбрать букет</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;