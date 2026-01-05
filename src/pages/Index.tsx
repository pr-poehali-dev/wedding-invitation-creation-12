import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', guests: '1', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="font-cormorant text-7xl md:text-8xl lg:text-9xl font-light text-foreground mb-6 tracking-wide">
            Анна & Дмитрий
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8"></div>
          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground mb-4">
            Приглашаем вас разделить с нами этот особенный день
          </p>
          <p className="font-cormorant text-3xl md:text-4xl text-foreground mt-8">
            15 августа 2026
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-none shadow-sm animate-slide-up hover:shadow-md transition-shadow duration-300">
            <Icon name="Clock" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Время</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Церемония начнется в 15:00
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              Прием гостей с 14:30
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-sm animate-slide-up [animation-delay:150ms] hover:shadow-md transition-shadow duration-300">
            <Icon name="MapPin" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Место</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Ресторан "Панорама"
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              ул. Набережная, 25
            </p>
          </Card>

          <Card className="p-8 text-center border-none shadow-sm animate-slide-up [animation-delay:300ms] hover:shadow-md transition-shadow duration-300">
            <Icon name="Shirt" size={40} className="mx-auto mb-4 text-accent" />
            <h3 className="font-cormorant text-3xl mb-3 text-foreground">Дресс-код</h3>
            <p className="font-montserrat text-muted-foreground text-lg">
              Элегантный вечерний
            </p>
            <p className="font-montserrat text-sm text-muted-foreground mt-2">
              Цветовая гамма: пастельные оттенки
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
            Как добраться
          </h2>
          <p className="font-montserrat text-muted-foreground text-lg mb-8">
            Ресторан "Панорама" находится в центре города с прекрасным видом на набережную
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
              Бесплатная парковка для гостей
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
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

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-6">
              Подарки
            </h2>
            <p className="font-montserrat text-muted-foreground text-lg max-w-2xl mx-auto">
              Ваше присутствие — лучший подарок для нас. Если вы хотите подарить что-то особенное, 
              мы будем рады вашему вкладу в наше совместное будущее.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-8 text-center border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <Icon name="Plane" size={36} className="mx-auto mb-4 text-accent" />
              <h3 className="font-cormorant text-2xl mb-3 text-foreground">Свадебное путешествие</h3>
              <p className="font-montserrat text-muted-foreground text-sm">
                Мы мечтаем о незабываемом медовом месяце
              </p>
            </Card>

            <Card className="p-8 text-center border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <Icon name="Home" size={36} className="mx-auto mb-4 text-accent" />
              <h3 className="font-cormorant text-2xl mb-3 text-foreground">Семейный очаг</h3>
              <p className="font-montserrat text-muted-foreground text-sm">
                Обустройство нашего нового дома
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant text-5xl md:text-6xl text-foreground mb-8">
            Контакты
          </h2>
          
          <div className="space-y-4 font-montserrat">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Phone" size={20} className="text-accent" />
              <a href="tel:+79001234567" className="hover:text-foreground transition-colors">
                +7 (900) 123-45-67
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Icon name="Mail" size={20} className="text-accent" />
              <a href="mailto:wedding@example.com" className="hover:text-foreground transition-colors">
                wedding@example.com
              </a>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border/50">
            <p className="font-cormorant text-3xl text-foreground mb-4">
              С любовью,
            </p>
            <p className="font-cormorant text-4xl text-foreground">
              Анна & Дмитрий
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
