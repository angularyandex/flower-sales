import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Star, ShoppingCart, Minus, Plus, Truck, Shield, Camera, MessageCircle } from 'lucide-react';

const BouquetDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - в реальном приложении данные загружались бы по ID
  const bouquet = {
    id: 1,
    name: "Романтический микс",
    price: 2500,
    originalPrice: 3000,
    images: [
      "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    rating: 4.9,
    reviews: 156,
    description: "Изысканная композиция из нежных роз и эустом в элегантной упаковке. Идеальный выбор для выражения самых теплых чувств.",
    flowers: ["15 роз", "7 эустом", "Гипсофила", "Зелень"],
    colors: ["Розовый", "Белый", "Кремовый"],
    size: "Средний (35 см)",
    care: "7-10 дней при правильном уходе",
    occasion: ["День рождения", "Годовщина", "Признание в любви"],
    availability: "В наличии",
    deliveryTime: "2-4 часа"
  };

  const reviews = [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      date: "15.01.2024",
      text: "Потрясающий букет! Цветы свежие, композиция очень красивая. Доставили точно в срок.",
      helpful: 12
    },
    {
      id: 2,
      name: "Михаил С.",
      rating: 5,
      date: "10.01.2024",
      text: "Заказывал на день рождения жены. Она была в восторге! Качество на высоте.",
      helpful: 8
    },
    {
      id: 3,
      name: "Елена П.",
      rating: 4,
      date: "05.01.2024",
      text: "Хороший букет, но упаковка могла бы быть поинтереснее. В целом довольна.",
      helpful: 5
    }
  ];

  const relatedBouquets = [
    {
      id: 2,
      name: "Весенняя свежесть",
      price: 1800,
      image: "https://images.pexels.com/photos/1458735/pexels-photo-1458735.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.8
    },
    {
      id: 3,
      name: "Элегантные розы",
      price: 3200,
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5.0
    },
    {
      id: 4,
      name: "Полевые цветы",
      price: 1200,
      image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.6
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

      {/* Breadcrumbs */}
      <section className="py-4 px-4 bg-white border-b">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-pink-500">Главная</Link>
            <span className="mx-2">/</span>
            <Link to="/catalog" className="hover:text-pink-500">Каталог</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{bouquet.name}</span>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={bouquet.images[selectedImage]} 
                alt={bouquet.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {bouquet.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? 'border-pink-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${bouquet.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{bouquet.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg text-gray-600 ml-1">{bouquet.rating}</span>
                  <span className="text-gray-500 ml-2">({bouquet.reviews} отзывов)</span>
                </div>
                <Badge className="bg-green-500 hover:bg-green-600">{bouquet.availability}</Badge>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-gray-800">{bouquet.price} ₽</div>
                {bouquet.originalPrice && (
                  <div className="text-xl text-gray-500 line-through">{bouquet.originalPrice} ₽</div>
                )}
                {bouquet.originalPrice && (
                  <Badge variant="destructive">
                    Скидка {Math.round((1 - bouquet.price / bouquet.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6">{bouquet.description}</p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-sm mb-2">Размер:</h4>
                <p className="text-gray-600">{bouquet.size}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Стойкость:</h4>
                <p className="text-gray-600">{bouquet.care}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Доставка:</h4>
                <p className="text-gray-600">{bouquet.deliveryTime}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Повод:</h4>
                <div className="flex flex-wrap gap-1">
                  {bouquet.occasion.slice(0, 2).map((occ, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {occ}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Количество:</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Добавить в корзину
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-blue-500" />
                <span>Быстрая доставка</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Гарантия свежести</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Camera className="w-4 h-4 text-purple-500" />
                <span>Фото-отчет</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Детали</TabsTrigger>
              <TabsTrigger value="care">Уход</TabsTrigger>
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы ({bouquet.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Состав букета</h3>
                      <ul className="space-y-2">
                        {bouquet.flowers.map((flower, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            <span>{flower}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-4">Цветовая гамма</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {bouquet.colors.map((color, index) => (
                          <Badge key={index} variant="outline">{color}</Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold text-xl mb-4">Подходящие поводы</h3>
                      <div className="flex flex-wrap gap-2">
                        {bouquet.occasion.map((occ, index) => (
                          <Badge key={index} variant="secondary">{occ}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="care" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-6">Рекомендации по уходу</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Первые действия:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Подрежьте стебли под углом 45°</li>
                        <li>• Поставьте в чистую прохладную воду</li>
                        <li>• Удалите листья ниже уровня воды</li>
                        <li>• Поставьте в прохладное место</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Ежедневный уход:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Меняйте воду каждые 2-3 дня</li>
                        <li>• Обновляйте срез стеблей</li>
                        <li>• Удаляйте увядшие лепестки</li>
                        <li>• Опрыскивайте цветы водой</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="delivery" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="font-semibold text-xl mb-6">Информация о доставке</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Варианты доставки:</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Стандартная (2-4 часа)</span>
                          <Badge>300 ₽</Badge>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Экспресс (1 час)</span>
                          <Badge>800 ₽</Badge>
                        </li>
                        <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>К определенному времени</span>
                          <Badge>500 ₽</Badge>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Гарантии:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Shield className="w-4 h-4 text-green-500 mr-2" />
                          Гарантия свежести 7 дней
                        </li>
                        <li className="flex items-center">
                          <Camera className="w-4 h-4 text-blue-500 mr-2" />
                          Фото-отчет о доставке
                        </li>
                        <li className="flex items-center">
                          <MessageCircle className="w-4 h-4 text-purple-500 mr-2" />
                          Поддержка 24/7
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          👍 Полезно ({review.helpful})
                        </Button>
                      </div>
                      <p className="text-gray-600">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Оставить отзыв</h4>
                    <Button>Написать отзыв</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Похожие букеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBouquets.map((related) => (
              <Card key={related.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={related.image} 
                    alt={related.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{related.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold">{related.price} ₽</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{related.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/bouquet/${related.id}`}>Посмотреть</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BouquetDetail;