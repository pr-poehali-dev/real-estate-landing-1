import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const districts = [
  {
    name: 'Немецкая деревня',
    description: 'Живите как на природе с городской инфраструктурой. Малоэтажная застройка, школы, садики',
    price: 'от 90 000 ₽/м²',
    features: ['Для семей с детьми', 'Удобный выезд на море', 'Будущий парк и термальный комплекс'],
    link: '/districts/nemetskaya-derevnya',
    forWhom: 'Для семей с детьми',
    rating: { families: 5, youth: 3, drivers: 5, pensioners: 4, investment: 4 }
  },
  {
    name: 'Западный обход/Энка',
    description: 'Много школ и садиков, безопасный район с патрулированием. Отличная инфраструктура',
    price: 'от 95 000 ₽/м²',
    features: ['Много школ и садиков', 'Охрана территории', 'Трамвайная ветка в планах'],
    link: '/districts/zapadny-obhod',
    forWhom: 'Для семей и инвесторов',
    rating: { families: 5, youth: 3, drivers: 4, pensioners: 4, investment: 5 }
  },
  {
    name: 'Губернский',
    description: 'Близость к Парку Краснодар, развитая инфраструктура, школы и детские сады',
    price: 'от 115 000 ₽/м²',
    features: ['Парк Краснодар рядом', 'Школы и садики', 'Культурные объекты'],
    link: '/districts/gubernsky',
    forWhom: 'Для семей и инвесторов',
    rating: { families: 5, youth: 4, drivers: 3, pensioners: 4, investment: 5 }
  },
  {
    name: 'ул. Кирилла Россинского',
    description: 'Лучшее соотношение цены и качества. Школы, садики, собственный парк',
    price: 'от 105 000 ₽/м²',
    features: ['Цена-качество', 'Парк Краснодар 15 мин', 'Трамвай в планах'],
    link: '/districts/rossinskogo',
    forWhom: 'Популярен у семей',
    rating: { families: 5, youth: 4, drivers: 4, pensioners: 4, investment: 5 }
  },
  {
    name: 'Молодежный',
    description: 'Школы, садики, поликлиники, удобное транспортное сообщение. Бюджетные цены',
    price: 'от 85 000 ₽/м²',
    features: ['Развитая инфраструктура', 'Поликлиники', 'Бюджетно'],
    link: '/districts/molodezhny',
    forWhom: 'Для семей и пенсионеров',
    rating: { families: 4, youth: 3, drivers: 3, pensioners: 5, investment: 3 }
  },
  {
    name: 'Гидростроителей',
    description: 'Зелёный район с озером Старая Кубань. Недорогая вторичка, спокойная жизнь',
    price: 'от 75 000 ₽/м²',
    features: ['Самый зелёный', 'Озеро рядом', 'Недорого'],
    link: '/districts/gidrostroiteley',
    forWhom: 'Для ограниченного бюджета',
    rating: { families: 3, youth: 2, drivers: 3, pensioners: 4, investment: 2 }
  },
  {
    name: 'Фестивальный',
    description: 'Много школ и садиков, близко к центру и ВУЗам. Отлично для студентов',
    price: 'от 110 000 ₽/м²',
    features: ['Близко к ВУЗам', 'Много школ', 'Центр рядом'],
    link: '/districts/festivalny',
    forWhom: 'Для студентов и семей',
    rating: { families: 5, youth: 5, drivers: 4, pensioners: 3, investment: 5 }
  },
  {
    name: 'Знаменский',
    description: 'Бюджетные цены, близко к аэропорту. Федеральный проект «Новый Краснодар»',
    price: 'от 70 000 ₽/м²',
    features: ['Аэропорт рядом', 'Очень бюджетно', 'Огромный потенциал'],
    link: '/districts/znamensky',
    forWhom: 'Для инвесторов (5-10 лет)',
    rating: { families: 3, youth: 2, drivers: 5, pensioners: 3, investment: 5 }
  },
  {
    name: 'Новая Адыгея',
    description: 'Самые низкие цены, семейная ипотека 6%. Важно покупать со знающими людьми',
    price: 'от 60 000 ₽/м²',
    features: ['Семейная ипотека 6%', 'Очень дёшево', 'Школы в ЖК'],
    link: '/districts/novaya-adygeya',
    forWhom: 'Для очень ограниченного бюджета',
    rating: { families: 4, youth: 2, drivers: 3, pensioners: 2, investment: 4 }
  }
];

