import Layout from "@/components/Layout";
import { UserPlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Friends = () => {
  const friends = [
    { id: 1, name: "Анна Иванова", avatar: "АИ", status: "В сети" },
    { id: 2, name: "Дмитрий Петров", avatar: "ДП", status: "5 мин назад" },
    { id: 3, name: "Мария Сидорова", avatar: "МС", status: "В сети" },
    { id: 4, name: "Иван Смирнов", avatar: "ИС", status: "30 мин назад" },
    { id: 5, name: "Елена Козлова", avatar: "ЕК", status: "В сети" },
    { id: 6, name: "Алексей Морозов", avatar: "АМ", status: "2 часа назад" },
  ];

  const suggestions = [
    { id: 1, name: "Ольга Новикова", avatar: "ОН", mutualFriends: 12 },
    { id: 2, name: "Сергей Волков", avatar: "СВ", mutualFriends: 8 },
    { id: 3, name: "Татьяна Федорова", avatar: "ТФ", mutualFriends: 15 },
    { id: 4, name: "Николай Попов", avatar: "НП", mutualFriends: 5 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Друзья</h1>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <UserPlus size={20} className="mr-2" />
            Найти друзей
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input placeholder="Поиск друзей..." className="pl-10" />
          </div>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">Все друзья ({friends.length})</TabsTrigger>
            <TabsTrigger value="online">В сети (3)</TabsTrigger>
            <TabsTrigger value="suggestions">Предложения ({suggestions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {friends.map((friend) => (
                <Card key={friend.id} className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl">
                        {friend.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{friend.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{friend.status}</p>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">
                        Сообщение
                      </Button>
                      <Button variant="ghost" className="flex-1">
                        Профиль
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {friends
                .filter((f) => f.status === "В сети")
                .map((friend) => (
                  <Card key={friend.id} className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <Avatar className="w-20 h-20 mb-4">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white text-xl">
                            {friend.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-4 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <h3 className="font-semibold mb-1">{friend.name}</h3>
                      <p className="text-sm text-green-500 mb-4">В сети</p>
                      <div className="flex gap-2 w-full">
                        <Button variant="outline" className="flex-1">
                          Сообщение
                        </Button>
                        <Button variant="ghost" className="flex-1">
                          Профиль
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="suggestions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((person) => (
                <Card key={person.id} className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-xl">
                        {person.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{person.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {person.mutualFriends} общих друзей
                    </p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Добавить в друзья
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Friends;
