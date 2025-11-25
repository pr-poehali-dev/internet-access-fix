import Layout from "@/components/Layout";
import { Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    {
      id: 1,
      name: "Анна Иванова",
      avatar: "АИ",
      lastMessage: "Привет! Как дела?",
      time: "10:30",
      unread: 2,
    },
    {
      id: 2,
      name: "Дмитрий Петров",
      avatar: "ДП",
      lastMessage: "Спасибо за помощь!",
      time: "Вчера",
      unread: 0,
    },
    {
      id: 3,
      name: "Мария Сидорова",
      avatar: "МС",
      lastMessage: "До встречи завтра",
      time: "2 дня",
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Привет! Как твои дела?",
      sender: "other",
      time: "10:25",
    },
    {
      id: 2,
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      sender: "me",
      time: "10:27",
    },
    {
      id: 3,
      text: "Тоже всё хорошо! Хотел узнать, ты сможешь завтра встретиться?",
      sender: "other",
      time: "10:28",
    },
    {
      id: 4,
      text: "Да, конечно! Во сколько удобно?",
      sender: "me",
      time: "10:30",
    },
  ];

  return (
    <Layout>
      <Card className="h-[calc(100vh-140px)] flex overflow-hidden">
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold mb-4">Сообщения</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input placeholder="Поиск..." className="pl-10" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedChat === chat.id ? "bg-orange-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                      {chat.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{chat.name}</p>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex items-center gap-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                АИ
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Анна Иванова</h3>
              <p className="text-sm text-gray-500">в сети</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    message.sender === "me"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "me" ? "text-orange-100" : "text-gray-500"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Введите сообщение..." className="flex-1" />
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Send size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default Messages;
