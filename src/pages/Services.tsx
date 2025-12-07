import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'consultation',
    title: 'Бесплатная консультация',
    description: 'Ответим на все вопросы о переезде, районах и жилых комплексах',
    price: 'Бесплатно',
    features: [
      'Консультация по выбору района',
      'Разбор ваших потребностей',
      'Рекомендации по ЖК',
      'Ответы на все вопросы'
    ],
    icon: 'MessageCircle',
    popular: false
  },
  {
    id: 'selection',
    title: 'Подбор квартиры',
    description: 'Найдем идеальную квартиру под ваши требования и бюджет',
    price: 'от 30 000 ₽',
    features: [
      'Анализ вашего запроса',
      'Подбор 5-10 вариантов',
      'Организация просмотров',
      'Проверка документов',
      'Сопровождение сделки'
    ],
    icon: 'Home',
    popular: true
  },
  {
    id: 'accompany',
    title: 'Сопровождение сделки',
    description: 'Полное юридическое сопровождение покупки недвижимости',
    price: 'от 50 000 ₽',
    features: [
      'Проверка юридической чистоты',
      'Помощь с ипотекой',
      'Подготовка документов',
      'Регистрация сделки',
      'Передача ключей'
    ],
    icon: 'FileCheck',
    popular: false
  },
  {
    id: 'relocation',
    title: 'Помощь с переездом',
    description: 'Поможем организовать переезд и обустроиться на новом месте',
    price: 'от 20 000 ₽',
    features: [
      'Организация переезда',
      'Помощь с пропиской',
      'Подключение коммунальных услуг',
      'Поиск школы/садика',
      'Знакомство с районом'
    ],
    icon: 'Truck',
    popular: false
  },
  {
    id: 'investment',
    title: 'Инвестиции в недвижимость',
    description: 'Подберем объекты для выгодных инвестиций',
    price: 'от 100 000 ₽',
    features: [
      'Анализ рынка недвижимости',
      'Подбор доходных объектов',
      'Оценка инвестиционного потенциала',
      'Помощь с оформлением',
      'Стратегия управления'
    ],
    icon: 'TrendingUp',
    popular: false
  },
  {
    id: 'mortgage',
    title: 'Помощь с ипотекой',
    description: 'Подберем выгодные условия ипотеки и поможем с оформлением',
    price: 'от 15 000 ₽',
    features: [
      'Анализ кредитной истории',
      'Подбор банков и программ',
      'Помощь со сбором документов',
      'Сопровождение одобрения',
      'Консультация по субсидиям'
    ],
    icon: 'CreditCard',
    popular: true
  }
];

export default function Services() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    
    setIsDialogOpen(false);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
              <Icon name="Home" size={24} className="text-primary" />
              <span className="text-xl font-bold">ДомЮг</span>
            </button>
            <div className="flex items-center gap-6">
              <button onClick={() => navigate('/')} className="hidden md:block hover:text-primary transition-colors">
                Главная
              </button>
              <button className="hidden md:block font-semibold text-primary">
                Услуги
              </button>
              <Button onClick={() => setIsDialogOpen(true)}>
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Наши <span className="text-primary">услуги</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг для тех, кто переезжает в Краснодар. От консультации до передачи ключей
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all ${
                  service.popular ? 'border-primary border-2' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Популярное
                  </div>
                )}
                <CardContent className="pt-8 pb-6 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  <div className="text-3xl font-bold text-primary">
                    {service.price}
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-1" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={service.popular ? 'default' : 'outline'}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    Заказать услугу
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
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">
              Простой и прозрачный процесс работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-primary">
                1
              </div>
              <h3 className="text-xl font-semibold">Консультация</h3>
              <p className="text-muted-foreground">
                Связываетесь с нами и рассказываете о ваших потребностях
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-primary">
                2
              </div>
              <h3 className="text-xl font-semibold">Подбор</h3>
              <p className="text-muted-foreground">
                Подбираем варианты под ваш бюджет и требования
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-primary">
                3
              </div>
              <h3 className="text-xl font-semibold">Просмотры</h3>
              <p className="text-muted-foreground">
                Организуем просмотры и сопровождаем вас
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-3xl font-bold text-primary">
                4
              </div>
              <h3 className="text-xl font-semibold">Сделка</h3>
              <p className="text-muted-foreground">
                Проводим сделку и передаем вам ключи
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию, и мы поможем вам с переездом в Краснодар
          </p>
          <Button size="lg" variant="secondary" onClick={() => setIsDialogOpen(true)}>
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Заказать услугу</DialogTitle>
            <DialogDescription>
              Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Расскажите о ваших пожеланиях"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
