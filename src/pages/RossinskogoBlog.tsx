import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

export default function RossinskogoBlog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Микрорайон Россинского в Краснодаре: отзывы, цены на квартиры, инфраструктура 2024</title>
        <meta name="description" content="Микрорайон Россинского Краснодар ⭐ Купить квартиру от 105 000 ₽/м². Честные отзывы жителей, обзор инфраструктуры, школы, детские сады. Лучшее соотношение цены и качества в Краснодаре." />
        <meta name="keywords" content="микрорайон россинского краснодар, микрорайон россинского краснодар квартиры, купить квартиру микрорайон россинского краснодар, микрорайон россинского краснодар отзывы, ул кирилла россинского краснодар" />
        <link rel="canonical" href="https://domyug.ru/blog/rossinskogo" />
        <meta property="og:title" content="Микрорайон Россинского Краснодар: отзывы, цены, инфраструктура" />
        <meta property="og:description" content="Полный обзор микрорайона Россинского: цены на квартиры, школы, садики, отзывы жителей. Помогаем купить квартиру." />
        <meta property="og:type" content="article" />
      </Helmet>

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
              <button onClick={() => navigate('/services')} className="hidden md:block hover:text-primary transition-colors">
                Услуги
              </button>
              <Button onClick={() => setIsDialogOpen(true)}>
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
              <Icon name="ArrowLeft" size={20} />
              Назад к главной
            </button>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Микрорайон Россинского в Краснодаре: отзывы, цены на квартиры, инфраструктура
            </h1>
            <div className="flex gap-4 text-sm text-muted-foreground mb-6">
              <span>📅 8 декабря 2024</span>
              <span>⏱️ 10 минут чтения</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Микрорайон Россинского — один из самых популярных районов Краснодара среди переезжающих семей. 
              В этом обзоре расскажем, почему здесь хотят жить, сколько стоят квартиры и какие есть плюсы и минусы.
            </p>
          </div>

          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/files/d85fb274-8489-4fd9-aa19-e55027c11a6d.jpg"
              alt="Микрорайон Россинского Краснодар"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Info" className="text-primary" size={28} />
                  Кратко о районе
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">💰 Цены на квартиры:</p>
                    <p className="text-2xl font-bold text-primary mb-4">от 105 000 ₽/м²</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">👥 Для кого подходит:</p>
                    <p className="text-lg">Семьи с детьми, молодые специалисты</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">⭐ Главное преимущество:</p>
                    <p>Лучшее соотношение цены и качества в Краснодаре</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">🎯 Рейтинг района:</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Почему микрорайон Россинского так популярен?</h2>
            <p className="mb-6 text-lg leading-relaxed">
              Если вы ищете, где купить квартиру в Краснодаре с хорошей инфраструктурой и не переплачивать, 
              микрорайон Россинского — идеальный вариант. Это современный район с продуманной планировкой, 
              который выбирают семьи с детьми и молодые специалисты.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
              <Icon name="Check" className="text-green-600" size={32} />
              Плюсы микрорайона Россинского
            </h2>

            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Trees" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Зелёный спальный район с прогулочными зонами</h3>
                      <p className="text-muted-foreground">
                        Кварталы разделяют зелёные аллеи со взрослыми деревьями и современными детскими площадками. 
                        Собственный парк для прогулок в шаговой доступности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="School" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Отличные школы и детские сады</h3>
                      <p className="text-muted-foreground">
                        Три муниципальных детских садика с положительными отзывами. Школы в шаговой доступности. 
                        Нет проблем с местами, в отличие от других районов.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="MapPin" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Близость к Парку Краснодар</h3>
                      <p className="text-muted-foreground">
                        До Парка Галицкого всего 15 минут на машине или 20-25 минут пешком. Это один из ближайших 
                        недорогих районов к главной достопримечательности города.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="ShoppingCart" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Развитая инфраструктура</h3>
                      <p className="text-muted-foreground">
                        Большое разнообразие магазинов: от сетевых супермаркетов до фермерских лавок. 
                        Поликлиники, аптеки, торговые центры — всё в шаговой доступности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Dumbbell" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Огромный выбор кружков и секций</h3>
                      <p className="text-muted-foreground">
                        Десятки спортивных секций, танцевальных студий, школ искусств для детей и взрослых. 
                        Академия ФК Краснодар в шаговой доступности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Bus" className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Удобная транспортная доступность</h3>
                      <p className="text-muted-foreground">
                        Множество остановок общественного транспорта. До центра 20-30 минут. 
                        Планируется строительство трамвайной ветки.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
              <Icon name="AlertCircle" className="text-orange-600" size={32} />
              Минусы района (честно о недостатках)
            </h2>

            <div className="space-y-4 mb-8">
              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="X" className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ограниченные парковочные места</h3>
                      <p className="text-muted-foreground">
                        Не во всех ЖК хорошо развита парковочная инфраструктура. Рекомендуем сразу рассматривать 
                        покупку или аренду индивидуального парковочного места.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                      <Icon name="Home" className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Не самая красивая застройка в старой части</h3>
                      <p className="text-muted-foreground">
                        Типовые многоэтажки без архитектурных изысков. Но новые ЖК уже строятся по современным стандартам.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Цены на квартиры в микрорайоне Россинского</h2>
            <Card className="mb-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">от 105 000 ₽</div>
                    <p className="text-muted-foreground">за м² в новостройках</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">от 90 000 ₽</div>
                    <p className="text-muted-foreground">за м² вторичное жильё</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">20-30%</div>
                    <p className="text-muted-foreground">дешевле Губернского</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-lg font-semibold">
                  ⭐ Лучшее соотношение цены и качества среди всех районов Краснодара
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Инфраструктура микрорайона Россинского</h2>

            <h3 className="text-2xl font-semibold mb-4 mt-8">🏫 Школы и детские сады</h3>
            <p className="mb-4 text-lg">
              В микрорайоне Россинского отличная ситуация с образовательными учреждениями:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>3 муниципальных детских сада</strong> с положительными отзывами родителей. Красивые современные садики с квалифицированными воспитателями.</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Современные школы</strong> в шаговой доступности. В отличие от перегруженных школ других районов, здесь комфортные условия обучения.</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Частные детские центры</strong> с развивающими кружками от 500-1000 рублей за занятие.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">🏥 Медицинские учреждения</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Детская и взрослая поликлиники</strong> в шаговой доступности. Детская поликлиника получает много положительных отзывов.</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Частные медицинские центры</strong> и стоматологии</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">🏃 Спорт и досуг</h3>
            <p className="mb-4 text-lg">
              Микрорайон Россинского — настоящий рай для любителей активного образа жизни:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Академия ФК Краснодар</strong> в шаговой доступности — мечта для юных футболистов</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Более 7 детских спортивных секций</strong>: борьба, гимнастика, физическое развитие</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Грудничковое плавание</strong> — минимум 4 бассейна</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Фитнес-центры с бассейном и SPA</strong> от 2500 рублей/месяц</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Десятки танцевальных школ</strong>: балет, народные танцы, бачата, брейк-данс</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span><strong>Школы искусств, театральные и вокальные студии</strong> для всех возрастов</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-8">🚗 Транспорт</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span>Несколько остановок общественного транспорта по улицам района</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span>6 маршрутов с конечной остановкой в районе</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span>До центра Краснодара 20-30 минут на общественном транспорте</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                <span>В планах строительство трамвайной линии</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12">Отзывы жителей микрорайона Россинского</h2>
            
            <div className="space-y-4 mb-8">
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "Переехали из Москвы год назад. Долго выбирали район и остановились на Россинского. 
                    Не пожалели ни разу! Тихо, спокойно, всё рядом. Дети ходят в садик пешком, 
                    до парка Галицкого недалеко. Цена за квартиру была очень адекватная."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Екатерина и Андрей</div>
                      <div className="text-sm text-muted-foreground">Семья с двумя детьми</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic mb-4">
                    "Я в восторге от количества кружков для детей! Старший ходит в футбольную академию Краснодара, 
                    младшая на танцы. Всё в 10 минутах ходьбы. Инфраструктура действительно супер."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Мария</div>
                      <div className="text-sm text-muted-foreground">Мама двоих детей</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(4)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                    <Icon name="Star" size={18} className="text-muted" />
                  </div>
                  <p className="italic mb-4">
                    "Хороший район, но есть проблема с парковками. Купили машиноместо отдельно — сейчас всё комфортно. 
                    В целом район отличный, особенно для семей."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Дмитрий</div>
                      <div className="text-sm text-muted-foreground">Автомобилист</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Стоит ли покупать квартиру в микрорайоне Россинского?</h2>
            
            <Card className="mb-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-green-800">✅ Однозначно ДА, если вы:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg"><strong>Семья с детьми</strong> — район создан для комфортной жизни с детьми</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg"><strong>Ищете лучшее соотношение цены и качества</strong> — здесь оно идеальное</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg"><strong>Хотите быть рядом с Парком Краснодар</strong> по адекватной цене</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-green-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg"><strong>Важна развитая инфраструктура</strong> в шаговой доступности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">⚠️ Подумайте дважды, если:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg">Вам нужна квартира с видом на парк прямо из окна</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg">У вас несколько машин и негде их парковать</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="AlertCircle" className="text-orange-600 shrink-0 mt-1" size={24} />
                    <span className="text-lg">Вам критично важна архитектурная эстетика застройки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6 mt-12">Как купить квартиру в микрорайоне Россинского?</h2>
            <p className="text-lg mb-6">
              Микрорайон Россинского — очень популярный район, квартиры здесь разбирают быстро. 
              Мы поможем вам найти лучший вариант и избежать типичных ошибок при покупке.
            </p>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 mb-8">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Что мы делаем для вас:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Подбираем лучшие варианты под ваш бюджет</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Проверяем юридическую чистоту квартиры</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Организуем просмотры в удобное время</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Помогаем с ипотекой и субсидиями</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Сопровождаем до передачи ключей</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary shrink-0 mt-1" size={20} />
                    <span>Рассказываем честно все плюсы и минусы</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Хотите купить квартиру в микрорайоне Россинского?</h3>
              <p className="text-xl mb-6 opacity-90">
                Оставьте заявку на бесплатную консультацию. Мы расскажем о лучших вариантах 
                и поможем не ошибиться с выбором.
              </p>
              <Button size="lg" variant="secondary" onClick={() => setIsDialogOpen(true)}>
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию бесплатно
              </Button>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Сколько стоит квартира в микрорайоне Россинского?</h3>
                  <p className="text-muted-foreground">
                    Цены на квартиры в новостройках начинаются от 105 000 ₽ за м². На вторичном рынке 
                    можно найти варианты от 90 000 ₽ за м². Это одни из самых доступных цен среди районов 
                    с хорошей инфраструктурой.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Есть ли в районе школы и детские сады?</h3>
                  <p className="text-muted-foreground">
                    Да, в микрорайоне Россинского 3 муниципальных детских сада и несколько школ в шаговой доступности. 
                    В отличие от многих других районов, здесь нет проблем с местами в образовательных учреждениях.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Далеко ли до Парка Краснодар?</h3>
                  <p className="text-muted-foreground">
                    До Парка Галицкого от микрорайона Россинского всего 15 минут на машине или 20-25 минут пешком. 
                    Это один из ближайших районов к парку с доступными ценами на жильё.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Подходит ли район для семей с детьми?</h3>
                  <p className="text-muted-foreground">
                    Микрорайон Россинского — один из лучших районов Краснодара для семей с детьми. 
                    Здесь отличные школы и садики, множество детских площадок, спортивных секций и кружков, 
                    зелёные зоны для прогулок.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Есть ли проблемы с парковками?</h3>
                  <p className="text-muted-foreground">
                    В некоторых старых домах парковочных мест может не хватать. Мы рекомендуем сразу рассматривать 
                    покупку или аренду индивидуального машиноместа. В новых ЖК эта проблема уже решена застройщиками.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Выводы: микрорайон Россинского — лучший выбор для семей</h2>
            <p className="text-lg mb-4">
              Микрорайон Россинского в Краснодаре заслуженно считается одним из самых популярных районов среди переезжающих. 
              Здесь идеальное сочетание доступных цен, развитой инфраструктуры и комфортной среды для жизни.
            </p>
            <p className="text-lg mb-6">
              Если вы ищете, где купить квартиру в Краснодаре с хорошей инфраструктурой для семьи, 
              микрорайон Россинского должен быть в топе вашего списка. Мы поможем вам найти идеальный вариант 
              и избежать типичных ошибок при покупке.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="text-primary shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Нужна помощь с выбором квартиры?</h3>
                    <p className="text-muted-foreground mb-4">
                      Мы — агентство недвижимости для переезжающих. Сами переехали в Краснодар и знаем все подводные камни. 
                      Поможем выбрать район, найти квартиру и провести сделку безопасно.
                    </p>
                    <Button onClick={() => setIsDialogOpen(true)}>
                      <Icon name="Phone" className="mr-2" size={18} />
                      Заказать бесплатную консультацию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Бесплатная консультация</DialogTitle>
            <DialogDescription>
              Расскажем о микрорайоне Россинского и поможем подобрать квартиру
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <Textarea
              placeholder="Расскажите о ваших пожеланиях"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
            />
            <Button type="submit" className="w-full">
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