const blogPosts = [
  {
    title: 'Губернский район: жизнь рядом с Парком Краснодар',
    excerpt: 'Честные отзывы жителей, актуальные цены, полный обзор инфраструктуры',
    date: '15 декабря 2024'
  },
  {
    title: 'Район Западного обхода: лучшее для семей с детьми',
    excerpt: 'Много школ и садиков, безопасность, перспективы развития',
    date: '12 декабря 2024'
  },
  {
    title: 'Немецкая деревня: малоэтажка с городской инфраструктурой',
    excerpt: 'Полный обзор уникального жилого комплекса с реальными отзывами',
    date: '8 декабря 2024'
  },
  {
    title: 'Улица Россинского: идеальное соотношение цены и качества',
    excerpt: 'Почему этот район так популярен среди переезжающих семей',
    date: '5 декабря 2024'
  },
  {
    title: 'Знаменский: инвестиции в будущее с федеральным проектом',
    excerpt: 'Как федеральный проект "Новый Краснодар" изменит район',
    date: '1 декабря 2024'
  },
  {
    title: 'Новая Адыгея: семейная ипотека 6% реально работает',
    excerpt: 'Как купить квартиру по льготной ипотеке и не ошибиться с выбором ЖК',
    date: '28 ноября 2024'
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setIsDialogOpen(false);
    setFormData({ name: '', phone: '', message: '' });
  };

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
            <Button className="hidden md:flex" onClick={() => setIsDialogOpen(true)}>
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
                <Button size="lg" className="text-lg" onClick={() => setIsDialogOpen(true)}>
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
                src="https://cdn.poehali.dev/files/d85fb274-8489-4fd9-aa19-e55027c11a6d.jpg"
                alt="Вид из новой квартиры"
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
            <h2 className="text-4xl font-bold mb-4">Районы Краснодара: где лучше купить квартиру для жизни</h2>
            <p className="text-xl text-muted-foreground">
              Мы сравнили все районы по ценам, инфраструктуре, транспортной доступности и экологии
            </p>
          </div>
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg shadow-md">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-4 text-left font-semibold">Район</th>
                  <th className="p-4 text-left font-semibold">Для кого</th>
                  <th className="p-4 text-left font-semibold">Цена за м²</th>
                  <th className="p-4 text-center font-semibold">👨‍👩‍👧</th>
                  <th className="p-4 text-center font-semibold">🎓</th>
                  <th className="p-4 text-center font-semibold">🚗</th>
                  <th className="p-4 text-center font-semibold">👴</th>
                  <th className="p-4 text-center font-semibold">💰</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {districts.map((district, index) => (
                  <tr key={district.name} className={index % 2 === 0 ? 'bg-muted/10' : ''}>
                    <td className="p-4 font-semibold">{district.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{district.forWhom}</td>
                    <td className="p-4 font-semibold text-primary">{district.price}</td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < district.rating.families ? 'fill-primary text-primary' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < district.rating.youth ? 'fill-primary text-primary' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < district.rating.drivers ? 'fill-primary text-primary' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < district.rating.pensioners ? 'fill-primary text-primary' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < district.rating.investment ? 'fill-primary text-primary' : 'text-muted'} 
                          />
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <Button size="sm" variant="outline" onClick={() => setIsDialogOpen(true)}>
                        Подробнее
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 flex gap-4 text-sm text-muted-foreground justify-center flex-wrap">
              <span>👨‍👩‍👧 - Для семей с детьми</span>
              <span>🎓 - Для молодежи и студентов</span>
              <span>🚗 - Для автомобилистов</span>
              <span>👴 - Для пенсионеров</span>
              <span>💰 - Для инвестиций</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {districts.slice(0, 6).map((district) => (
              <Card key={district.name} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{district.price}</div>
                    <div className="text-sm text-muted-foreground">{district.forWhom}</div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{district.name}</h3>
                  <p className="text-muted-foreground text-sm">{district.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {district.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => setIsDialogOpen(true)}>
                    Узнать больше
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Сообщество "Переехавшие и Переезжающие"</h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к нашему чату для получения актуальной информации и поддержки
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6 space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold">Советы о районах и ЖК</h3>
                <p className="text-sm text-muted-foreground">
                  От реальных жителей, а не от застройщиков
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="MessageSquare" className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold">Нетворкинг</h3>
                <p className="text-sm text-muted-foreground">
                  Найдите единомышленников и будущих соседей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Shield" className="text-secondary" size={32} />
                </div>
                <h3 className="font-semibold">Защита от мошенников</h3>
                <p className="text-sm text-muted-foreground">
                  Отличайте правду от слухов и фейковых объявлений
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6 space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Tag" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold">Выгодные предложения</h3>
                <p className="text-sm text-muted-foreground">
                  Первыми узнавайте об акциях застройщиков
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => setIsDialogOpen(true)}>
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Присоединиться к сообществу
            </Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Бесплатная консультация</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Ваше имя
              </label>
              <Input
                id="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Телефон
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Ваш вопрос (необязательно)
              </label>
              <Textarea
                id="message"
                placeholder="Расскажите, что вас интересует..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Icon name="Send" className="mr-2" size={18} />
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}