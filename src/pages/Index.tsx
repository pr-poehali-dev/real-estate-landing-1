import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const districts = [
  {
    name: 'Центральный округ',
    description: 'Исторический центр с развитой инфраструктурой, парками и культурными объектами',
    price: 'от 120 000 ₽/м²',
    features: ['Развитая инфраструктура', 'Парки и скверы', 'Культурные объекты']
  },
  {
    name: 'Карасунский округ',
    description: 'Современный район с новостройками премиум-класса, рядом с природой',
    price: 'от 95 000 ₽/м²',
    features: ['Новые ЖК', 'Озеро Карасун', 'Экология']
  },
  {
    name: 'Прикубанский округ',
    description: 'Динамично развивающийся округ с доступными ценами и хорошей транспортной доступностью',
    price: 'от 85 000 ₽/м²',
    features: ['Доступные цены', 'Транспорт', 'Новостройки']
  }
];

const blogPosts = [
  {
    title: 'Как выбрать район в Краснодаре для переезда',
    excerpt: 'Подробный гид по выбору района: от инфраструктуры до транспортной доступности',
    date: '15 ноября 2024'
  },
  {
    title: 'Топ-5 ошибок при покупке квартиры в новостройке',
    excerpt: 'Рассказываем о самых частых ошибках покупателей и как их избежать',
    date: '10 ноября 2024'
  },
  {
    title: 'Работа в Краснодаре: как найти вакансию после переезда',
    excerpt: 'Пошаговая инструкция по поиску работы в Краснодаре для переезжающих',
    date: '5 ноября 2024'
  }
];

const testimonials = [
  {
    name: 'Анна и Дмитрий',
    text: 'Переезжали из Москвы всей семьёй. Очень боялись ошибиться с районом. Ребята помогли выбрать идеальный вариант, всё честно рассказали про плюсы и минусы каждого района.',
    location: 'Карасунский округ'
  },
  {
    name: 'Елена',
    text: 'Как же страшно было покупать квартиру на расстоянии! Но команда провела меня за руку через весь процесс. Никакого навязывания, только честные консультации.',
    location: 'Центральный округ'
  },
  {
    name: 'Сергей',
    text: 'Переезжал один, работу ещё не нашёл. Посоветовали районы с хорошей транспортной доступностью и помогли с подбором квартиры в моём бюджете. Спасибо!',
    location: 'Прикубанский округ'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Home" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-primary">ДомЮг</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className="hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('districts')}
                className="hover:text-primary transition-colors"
              >
                Районы
              </button>
              <button 
                onClick={() => setActiveSection('blog')}
                className="hover:text-primary transition-colors"
              >
                Блог
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className="hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button className="hidden md:flex">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Переезжайте в Краснодар{' '}
                <span className="text-primary">без ошибок</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Мы сами переехавшие и знаем все подводные камни. Поможем выбрать район, 
                найти идеальную квартиру и избежать мошенников.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Наш опыт переезда
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/846a970a-b9c5-4180-9711-a23932e37466/files/21bbe5da-5848-47da-9c4d-05baf505b60f.jpg"
                alt="Агент с клиентами"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему нам доверяют</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Честность и прозрачность</h3>
                <p className="text-muted-foreground">
                  Никакого навязывания. Рассказываем как есть: и плюсы, и минусы каждого района и ЖК
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Сами переехавшие</h3>
                <p className="text-muted-foreground">
                  Прошли весь путь сами и знаем все страхи переезжающих. Поможем избежать наших ошибок
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="BookOpen" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">Полная поддержка</h3>
                <p className="text-muted-foreground">
                  Бесплатные консультации, чаты в ТГ и ВК, обзоры районов и подкаст о поиске работы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Обзоры районов Краснодара</h2>
            <p className="text-xl text-muted-foreground">
              Подробная информация о каждом округе для осознанного выбора
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {districts.map((district) => (
              <Card key={district.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{district.name}</h3>
                  <p className="text-muted-foreground">{district.description}</p>
                  <div className="text-2xl font-bold text-primary">{district.price}</div>
                  <div className="flex flex-wrap gap-2">
                    {district.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Подробнее о районе
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы переехавших</h2>
            <p className="text-xl text-muted-foreground">
              Реальные истории наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-none shadow-lg">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог о переезде</h2>
            <p className="text-xl text-muted-foreground">
              Полезные статьи для переезжающих в Краснодар
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.title} className="hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20" />
                <CardContent className="p-6 space-y-4">
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                  <h3 className="text-xl font-semibold leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/846a970a-b9c5-4180-9711-a23932e37466/files/c593d915-366f-44c5-8f35-d1b7ddaed558.jpg"
                alt="Счастливые клиенты"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Готовы к переезду?</h2>
              <p className="text-xl opacity-90">
                Запишитесь на бесплатную консультацию. Расскажем всё о Краснодаре, 
                поможем выбрать район и избежать ошибок.
              </p>
              <div className="space-y-4">
                <Button size="lg" variant="secondary" className="w-full md:w-auto">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="w-full md:w-auto ml-0 md:ml-4 bg-white/10 hover:bg-white/20 border-white/30">
                  <Icon name="Send" className="mr-2" size={20} />
                  Написать ВКонтакте
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">ДомЮг</span>
              </div>
              <p className="text-white/80">
                Агентство недвижимости для переезжающих в Краснодар
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обзоры районов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <a href="#" className="hover:text-white transition-colors">Telegram чат</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  <a href="#" className="hover:text-white transition-colors">Группа ВК</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="#" className="hover:text-white transition-colors">+7 (xxx) xxx-xx-xx</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <p className="text-white/80 text-sm">
                Мы сами переехавшие и помогаем новым жителям Краснодара 
                найти свой идеальный дом без ошибок и мошенников.
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            © 2024 ДомЮг. Агентство недвижимости в Краснодаре
          </div>
        </div>
      </footer>
    </div>
  );
}
