import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Leaf, Droplets, Sun, Thermometer, Scissors, Clock, AlertTriangle } from 'lucide-react';

const CareGuide = () => {
  const basicTips = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Правильный полив",
      description: "Меняйте воду каждые 2-3 дня, используйте чистую прохладную воду",
      details: [
        "Температура воды 15-20°C",
        "Добавьте чайную ложку сахара",
        "Промойте стебли под проточной водой",
        "Наполните вазу на 2/3"
      ]
    },
    {
      icon: <Scissors className="w-8 h-8 text-green-500" />,
      title: "Обрезка стеблей",
      description: "Подрезайте стебли под углом 45° под проточной водой",
      details: [
        "Используйте острый нож или секатор",
        "Срез делайте под водой",
        "Удаляйте листья ниже уровня воды",
        "Обновляйте срез каждые 2-3 дня"
      ]
    },
    {
      icon: <Sun className="w-8 h-8 text-yellow-500" />,
      title: "Освещение",
      description: "Избегайте прямых солнечных лучей и сквозняков",
      details: [
        "Рассеянный свет идеален",
        "Избегайте южных окон",
        "Не ставьте рядом с батареями",
        "Оптимальная температура 18-22°C"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Подкормка",
      description: "Используйте специальные добавки для продления жизни цветов",
      details: [
        "Флористическая пена",
        "Аспирин (1 таблетка на литр)",
        "Лимонная кислота (щепотка)",
        "Готовые консерванты"
      ]
    }
  ];

  const flowerTypes = [
    {
      name: "Розы",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300",
      lifespan: "7-14 дней",
      tips: [
        "Срезайте стебли под водой каждые 2 дня",
        "Удаляйте увядшие лепестки",
        "Опрыскивайте лепестки водой",
        "Температура воды 20-25°C"
      ]
    },
    {
      name: "Тюльпаны",
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=300",
      lifespan: "5-7 дней",
      tips: [
        "Используйте холодную воду",
        "Не обрезайте белую часть стебля",
        "Заворачивайте в бумагу на ночь",
        "Добавьте кубик льда в воду"
      ]
    },
    {
      name: "Пионы",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300",
      lifespan: "5-8 дней",
      tips: [
        "Срезайте рано утром",
        "Погружайте в теплую воду",
        "Удаляйте нижние листья",
        "Храните в прохладном месте"
      ]
    }
  ];

  const problems = [
    {
      problem: "Цветы быстро вянут",
      causes: ["Грязная вода", "Тупой срез", "Высокая температура"],
      solutions: ["Смените воду", "Обновите срез", "Переставьте в прохладное место"]
    },
    {
      problem: "Листья желтеют",
      causes: ["Недостаток питания", "Старая вода", "Прямые солнечные лучи"],
      solutions: ["Добавьте подкормку", "Смените воду", "Переставьте в тень"]
    },
    {
      problem: "Бутоны не раскрываются",
      causes: ["Слишком холодно", "Недостаток света", "Стресс при транспортировке"],
      solutions: ["Повысьте температуру", "Добавьте освещения", "Дайте время адаптироваться"]
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
              <Link to="/catalog">Заказать букет</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 via-blue-50 to-purple-100">
        <div className="container mx-auto text-center">
          <Leaf className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Уход за цветами</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, как правильно ухаживать за букетами, чтобы они радовали вас как можно дольше. 
            Профессиональные советы от наших флористов.
          </p>
        </div>
      </section>

      {/* Basic Care Tips */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Основные правила ухода</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {basicTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{tip.description}</CardDescription>
                  <ul className="space-y-2">
                    {tip.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flower-Specific Care */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Уход по видам цветов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flowerTypes.map((flower, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={flower.image} 
                    alt={flower.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{flower.name}</h3>
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Clock className="w-3 h-3 mr-1" />
                      {flower.lifespan}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {flower.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                        <Leaf className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Подробное руководство</h2>
          <Tabs defaultValue="daily" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="daily">Ежедневный уход</TabsTrigger>
              <TabsTrigger value="weekly">Еженедельный</TabsTrigger>
              <TabsTrigger value="seasonal">По сезонам</TabsTrigger>
              <TabsTrigger value="problems">Проблемы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                    Ежедневный уход за букетом
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Утром (8:00-10:00)</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Проверьте уровень воды в вазе</li>
                        <li>• Удалите увядшие листья и лепестки</li>
                        <li>• Опрыскайте цветы из пульверизатора</li>
                        <li>• Поверните вазу для равномерного освещения</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Вечером (18:00-20:00)</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Долейте свежую воду при необходимости</li>
                        <li>• Проверьте температуру в помещении</li>
                        <li>• Уберите опавшие лепестки</li>
                        <li>• Переставьте в прохладное место на ночь</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weekly" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                    Еженедельные процедуры
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Каждые 2-3 дня:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Полная замена воды в вазе</li>
                        <li>• Обновление среза стеблей</li>
                        <li>• Мытье вазы с дезинфицирующим средством</li>
                        <li>• Добавление свежей подкормки</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Раз в неделю:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Глубокая очистка вазы</li>
                        <li>• Проверка корневой системы (для растений в горшках)</li>
                        <li>• Обновление композиции при необходимости</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seasonal" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Thermometer className="w-5 h-5 mr-2 text-orange-500" />
                    Сезонные особенности ухода
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-600">Весна-Лето</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Чаще меняйте воду (каждые 1-2 дня)</li>
                        <li>• Используйте прохладную воду</li>
                        <li>• Избегайте прямых солнечных лучей</li>
                        <li>• Увеличьте влажность воздуха</li>
                        <li>• Проветривайте помещение</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-600">Осень-Зима</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Используйте воду комнатной температуры</li>
                        <li>• Держите подальше от батарей</li>
                        <li>• Увлажняйте воздух в помещении</li>
                        <li>• Сократите частоту опрыскивания</li>
                        <li>• Обеспечьте дополнительное освещение</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="problems" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                    Решение проблем
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {problems.map((item, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-700 mb-2">{item.problem}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Возможные причины:</h5>
                            <ul className="text-sm text-gray-600">
                              {item.causes.map((cause, causeIndex) => (
                                <li key={causeIndex}>• {cause}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Решения:</h5>
                            <ul className="text-sm text-gray-600">
                              {item.solutions.map((solution, solutionIndex) => (
                                <li key={solutionIndex}>• {solution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Быстрые советы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tip: "Добавьте аспирин",
                description: "1 таблетка аспирина на литр воды поможет цветам дольше оставаться свежими"
              },
              {
                tip: "Используйте лед",
                description: "Кубик льда в воде для тюльпанов поможет им дольше не увядать"
              },
              {
                tip: "Сахар как подкормка",
                description: "Чайная ложка сахара в воде обеспечит цветы дополнительным питанием"
              },
              {
                tip: "Острый срез",
                description: "Всегда используйте острый нож для среза - тупой инструмент повреждает стебель"
              },
              {
                tip: "Холодная вода ночью",
                description: "На ночь ставьте букет в прохладное место или добавляйте холодную воду"
              },
              {
                tip: "Удаляйте увядшие части",
                description: "Регулярно убирайте увядшие листья и цветы, чтобы не заражать здоровые"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-600 mb-2">{item.tip}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна персональная консультация?</h2>
          <p className="text-xl mb-8 opacity-90">
            Наши флористы готовы дать индивидуальные советы по уходу за вашими цветами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Задать вопрос</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/catalog">Заказать букет</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareGuide;