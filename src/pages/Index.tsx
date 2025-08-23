import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Truck, Clock, Star, Gift, Leaf, Award, Users, Phone, MapPin } from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Свадебные букеты",
      description: "Создаем неповторимые букеты для самого важного дня в вашей жизни",
      link: "/wedding-bouquets"
    },
    {
      icon: <Gift className="w-8 h-8 text-purple-500" />,
      title: "Подарочные композиции",
      description: "Оригинальные цветочные подарки для любого повода",
      link: "/gift-compositions"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Доставка 24/7",
      description: "Быстрая доставка свежих цветов в любое время",
      link: "/delivery"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Экспресс заказы",
      description: "Готовим букеты за 30 минут для срочных заказов",
      link: "/express-orders"
    }
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Премиум качество",
      description: "Только свежие цветы от лучших поставщиков"
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Эко-упаковка",
      description: "Используем экологически чистые материалы"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: "Опытные флористы",
      description: "Команда профессионалов с многолетним опытом"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Индивидуальный подход",
      description: "Учитываем все ваши пожелания и предпочтения"
    }
  ];

  const popularBouquets = [
    {
      id: 1,
      name: "Романтический микс",
      price: "2500 ₽",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 2,
      name: "Весенняя свежесть",
      price: "1800 ₽",
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      name: "Элегантные розы",
      price: "3200 ₽",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5.0,
      reviews: 203
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-800">ЦветочныйРай</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/catalog" className="text-gray-600 hover:text-pink-500 transition-colors">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-600 hover:text-pink-500 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-500 transition-colors">Контакты</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-semibold">+7 (495) 123-45-67</span>
              <Button asChild>
                <Link to="/cart">Корзина</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Создаем <span className="text-pink-500">волшебство</span> из цветов
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональная флористика, свежие цветы и быстрая доставка по всему городу. 
            Делаем каждый момент особенным!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/catalog">Посмотреть каталог</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/custom-order">Индивидуальный заказ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button variant="outline" asChild>
                    <Link to={service.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Bouquets */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Популярные букеты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularBouquets.map((bouquet) => (
              <Card key={bouquet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold">{bouquet.name}</h4>
                    <Badge variant="secondary">{bouquet.price}</Badge>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{bouquet.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({bouquet.reviews} отзывов)</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/bouquet/${bouquet.id}`}>Заказать</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Цветы для любого повода</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "День рождения", link: "/occasions/birthday" },
              { name: "Свадьба", link: "/occasions/wedding" },
              { name: "8 Марта", link: "/occasions/womens-day" },
              { name: "День Святого Валентина", link: "/occasions/valentines" },
              { name: "Выпускной", link: "/occasions/graduation" },
              { name: "Корпоративные", link: "/occasions/corporate" }
            ].map((occasion, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <Link to={occasion.link} className="text-sm font-medium text-gray-700 hover:text-pink-500">
                    {occasion.name}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Отзывы клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Потрясающие букеты! Заказывала на свадьбу - все гости были в восторге. Цветы свежие, композиция великолепная."
              },
              {
                name: "Михаил Сидоров",
                rating: 5,
                text: "Быстрая доставка, отличное качество. Жена была очень довольна букетом на день рождения. Обязательно закажу еще!"
              },
              {
                name: "Елена Козлова",
                rating: 5,
                text: "Профессиональный подход, красивая упаковка, доступные цены. Рекомендую всем друзьям и знакомым!"
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold text-gray-800">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Советы по уходу за цветами</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Свежая вода",
                tip: "Меняйте воду каждые 2-3 дня для продления жизни букета"
              },
              {
                title: "Обрезка стеблей",
                tip: "Подрезайте стебли под углом под проточной водой"
              },
              {
                title: "Температура",
                tip: "Избегайте прямых солнечных лучей и сквозняков"
              },
              {
                title: "Подкормка",
                tip: "Используйте специальные добавки для цветов"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Leaf className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Сезонные предложения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Весенние цветы"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Весна 2024</Badge>
                <h4 className="text-xl font-semibold mb-2">Весенняя коллекция</h4>
                <p className="text-gray-600 mb-4">Нежные тюльпаны, ароматные гиацинты и яркие нарциссы</p>
                <Button asChild>
                  <Link to="/seasonal/spring">Смотреть коллекцию</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Летние цветы"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2">Лето 2024</Badge>
                <h4 className="text-xl font-semibold mb-2">Летнее изобилие</h4>
                <p className="text-gray-600 mb-4">Яркие подсолнухи, пионы и полевые цветы</p>
                <Button asChild>
                  <Link to="/seasonal/summer">Смотреть коллекцию</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Корпоративные услуги</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Оформление офисов, корпоративных мероприятий и бизнес-подарки
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Офисное озеленение</h4>
                <p className="text-gray-600">Создаем уютную атмосферу в рабочем пространстве</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Бизнес-подарки</h4>
                <p className="text-gray-600">Элегантные композиции для деловых партнеров</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Оформление мероприятий</h4>
                <p className="text-gray-600">Профессиональное декорирование любых событий</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/corporate">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h3>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами любым удобным способом или оформите заказ онлайн
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Москва, ул. Цветочная, 15</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Контакты</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/catalog">Каталог товаров</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-pink-500" />
                <h4 className="text-lg font-semibold">ЦветочныйРай</h4>
              </div>
              <p className="text-gray-400">
                Создаем красоту и дарим радость через искусство флористики
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/roses" className="hover:text-white">Розы</Link></li>
                <li><Link to="/tulips" className="hover:text-white">Тюльпаны</Link></li>
                <li><Link to="/peonies" className="hover:text-white">Пионы</Link></li>
                <li><Link to="/mixed-bouquets" className="hover:text-white">Смешанные букеты</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/wedding-bouquets" className="hover:text-white">Свадебные букеты</Link></li>
                <li><Link to="/corporate" className="hover:text-white">Корпоративные услуги</Link></li>
                <li><Link to="/care-guide" className="hover:text-white">Уход за цветами</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@flowerparadise.ru</p>
                <p>Москва, ул. Цветочная, 15</p>
                <p>Ежедневно: 8:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЦветочныйРай. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;