import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const donatePackages = [
    {
      id: 1,
      name: 'VIP',
      price: 299,
      color: 'bg-primary',
      icon: 'Gem',
      features: [
        'Префикс [VIP]',
        'Доступ к /fly',
        '5 приватов',
        'Кит VIP раз в день',
        '2 точки дома'
      ]
    },
    {
      id: 2,
      name: 'Premium',
      price: 599,
      color: 'bg-secondary',
      icon: 'Crown',
      features: [
        'Префикс [PREMIUM]',
        'Доступ к /fly и /god',
        '10 приватов',
        'Кит Premium раз в 12ч',
        '5 точек дома',
        'Скидка в донат-магазине 10%'
      ]
    },
    {
      id: 3,
      name: 'Legendary',
      price: 999,
      color: 'bg-accent',
      icon: 'Sparkles',
      features: [
        'Префикс [LEGENDARY]',
        'Все команды /fly, /god, /heal',
        'Неограниченные приваты',
        'Кит Legendary раз в 6ч',
        '10 точек дома',
        'Скидка в донат-магазине 25%',
        'Уникальный партикл-эффект'
      ]
    }
  ];

  const rules = [
    { id: 1, title: 'Запрет читов', description: 'Использование читов и модов, дающих преимущество - бан навсегда' },
    { id: 2, title: 'Уважение к игрокам', description: 'Оскорбления, мат и токсичность - мут/бан' },
    { id: 3, title: 'Запрет гриферства', description: 'Разрушение чужих построек без разрешения - бан' },
    { id: 4, title: 'Честная игра', description: 'Использование багов и дюпов - бан' },
    { id: 5, title: 'Реклама запрещена', description: 'Реклама других серверов - бан навсегда' }
  ];

  const purchaseHistory = [
    { id: 1, item: 'VIP', date: '15.10.2024', amount: 299 },
    { id: 2, item: 'Ресурс-пак Premium', date: '10.10.2024', amount: 99 },
    { id: 3, item: 'Кейс Легендарный', date: '05.10.2024', amount: 149 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border minecraft-shadow-lg sticky top-0 z-50 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded minecraft-shadow flex items-center justify-center">
                <Icon name="Blocks" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-black text-foreground">VoWorld</h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              {['home', 'donate', 'privileges', 'rules', 'support'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`font-semibold transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'donate' && 'Донат'}
                  {section === 'privileges' && 'Привилегии'}
                  {section === 'rules' && 'Правила'}
                  {section === 'support' && 'Поддержка'}
                </button>
              ))}
            </div>

            <Button 
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="minecraft-shadow"
            >
              <Icon name={isLoggedIn ? 'User' : 'LogIn'} size={18} className="mr-2" />
              {isLoggedIn ? 'Профиль' : 'Войти'}
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg minecraft-shadow-lg bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-8 md:p-12">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground">
                  Добро пожаловать на VoWorld
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Лучший Minecraft сервер с уникальными возможностями
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="minecraft-shadow-lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать играть
                  </Button>
                  <Button size="lg" variant="outline" className="minecraft-shadow">
                    <Icon name="Users" size={20} className="mr-2" />
                    Сообщество
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="minecraft-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-black">0</CardTitle>
                      <CardDescription>Игроков онлайн</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="minecraft-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-secondary/20 flex items-center justify-center">
                      <Icon name="Clock" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-black">24/7</CardTitle>
                      <CardDescription>Работа сервера</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="minecraft-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-accent/20 flex items-center justify-center">
                      <Icon name="Zap" className="text-accent" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-black">1.20.4</CardTitle>
                      <CardDescription>Версия Minecraft</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="minecraft-shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-black">🎮 Игровые режимы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded bg-primary/10 border border-primary/20">
                    <h3 className="font-bold text-lg mb-2">⚔️ Выживание</h3>
                    <p className="text-muted-foreground">Классическое выживание с приватами и экономикой</p>
                  </div>
                  <div className="p-4 rounded bg-secondary/10 border border-secondary/20">
                    <h3 className="font-bold text-lg mb-2">🏗️ Креатив</h3>
                    <p className="text-muted-foreground">Безграничные возможности для строительства</p>
                  </div>
                  <div className="p-4 rounded bg-accent/10 border border-accent/20">
                    <h3 className="font-bold text-lg mb-2">⚡ SkyBlock</h3>
                    <p className="text-muted-foreground">Развивай свой остров в небесах</p>
                  </div>
                  <div className="p-4 rounded bg-destructive/10 border border-destructive/20">
                    <h3 className="font-bold text-lg mb-2">🎯 Мини-игры</h3>
                    <p className="text-muted-foreground">BedWars, SkyWars, Murder Mystery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'donate' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-3">💎 Донат-магазин</h2>
              <p className="text-muted-foreground text-lg">Поддержи сервер и получи уникальные привилегии</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {donatePackages.map((pkg) => (
                <Card key={pkg.id} className="minecraft-shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                  <div className={`absolute top-0 left-0 right-0 h-2 ${pkg.color}`} />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon name={pkg.icon as any} className={`${pkg.color.replace('bg-', 'text-')} animate-float`} size={40} />
                      <Badge variant="secondary" className="text-lg font-black px-3 py-1">
                        {pkg.price}₽
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-black">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full minecraft-shadow">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="minecraft-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">💳 Способы оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-base px-4 py-2">Банковская карта</Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">Qiwi</Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">ЮMoney</Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">СБП</Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">Криптовалюта</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'privileges' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-3">👑 Привилегии</h2>
              <p className="text-muted-foreground text-lg">Сравнение всех донат-статусов</p>
            </div>

            <Card className="minecraft-shadow-lg overflow-x-auto">
              <CardContent className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-black">Возможность</th>
                      <th className="text-center p-3 font-black text-primary">VIP</th>
                      <th className="text-center p-3 font-black text-secondary">Premium</th>
                      <th className="text-center p-3 font-black text-accent">Legendary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Полет (/fly)</td>
                      <td className="text-center p-3"><Icon name="Check" className="text-primary inline" size={20} /></td>
                      <td className="text-center p-3"><Icon name="Check" className="text-secondary inline" size={20} /></td>
                      <td className="text-center p-3"><Icon name="Check" className="text-accent inline" size={20} /></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Бессмертие (/god)</td>
                      <td className="text-center p-3"><Icon name="X" className="text-muted-foreground inline" size={20} /></td>
                      <td className="text-center p-3"><Icon name="Check" className="text-secondary inline" size={20} /></td>
                      <td className="text-center p-3"><Icon name="Check" className="text-accent inline" size={20} /></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Количество приватов</td>
                      <td className="text-center p-3">5</td>
                      <td className="text-center p-3">10</td>
                      <td className="text-center p-3">∞</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Точки дома</td>
                      <td className="text-center p-3">2</td>
                      <td className="text-center p-3">5</td>
                      <td className="text-center p-3">10</td>
                    </tr>
                    <tr>
                      <td className="p-3">Скидка в магазине</td>
                      <td className="text-center p-3">-</td>
                      <td className="text-center p-3">10%</td>
                      <td className="text-center p-3">25%</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-3">📜 Правила сервера</h2>
              <p className="text-muted-foreground text-lg">Соблюдай правила и играй честно</p>
            </div>

            <div className="space-y-4">
              {rules.map((rule) => (
                <Card key={rule.id} className="minecraft-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge className="text-lg">{rule.id}</Badge>
                      {rule.title}
                    </CardTitle>
                    <CardDescription className="text-base">{rule.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="minecraft-shadow-lg border-destructive/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Icon name="AlertTriangle" size={24} />
                  Важно!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Незнание правил не освобождает от ответственности. 
                  При нарушении правил администрация имеет право выдать наказание без предупреждения.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'support' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-black mb-3">💬 Поддержка</h2>
              <p className="text-muted-foreground text-lg">Нужна помощь? Мы всегда на связи!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="minecraft-shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" className="text-primary" size={24} />
                    Discord
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Присоединяйся к нашему Discord-серверу</p>
                  <Button className="w-full minecraft-shadow">
                    <Icon name="ExternalLink" size={18} className="mr-2" />
                    Перейти в Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="minecraft-shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Send" className="text-accent" size={24} />
                    Telegram
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Чат поддержки в Telegram</p>
                  <Button className="w-full minecraft-shadow" variant="secondary">
                    <Icon name="ExternalLink" size={18} className="mr-2" />
                    Открыть Telegram
                  </Button>
                </CardContent>
              </Card>

              <Card className="minecraft-shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-secondary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">support@voworld.ru</p>
                  <Button className="w-full minecraft-shadow" variant="outline">
                    <Icon name="Copy" size={18} className="mr-2" />
                    Копировать
                  </Button>
                </CardContent>
              </Card>

              <Card className="minecraft-shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                    FAQ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Часто задаваемые вопросы</p>
                  <Button className="w-full minecraft-shadow" variant="outline">
                    <Icon name="HelpCircle" size={18} className="mr-2" />
                    Открыть FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {isLoggedIn && activeSection === 'home' && (
          <Card className="minecraft-shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=player" />
                  <AvatarFallback>PL</AvatarFallback>
                </Avatar>
                Личный кабинет
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Профиль</TabsTrigger>
                  <TabsTrigger value="history">История</TabsTrigger>
                  <TabsTrigger value="referral">Рефералы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Игровой ник</p>
                      <p className="font-bold text-lg">Steve_Pro</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Статус</p>
                      <Badge className="text-base">Premium</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Дата регистрации</p>
                      <p className="font-bold">01.01.2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Время в игре</p>
                      <p className="font-bold">247 часов</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">До следующего уровня</p>
                    <Progress value={65} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-1">65% (Level 15)</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="space-y-4">
                  <div className="space-y-3">
                    {purchaseHistory.map((purchase) => (
                      <div key={purchase.id} className="flex items-center justify-between p-3 rounded bg-muted/50">
                        <div>
                          <p className="font-semibold">{purchase.item}</p>
                          <p className="text-sm text-muted-foreground">{purchase.date}</p>
                        </div>
                        <Badge variant="secondary" className="text-base">
                          {purchase.amount}₽
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground text-center">Всего потрачено: 547₽</p>
                </TabsContent>
                
                <TabsContent value="referral" className="space-y-4">
                  <div className="p-4 rounded bg-primary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">Ваш реферальный код</p>
                    <div className="flex gap-2">
                      <code className="flex-1 p-2 bg-background rounded font-mono text-lg">STEVE2024</code>
                      <Button size="icon" variant="outline">
                        <Icon name="Copy" size={18} />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-black">12</CardTitle>
                        <CardDescription>Приглашенных друзей</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-black text-primary">360₽</CardTitle>
                        <CardDescription>Заработано</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    💰 Приглашай друзей и получай 10% от их покупок навсегда!
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </main>

      <footer className="border-t border-border mt-16 minecraft-shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-black text-lg mb-3">VoWorld</h3>
              <p className="text-sm text-muted-foreground">Лучший Minecraft сервер с уникальными возможностями</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Навигация</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Главная</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Донат</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Правила</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Discord</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">Telegram</p>
                <p className="text-muted-foreground hover:text-foreground cursor-pointer">FAQ</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">IP сервера</h4>
              <code className="block p-2 bg-muted rounded text-sm mb-2">play.voworld.ru</code>
              <p className="text-xs text-muted-foreground">Версия 1.20.4</p>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 VoWorld. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}