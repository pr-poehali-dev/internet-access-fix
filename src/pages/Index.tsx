import Layout from "@/components/Layout";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const posts = [
    {
      id: 1,
      author: "Анна Иванова",
      avatar: "AI",
      time: "2 часа назад",
      content: "Какой прекрасный день! Провела время в парке с друзьями 🌸",
      image: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=800",
      likes: 24,
      comments: 5,
    },
    {
      id: 2,
      author: "Дмитрий Петров",
      avatar: "ДП",
      time: "5 часов назад",
      content: "Закончил новый проект! Очень доволен результатом 💻",
      likes: 42,
      comments: 8,
    },
    {
      id: 3,
      author: "Мария Сидорова",
      avatar: "МС",
      time: "Вчера",
      content: "Кто-нибудь знает хорошее кафе в центре города? Буду благодарна за рекомендации! ☕",
      likes: 15,
      comments: 12,
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-6">
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl">
                  ВЫ
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1">Ваше имя</h3>
              <p className="text-sm text-gray-500 mb-4">@username</p>
              <div className="flex justify-around text-center border-t pt-4">
                <div>
                  <div className="font-semibold text-lg">245</div>
                  <div className="text-xs text-gray-500">Друзей</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">1.2K</div>
                  <div className="text-xs text-gray-500">Постов</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <Card className="p-6">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                  ВЫ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Что у вас нового?"
                  className="min-h-[100px] resize-none"
                />
                <div className="flex justify-end mt-3">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Опубликовать
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{post.author}</h4>
                      <p className="text-sm text-gray-500">{post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={20} />
                  </Button>
                </div>

                <p className="mb-4">{post.content}</p>

                {post.image && (
                  <img
                    src={post.image}
                    alt=""
                    className="rounded-lg w-full object-cover mb-4"
                  />
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Heart size={20} />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Share2 size={20} />
                    <span>Поделиться</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-3">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Предложения дружбы</h3>
            <div className="space-y-4">
              {["Екатерина", "Александр", "Ольга"].map((name, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                      {name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{name}</p>
                    <p className="text-xs text-gray-500">5 общих друзей</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Добавить
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
