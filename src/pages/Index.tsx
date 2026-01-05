import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    alcohol: 'wine',
    message: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-08-12T15:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', guests: '1', alcohol: 'wine', message: '' });
  };

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-12">
            <img
              src="https://cdn.poehali.dev/files/Изображение PNG.png"
              alt="Никита и Марта"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mx-auto mb-8 shadow-xl border-4 border-accent/20"
            />
          </div>
          <h1 className="font-cormorant text-7xl md:text-8xl lg:text-9xl font-light text-foreground mb-6 tracking-wide">
            Никита & Марта
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mb-4">
            Приглашаем вас разделить с нами этот особенный день
          </p>
          <p className="font-cormorant text-3xl md:text-4xl text-foreground mt-8">
            12 августа 2026
          </p>

          <div className="mt-16 max-w-4xl mx-auto">
            <p className="font-montserrat text-sm uppercase tracking-widest text-muted-foreground mb-6">
              До важного дня осталось
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-accent/10">
                <div className="font-cormorant text-4xl md:text-6xl text-accent font-semibold mb-2">
                  {timeLeft.days}
                </div>
                <div className="font-montserrat text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Дней
                </div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-accent/10">
                <div className="font-cormorant text-4xl md:text-6xl text-accent font-semibold mb-2">
                  {timeLeft.hours}
                </div>
                <div className="font-montserrat text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Часов
                </div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-accent/10">
                <div className="font-cormorant text-4xl md:text-6xl text-accent font-semibold mb-2">
                  {timeLeft.minutes}
                </div>
                <div className="font-montserrat text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Минут
                </div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-accent/10">
                <div className="font-cormorant text-4xl md:text-6xl text-accent font-semibold mb-2">
                  {timeLeft.seconds}
                </div>
                <div className="font-montserrat text-xs md:text-sm uppercase tracking-wide text-muted-foreground">
                  Секунд
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-none shadow-sm animate-slide-up hover:shadow-md transition-shadow duration-300">
            <Icon name="Clock" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Время</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Сбор в 15:00
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              Не опаздывайте!
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-sm animate-slide-up [animation-delay:150ms] hover:shadow-md transition-shadow duration-300">
            <Icon name="MapPin" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Место</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Улица Берег Камы
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              дом 20а
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-sm animate-slide-up [animation-delay:300ms] hover:shadow-md transition-shadow duration-300">
            <Icon name="Shirt" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Дресс-код</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Оттенки коричневого
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              Теплая цветовая гамма
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
            Программа дня
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg">
            12 августа 2026
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 rounded-full p-3 mt-1">
                <Icon name="Users" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cormorant text-2xl text-foreground">Сбор гостей</h3>
                  <span className="font-montserrat text-lg text-accent font-semibold">15:00</span>
                </div>
                <p className="font-montserrat text-muted-foreground">
                  Встреча гостей, приветственный коктейль
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 rounded-full p-3 mt-1">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cormorant text-2xl text-foreground">Церемония</h3>
                  <span className="font-montserrat text-lg text-accent font-semibold">16:00</span>
                </div>
                <p className="font-montserrat text-muted-foreground">
                  Торжественная выездная регистрация
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 rounded-full p-3 mt-1">
                <Icon name="Camera" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cormorant text-2xl text-foreground">Фотосессия</h3>
                  <span className="font-montserrat text-lg text-accent font-semibold">16:30</span>
                </div>
                <p className="font-montserrat text-muted-foreground">
                  Совместные фотографии с гостями
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 rounded-full p-3 mt-1">
                <Icon name="UtensilsCrossed" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cormorant text-2xl text-foreground">Банкет</h3>
                  <span className="font-montserrat text-lg text-accent font-semibold">17:30</span>
                </div>
                <p className="font-montserrat text-muted-foreground">
                  Праздничный ужин, тосты и поздравления
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 rounded-full p-3 mt-1">
                <Icon name="Music" size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-cormorant text-2xl text-foreground">Танцы и веселье</h3>
                  <span className="font-montserrat text-lg text-accent font-semibold">20:00</span>
                </div>
                <p className="font-montserrat text-muted-foreground">
                  Танцевальная программа до утра
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[1] = el)} className="py-20 px-4 opacity-0">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
            Как добраться
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg mb-8">
            Улица Берег Камы, 20а — живописное место на берегу реки
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f4e8c3b0f5c2d1a9b6e8f7c5d4a3b2c1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b&amp;source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
              className="w-full"
              title="Карта места проведения"
            ></iframe>
          </Card>
          <div className="text-center mt-6">
            <p className="font-montserrat text-muted-foreground mb-4">
              <Icon name="Car" size={20} className="inline mr-2" />
              Парковка доступна рядом
            </p>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[2] = el)} className="py-20 px-4 bg-secondary/30 opacity-0">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
              RSVP
            </h2>
            <p className="font-montserrat text-muted-foreground text-lg">
              Пожалуйста, подтвердите свое присутствие до 1 июля 2026
            </p>
          </div>

          <Card className="p-8 md:p-12 border-none shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-montserrat text-base">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 font-montserrat"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-montserrat text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 font-montserrat"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <Label htmlFor="guests" className="font-montserrat text-base">
                  Количество гостей
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="mt-2 font-montserrat"
                />
              </div>

              <div>
                <Label className="font-montserrat text-base mb-3 block">
                  Какой алкоголь предпочитаете?
                </Label>
                <RadioGroup
                  value={formData.alcohol}
                  onValueChange={(value) => setFormData({ ...formData, alcohol: value })}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="wine" id="wine" />
                    <Label htmlFor="wine" className="font-montserrat font-normal cursor-pointer">
                      Вино
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="vodka" id="vodka" />
                    <Label htmlFor="vodka" className="font-montserrat font-normal cursor-pointer">
                      Водка
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="champagne" id="champagne" />
                    <Label htmlFor="champagne" className="font-montserrat font-normal cursor-pointer">
                      Шампанское
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="moonshine" id="moonshine" />
                    <Label htmlFor="moonshine" className="font-montserrat font-normal cursor-pointer">
                      Самогон
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message" className="font-montserrat text-base">
                  Пожелания или комментарии
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 font-montserrat min-h-24"
                  placeholder="Напишите ваши пожелания..."
                />
              </div>

              <Button
                type="submit"
                className="w-full font-montserrat text-base py-6 bg-primary hover:bg-primary/90 transition-colors"
              >
                Подтвердить присутствие
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[3] = el)} className="py-20 px-4 opacity-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
              Подарки
            </h2>
            <p className="font-montserrat text-muted-foreground text-lg max-w-2xl mx-auto">
              Ваше присутствие — лучший подарок для нас. Вместо цветов будем рады полезным вещам для дома.
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <img
              src="https://cdn.poehali.dev/files/Изображение PNG.png"
              alt="Никита и Марта"
              className="w-full max-w-2xl rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 text-center border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <Icon name="Home" size={36} className="mx-auto mb-4 text-accent" />
              <h3 className="font-cormorant text-2xl mb-3 text-foreground">Для дома</h3>
              <p className="font-montserrat text-muted-foreground text-sm">
                Будем рады полезным предметам для обустройства нашего семейного гнездышка
              </p>
            </Card>

            <Card className="p-8 text-center border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <Icon name="Heart" size={36} className="mx-auto mb-4 text-accent" />
              <h3 className="font-cormorant text-2xl mb-3 text-foreground">Вместо цветов</h3>
              <p className="font-montserrat text-muted-foreground text-sm">
                Просим без букетов — лучше подарите что-то памятное и практичное
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section ref={(el) => (sectionRefs.current[4] = el)} className="py-20 px-4 bg-secondary/30 opacity-0">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mt-12 pt-12">
            <p className="font-cormorant text-3xl text-foreground mb-4">
              С любовью,
            </p>
            <p className="font-cormorant text-4xl text-foreground">
              Никита & Марта
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;