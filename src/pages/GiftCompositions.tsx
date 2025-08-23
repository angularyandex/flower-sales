import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Sparkles, Package, Ribbon } from 'lucide-react';

const GiftCompositions = () => {
  const giftCompositions = [
    {
      id: 1,
      name: "Романтический сюрприз",
      price: 3500,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Букет роз + шоколад + открытка",
      occasion: "День Святого Валентина",
      includes: ["25 красных роз", "Коробка конфет", "Открытка"]
    },
    {
      id: 2,
      name: "Весенний подарок",
      price: 2800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Тюльпаны + мягкая игрушка",
      occasion: "8 Марта",
      includes: ["15 тюльпанов", "Плюшевый мишка", "Подарочная упаковка"]
    },
    {
      id: 3,
      name: "Деловой подарок",
      price: 4200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Элегантная композиция для коллег",
      occasion: "Корпоративные события",
      includes: ["Орхидеи", "Стильная ваза", "Поздравительная карточка"]
    },
    {
      id: 4,
      name: "Материнская любовь",
      price: 3200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Нежный букет для мамы",
      occasion: "День матери",
      includes: ["Пионы и розы", "Ароматная свеча", "Персональное послание"]
    },
    {
      id: 5,
      name: "Выпускной букет",
      price: 2500,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Яркий букет для выпускника",
      occasion: "Выпускной",
      includes: ["Герберы и хризантемы", "Воздушный шар", "Лента с надписью"]
    },
    {
      id: 6,
      name: "Новорожденный",
      price: 3800,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Композиция в честь рождения малыша",
      occasion: "Рождение ребенка",
      includes: ["Белые и розовые цветы", "Детская игрушка", "Поздравительная открытка"]
    }
  ];

  const occasions = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "День Святого Валентина",
      description: "Романтические композиции для любимых",
      count: "12 вариантов"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "8 Марта",
      description: "Весенние букеты для прекрасных дам",
      count: "18 вариантов"
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "День рождения",
      description: "Яркие композиции для именинников",
      count: "25 вариантов"
    },
    {
      icon: <Package className="w-8 h-8 text-blue-500" />,
      title: "Корпоративные подарки",
      description: "Элегантные решения для бизнеса",
      count: "8 вариантов"
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
              <Link to="/custom-order">Индивидуальный заказ</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100">
        <div className="container mx-auto text-center">
          <Gift className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Подарочные композиции</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовые подарочные наборы для любого повода. Цветы в сочетании с приятными дополнениями 
            создают незабываемые впечатления и дарят радость получателю.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Подарки по поводам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {occasion.icon}
                  </div>
                  <CardTitle className="text-lg">{occasion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{occasion.description}</CardDescription>
                  <Badge variant="secondary">{occasion.count}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Compositions Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Популярные композиции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCompositions.map((composition) => (
              <Card key={composition.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={composition.image} 
                    alt={composition.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-500 hover:bg-purple-600">
                      <Gift className="w-3 h-3 mr-1" />
                      Подарок
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{composition.name}</h3>
                    <div className="text-lg font-bold text-gray-800">{composition.price} ₽</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{composition.description}</p>
                  <Badge variant="outline" className="mb-4">{composition.occasion}</Badge>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">В комплекте:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {composition.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                    <Ribbon className="w-4 h-4 text-purple-500" />
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/composition/${composition.id}`}>Заказать</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/composition/${composition.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Gifts */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Индивидуальные подарки</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Хотите создать уникальный подарок? Мы поможем вам собрать персональную композицию, 
                  учитывая предпочтения получателя и особенности повода.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Выбор цветов по вашему желанию</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Дополнительные подарки: сладости, игрушки, аксессуары</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Персональное поздравление</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Эксклюзивная упаковка</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/custom-order">Создать индивидуальный подарок</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Индивидуальный подарок"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Упаковка подарка"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Готовый подарок"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Доставка подарка"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gift Ideas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Идеи для подарков</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Для неё",
                items: ["Розы + шоколад", "Пионы + духи", "Орхидеи + украшения", "Тюльпаны + косметика"],
                color: "pink"
              },
              {
                title: "Для него",
                items: ["Суккуленты + виски", "Композиция + часы", "Кактусы + аксессуары", "Бонсай + книга"],
                color: "blue"
              },
              {
                title: "Для детей",
                items: ["Яркие цветы + игрушка", "Композиция + сладости", "Букет + воздушные шары", "Цветы + книжка"],
                color: "green"
              }
            ].map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className={`text-${category.color}-600`}>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <Gift className="w-3 h-3 mr-2 text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Сделайте кого-то счастливым сегодня</h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите готовую композицию или создайте индивидуальный подарок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/catalog">Выбрать подарок</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/custom-order">Создать индивидуальный</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCompositions;