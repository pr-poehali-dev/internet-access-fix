import Layout from "@/components/Layout";
import { Upload, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Photos = () => {
  const albums = [
    { id: 1, name: "Путешествия 2024", count: 45, cover: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400" },
    { id: 2, name: "Лето 2023", count: 82, cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
    { id: 3, name: "Друзья", count: 156, cover: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400" },
  ];

  const recentPhotos = [
    { id: 1, url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400", likes: 24, comments: 5 },
    { id: 2, url: "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400", likes: 18, comments: 3 },
    { id: 3, url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400", likes: 31, comments: 7 },
    { id: 4, url: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=400", likes: 42, comments: 12 },
    { id: 5, url: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=400", likes: 15, comments: 2 },
    { id: 6, url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=400", likes: 27, comments: 8 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Фотографии</h1>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Upload size={20} className="mr-2" />
            Загрузить фото
          </Button>
        </div>

        <Tabs defaultValue="albums" className="w-full">
          <TabsList>
            <TabsTrigger value="albums">Альбомы</TabsTrigger>
            <TabsTrigger value="all">Все фото</TabsTrigger>
          </TabsList>

          <TabsContent value="albums" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {albums.map((album) => (
                <Card key={album.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{album.name}</h3>
                    <p className="text-sm text-gray-500">{album.count} фотографий</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <Button variant="outline" className="w-full">
                Создать новый альбом
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recentPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={photo.url}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center gap-1 text-white">
                        <Heart size={20} />
                        <span>{photo.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white">
                        <MessageCircle size={20} />
                        <span>{photo.comments}</span>
                      </div>
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

export default Photos;
