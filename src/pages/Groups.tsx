import Layout from "@/components/Layout";
import { Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Groups = () => {
  const myGroups = [
    { id: 1, name: "IT сообщество", avatar: "IT", members: 12500, posts: 234 },
    { id: 2, name: "Фотография", avatar: "ФТ", members: 8200, posts: 567 },
    { id: 3, name: "Путешествия", avatar: "ПТ", members: 15300, posts: 891 },
  ];

  const suggestions = [
    { id: 1, name: "Книжный клуб", avatar: "КК", members: 5600, category: "Культура" },
    { id: 2, name: "Спортивная жизнь", avatar: "СЖ", members: 9800, category: "Спорт" },
    { id: 3, name: "Кулинария", avatar: "КЛ", members: 7200, category: "Еда" },
    { id: 4, name: "Музыка", avatar: "МЗ", members: 11400, category: "Развлечения" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Группы</h1>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Users size={20} className="mr-2" />
            Создать группу
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input placeholder="Поиск групп..." className="pl-10" />
          </div>
        </Card>

        <Tabs defaultValue="my" className="w-full">
          <TabsList>
            <TabsTrigger value="my">Мои группы ({myGroups.length})</TabsTrigger>
            <TabsTrigger value="discover">Рекомендации</TabsTrigger>
          </TabsList>

          <TabsContent value="my" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myGroups.map((group) => (
                <Card key={group.id} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 -mt-16 mb-4">
                      <Avatar className="w-20 h-20 border-4 border-white">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-lg">
                          {group.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{group.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{group.members.toLocaleString()} участников</span>
                      <span>{group.posts} постов</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Перейти в группу
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestions.map((group) => (
                <Card key={group.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-lg">
                        {group.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{group.category}</p>
                      <p className="text-sm text-gray-600 mb-4">
                        {group.members.toLocaleString()} участников
                      </p>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Вступить
                      </Button>
                    </div>
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

export default Groups;
