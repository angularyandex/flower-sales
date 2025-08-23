import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Crown, Sparkles, Camera, Users } from 'lucide-react';

const WeddingBouquets = () => {
  const weddingBouquets = [
    {
      id: 1,
      name: "Классический белый",
      price: 4500,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Элегантные белые розы и пионы",
      style: "Классический",
      season: "Круглый год"
    },
    {
      id: 2,
      name: "Пудровая нежность",
      price: 5200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Нежные розы в пудровых тонах",
      style: "Романтический",
      season: "Весна-Лето"
    },
    {
      id: 3,
      name: "Рустик шарм",
      price: 3800,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Полевые цветы и зелень",
      style: "Рустик",
      season: "Лето-Осень"
    },
    {
      id: 4,
      name: "Королевский букет",
      price: 7500,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Премиум розы и орхидеи",
      style: "Люкс",
      season: "Круглый год"
    },
    {
      id: 5,
      name: "Бохо стиль",
      price: 4200,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Сухоцветы и пампасная трава",
      style: "Бохо",
      season: "Осень-Зима"
    },
    {
      id: 6,
      name: "Каскадный букет",
      price: 6800,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ниспадающая композиция",
      style: "Классический",
      season: "Круглый год"
    }
  ];

  const services = [
    {
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      title: "Индивидуальный дизайн",
      description: "Создаем уникальные букеты по вашему эскизу"
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-500" />,
      title: "Фотосессия букета",
      description: "Профессиональные фото вашего букета"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Букеты для подружек",
      description: "Комплект букетов в едином стиле"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Декор церемонии",
      description: "Полное оформление свадебной церемонии"
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100">
        <div className="container mx-auto text-center">
          <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Свадебные букеты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаем неповторимые свадебные букеты, которые станут идеальным дополнением 
            к самому важному дню в вашей жизни. Каждый букет — произведение искусства.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h2>
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
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Bouquets Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Коллекция свадебных букетов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingBouquets.map((bouquet) => (
              <Card key={bouquet.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-800">{bouquet.style}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{bouquet.name}</h3>
                    <div className="text-lg font-bold text-gray-800">{bouquet.price} ₽</div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{bouquet.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{bouquet.season}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">5.0</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link to={`/bouquet/${bouquet.id}`}>Заказать</Link>
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

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Как мы создаем ваш букет</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Обсуждаем стиль свадьбы, цветовую гамму и ваши пожелания"
              },
              {
                step: "02",
                title: "Эскиз",
                description: "Создаем эскиз букета с учетом всех деталей"
              },
              {
                step: "03",
                title: "Создание",
                description: "Флорист создает букет из свежих цветов"
              },
              {
                step: "04",
                title: "Доставка",
                description: "Доставляем букет в день свадьбы в идеальном состоянии"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Отзывы невест</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна и Михаил",
                date: "Свадьба 15.06.2024",
                text: "Букет превзошел все наши ожидания! Он был идеально подобран к платью и общему стилю свадьбы. Цветы оставались свежими весь день.",
                rating: 5
              },
              {
                name: "Елена и Дмитрий",
                date: "Свадьба 22.08.2024",
                text: "Профессиональный подход на высшем уровне. Флорист учла все наши пожелания и создала настоящее произведение искусства.",
                rating: 5
              },
              {
                name: "Мария и Александр",
                date: "Свадьба 10.09.2024",
                text: "Спасибо за волшебный букет! Он стал изюминкой нашей свадьбы. Все гости восхищались красотой композиции.",
                rating: 5
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
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы создать букет мечты?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию, и мы создадим идеальный букет для вашей свадьбы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/custom-order">Индивидуальный заказ</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/contacts">Записаться на консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingBouquets;