import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">МеталлАрт</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/1ca9f815-0422-48fe-b9ee-205d09a290c9/files/31e654fd-94cb-4c95-8642-10a9de9715aa.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <img 
          src="https://cdn.poehali.dev/projects/1ca9f815-0422-48fe-b9ee-205d09a290c9/files/13236bd4-3a09-48e4-be83-9981929f4faa.jpg"
          alt="Floating mug"
          className="absolute w-32 md:w-48 animate-float opacity-80"
          style={{
            animation: 'float 6s ease-in-out infinite',
            top: '20%',
            right: '10%'
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
              Кастомные металлические кружки ручной работы
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              Создаём уникальные кружки по вашим эскизам. Каждая работа — произведение искусства, выполненное мастером с душой.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
              Заказать кружку
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Процесс создания кружек</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Lightbulb', title: 'Идея', desc: 'Вы присылаете эскиз или описание' },
              { icon: 'Pencil', title: 'Проектирование', desc: 'Разрабатываем дизайн и форму' },
              { icon: 'Flame', title: 'Отливка', desc: 'Выливаем металл в форму' },
              { icon: 'Sparkles', title: 'Финишная обработка', desc: 'Полируем и доводим до идеала' },
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={step.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/1ca9f815-0422-48fe-b9ee-205d09a290c9/files/822fa64e-1700-41b8-9038-fd9dacc997d6.jpg"
              alt="Процесс отливки металла"
              className="rounded-lg shadow-xl mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Портфолио работ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/1ca9f815-0422-48fe-b9ee-205d09a290c9/files/28ffc9a0-950c-49f6-8735-7cb257ff2fbc.jpg"
                      alt={`Работа ${item}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Кастомная коллекция #{item}</h3>
                    <p className="text-muted-foreground">Уникальный дизайн, медь и бронза</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Преимущества ручной работы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Users', title: 'Индивидуальный подход', desc: 'Каждый проект уникален, учитываем все ваши пожелания' },
              { icon: 'Heart', title: 'Сделано с душой', desc: 'Вкладываем любовь в каждую деталь' },
              { icon: 'Shield', title: 'Долговечность', desc: 'Качественный металл и проверенные технологии' },
              { icon: 'Zap', title: 'Быстрая обратная связь', desc: 'Слушаем правки и корректируем в процессе' },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', text: 'Заказала набор кружек для кафе. Качество превзошло все ожидания! Клиенты в восторге.' },
              { name: 'Дмитрий Иванов', text: 'Сделали подарок на юбилей компании. Эксклюзивно, стильно, запоминается.' },
              { name: 'Елена Смирнова', text: 'Индивидуальный подход на высшем уровне. Учли все мои правки, результат потрясающий!' },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-primary">Контакты и форма заказа</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Напишите нам, и мы создадим кружку вашей мечты
          </p>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Опишите ваш заказ</label>
                  <Textarea 
                    placeholder="Расскажите о желаемой форме, размере, дизайне..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6">
            <a 
              href="https://t.me/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Icon name="Send" size={20} />
              <span>Telegram</span>
            </a>
            <a 
              href="https://wa.me/79991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">МеталлАрт</h3>
          <p className="opacity-90">Кастомные металлические кружки ручной работы</p>
          <p className="mt-4 opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}