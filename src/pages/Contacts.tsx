import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const Contacts = () => {
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
              <Link to="/contacts" className="text-pink-500 font-semibold">Контакты</Link>
            </nav>
            <Button asChild>
              <Link to="/catalog">Каталог</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы помочь вам выбрать идеальный букет и ответить на все ваши вопросы
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Напишите нам</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Тема</label>
                      <Input placeholder="Тема сообщения" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите, чем мы можем помочь..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Наши контакты</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Телефон</h3>
                        <p className="text-gray-600">+7 (495) 123-45-67</p>
                        <p className="text-gray-600">+7 (495) 123-45-68</p>
                        <p className="text-sm text-gray-500 mt-1">Круглосуточно</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">info@flowerparadise.ru</p>
                        <p className="text-gray-600">orders@flowerparadise.ru</p>
                        <p className="text-sm text-gray-500 mt-1">Ответим в течение часа</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Адрес</h3>
                        <p className="text-gray-600">г. Москва, ул. Цветочная, д. 15</p>
                        <p className="text-gray-600">м. Цветной бульвар</p>
                        <p className="text-sm text-gray-500 mt-1">5 минут пешком от метро</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-purple-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Режим работы</h3>
                        <div className="space-y-1 text-gray-600">
                          <p>Пн-Пт: 8:00 - 22:00</p>
                          <p>Сб-Вс: 9:00 - 21:00</p>
                          <p className="text-sm text-gray-500">Доставка: 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Как нас найти</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Интерактивная карта</p>
              <p className="text-sm text-gray-500">г. Москва, ул. Цветочная, д. 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Как быстро вы можете доставить букет?",
                answer: "Стандартная доставка занимает 2-4 часа. Экспресс-доставка возможна в течение 1 часа за дополнительную плату."
              },
              {
                question: "Можно ли заказать букет на определенное время?",
                answer: "Да, мы принимаем заказы с доставкой к определенному времени. Рекомендуем оформлять такие заказы заранее."
              },
              {
                question: "Какие способы оплаты вы принимаете?",
                answer: "Мы принимаем оплату банковскими картами, электронными кошельками, наличными курьеру и банковским переводом."
              },
              {
                question: "Есть ли у вас программа лояльности?",
                answer: "Да, у нас есть система скидок для постоянных клиентов. При заказе от 10,000 ₽ в месяц предоставляется скидка 10%."
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
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Позвоните нам прямо сейчас или выберите букет в нашем каталоге
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="tel:+74951234567">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить сейчас
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/catalog">Выбрать букет</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;