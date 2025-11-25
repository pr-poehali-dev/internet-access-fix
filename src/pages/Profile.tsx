import Layout from "@/components/Layout";
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600"></div>
          <div className="px-6 pb-6">
            <div className="flex items-end gap-6 -mt-16">
              <Avatar className="w-32 h-32 border-4 border-white">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-4xl">
                  ВЫ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">Ваше имя</h1>
                    <p className="text-gray-500">@username</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Редактировать профиль
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon size={18} />
                <a href="#" className="text-orange-500 hover:underline">
                  website.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>Регистрация: Январь 2024</span>
              </div>
            </div>

            <div className="mt-6 flex gap-8">
              <div>
                <span className="font-bold text-xl">245</span>
                <span className="text-gray-500 ml-2">Друзей</span>
              </div>
              <div>
                <span className="font-bold text-xl">1.2K</span>
                <span className="text-gray-500 ml-2">Постов</span>
              </div>
              <div>
                <span className="font-bold text-xl">3.5K</span>
                <span className="text-gray-500 ml-2">Фото</span>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="flex-1">
              Посты
            </TabsTrigger>
            <TabsTrigger value="about" className="flex-1">
              О себе
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex-1">
              Фотографии
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4 mt-4">
            <Card className="p-6">
              <p className="text-gray-500 text-center py-8">
                Здесь будут отображаться ваши посты
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="about" className="mt-4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Информация</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-gray-500">Образование:</span>
                  <span className="font-medium">МГУ им. Ломоносова</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-gray-500">Работа:</span>
                  <span className="font-medium">IT компания</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-gray-500">Город:</span>
                  <span className="font-medium">Москва</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-gray-500">Семейное положение:</span>
                  <span className="font-medium">Не указано</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="mt-4">
            <Card className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-gray-400">Фото {i}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
