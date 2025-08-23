import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Clock, Leaf, Star, Target, Eye } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Анна Петрова",
      role: "Главный флорист",
      experience: "15 лет опыта",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Мастер свадебной флористики, лауреат международных конкурсов"
    },
    {
      name: "Михаил Сидоров",
      role: "Дизайнер композиций",
      experience: "8 лет опыта",
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Специалист по корпоративному оформлению и праздничным композициям"
    },
    {
      name: "Елена Козлова",
      role: "Флорист-консультант",
      experience: "6 лет опыта",
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Эксперт по уходу за растениями и подбору букетов"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Лучшая флористическая студия 2023",
      description: "Награда от Ассоциации флористов России"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Более 10,000 довольных клиентов",
      description: "За 8 лет работы мы создали тысячи прекрасных букетов"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "Рейтинг 4.9/5",
      description: "Высокие оценки от наших клиентов"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Эко-сертификат",
      description: "Используем только экологически чистые материалы"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Любовь к делу",
      description: "Каждый букет создается с душой и вниманием к деталям"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Качество",
      description: "Используем только свежие цветы от проверенных поставщиков"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому заказу"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Надежность",
      description: "Всегда выполняем обещания в срок"
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
              <Link to="/about" className="text-pink-500 font-semibold">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-500 transition-colors">Контакты</Link>
            </nav>
            <Button asChild>
              <Link to="/catalog">Каталог</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">О нашей студии</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уже 8 лет мы создаем неповторимые цветочные композиции, которые дарят радость и делают особенными самые важные моменты в жизни наших клиентов
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ЦветочныйРай начал свою историю в 2016 году как небольшая семейная студия флористики. 
                  Основатели, Анна и Михаил, объединили свою страсть к цветам и желание создавать красоту.
                </p>
                <p>
                  За годы работы мы выросли в команду профессиональных флористов, но сохранили главное — 
                  индивидуальный подход к каждому клиенту и внимание к мельчайшим деталям.
                </p>
                <p>
                  Сегодня мы гордимся тем, что стали частью самых важных событий в жизни тысяч людей: 
                  свадеб, дней рождения, юбилеев и просто моментов, когда хочется сказать "Я тебя люблю".
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/catalog">Посмотреть наши работы</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Наша студия"
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Процесс создания"
                className="rounded-lg shadow-md mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Готовые букеты"
                className="rounded-lg shadow-md -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Команда"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 text-center">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Наша миссия</h3>
              <p className="text-gray-600">
                Создавать эмоциональные моменты через искусство флористики, делая каждый день наших клиентов 
                ярче и прекраснее. Мы верим, что цветы — это язык чувств, который понятен каждому.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <Eye className="w-12 h-12 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Наше видение</h3>
              <p className="text-gray-600">
                Стать ведущей флористической студией, которая устанавливает стандарты качества и креативности 
                в индустрии. Мы стремимся к тому, чтобы каждый наш букет стал произведением искусства.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Консультация",
                description: "Обсуждаем ваши пожелания и подбираем идеальное решение"
              },
              {
                step: "02",
                title: "Создание",
                description: "Наши флористы создают композицию с учетом всех деталей"
              },
              {
                step: "03",
                title: "Упаковка",
                description: "Бережно упаковываем букет в красивую и экологичную упаковку"
              },
              {
                step: "04",
                title: "Доставка",
                description: "Доставляем в указанное время и место в идеальном состоянии"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы создать что-то прекрасное вместе?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами, и мы поможем воплотить ваши цветочные мечты в реальность
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
              <Link to="/catalog">Посмотреть каталог</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;