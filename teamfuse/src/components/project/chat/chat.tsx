/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

let socket: any;

interface ChatProps {
  projectId: string;
  members: any[];
  initialMessages: any[];
  currentUserId: string;
}

export default function Chat({
  projectId,
  members,
  initialMessages,
  currentUserId,
}: ChatProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const [recipientId, setRecipientId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  let typingTimeout: any = null;
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
        withCredentials: true,
        path: "/api/socket/io",
      });
    }

    socket.emit("join_chat", { projectId });

    socket.on("chat:new", (msg: any) => {
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, msg];
      });
    });

    socket.on("chat:typing", ({ userId }: { userId: string }) => {
      if (userId !== currentUserId) setIsTyping(true);
    });

    socket.on("chat:stop_typing", ({ userId }: { userId: string }) => {
      if (userId !== currentUserId) setIsTyping(false);
    });

    return () => {
      socket.off("chat:new");
      socket.off("chat:typing");
      socket.off("chat:stop_typing");
    };
  }, [projectId, currentUserId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function loadMessages(target: string | null) {
    const url = target
      ? `/api/projects/${projectId}/chat/messages?recipient=${target}`
      : `/api/projects/${projectId}/chat/messages`;

    const res = await fetch(url);
    const data = await res.json();
    if (data.success) setMessages(data.data);
  }
  async function sendMessage() {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch(`/api/projects/${projectId}/chat/send`, {
      method: "POST",
      body: JSON.stringify({
        message,
        recipientId,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMessages((prev) => [...prev, data.data]);

      socket.emit("chat:send", {
        projectId,
        message: data.data,
      });

      setMessage("");
    }
  }

  function handleTyping(e: any) {
    setMessage(e.target.value);

    if (!socket) return;

    socket.emit("chat:typing", {
      userId: currentUserId,
      projectId,
    });

    if (typingTimeout) clearTimeout(typingTimeout);

    typingTimeout = setTimeout(() => {
      socket.emit("chat:stop_typing", {
        userId: currentUserId,
        projectId,
      });
    }, 700);
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const selectedMember = members.find((m) => m.user.id === recipientId);

  return (
    <div className="flex h-[90vh] bg-[#0b0e13] rounded-2xl shadow-2xl overflow-hidden border border-gray-800/50">
      {/* LEFT SIDEBAR */}
      <div className="w-80 bg-[#0f1218] border-r border-gray-800/50 flex flex-col">
        {/* SIDEBAR HEADER */}
        <div className="p-6 border-b border-gray-800/50">
          <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text mb-4">
            Conversations
          </h2>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full bg-[#13161c] border border-gray-700/50 rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700/20 focus:border-purple-600/50"
            />
            <svg
              className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* MEMBERS LIST */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
          {/* EVERYONE BUTTON */}
          <button
            onClick={() => {
              setRecipientId(null);
              loadMessages(null);
            }}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
              recipientId === null
                ? "bg-gradient-to-r from-purple-700/30 to-indigo-700/30 border border-purple-600/40 shadow-md"
                : "bg-[#13161c] hover:bg-[#181c24] border border-transparent hover:border-gray-700/50"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                recipientId === null
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600"
                  : "bg-[#2a2f3b]"
              }`}
            >
              💬
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-sm text-white">Everyone</h3>
              <p className="text-xs text-gray-400">
                Group chat • {members.length} members
              </p>
            </div>
          </button>

          {/* INDIVIDUAL MEMBERS */}
          {members
            .filter((m) => m.user.id !== currentUserId)
            .map((m) => (
              <button
                key={m.user.id}
                onClick={() => {
                  setRecipientId(m.user.id);
                  loadMessages(m.user.id);
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                  recipientId === m.user.id
                    ? "bg-gradient-to-r from-purple-700/30 to-indigo-700/30 border border-purple-600/40 shadow-md"
                    : "bg-[#13161c] hover:bg-[#181c24] border border-transparent hover:border-gray-700/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    recipientId === m.user.id
                      ? "bg-gradient-to-br from-purple-600 to-indigo-600"
                      : "bg-[#2a2f3b]"
                  }`}
                >
                  {m.user.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-sm text-white">
                    {m.user.name}
                  </h3>
                  <p className="text-xs text-gray-400">Direct message</p>
                </div>
              </button>
            ))}
        </div>
      </div>

      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* CHAT HEADER */}
        <div className="bg-[#141820] border-b border-gray-800/50 px-8 py-5 flex items-center gap-4">
          {recipientId ? (
            <>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-md">
                {selectedMember?.user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  {selectedMember?.user.name}
                </h1>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active now
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl shadow-md">
                💬
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Team Chat</h1>
                <p className="text-sm text-gray-400">
                  {members.length} members online
                </p>
              </div>
            </>
          )}
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
          {messages.map((msg) => {
            const isCurrentUser = msg.sender?.id === currentUserId;

            return (
              <div
                key={msg.id}
                className={`flex ${
                  isCurrentUser ? "justify-end" : "justify-start"
                } gap-3`}
              >
                {!isCurrentUser && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-sm shadow-md">
                    {msg.sender?.name.charAt(0).toUpperCase()}
                  </div>
                )}

                <div
                  className={`max-w-md flex flex-col gap-1 ${
                    isCurrentUser ? "items-end" : "items-start"
                  }`}
                >
                  <div className="text-xs text-gray-400">
                    {msg.sender?.name}
                    {msg.recipient && (
                      <span className="text-gray-500">
                        {" "}
                        → {msg.recipient.name}
                      </span>
                    )}
                  </div>

                  <div
                    className={`px-5 py-3.5 rounded-2xl shadow-md ${
                      isCurrentUser
                        ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white"
                        : "bg-[#1a1f2e] border border-gray-700/50 text-gray-200"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>

                {isCurrentUser && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-sm shadow-md">
                    {msg.sender?.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 items-end">
              <div className="w-10 h-10 rounded-xl bg-[#2a2f3b] flex items-center justify-center font-bold text-sm shadow-md">
                …
              </div>
              <div className="px-5 py-3 rounded-2xl bg-[#1a1f2e] border border-gray-700/50 flex gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* INPUT AREA */}
        <div className="p-6 bg-[#0f1218] border-t border-gray-800/50">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                className="w-full bg-[#1a1f2e] border border-gray-700/50 rounded-2xl px-5 py-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-700/20 shadow-md resize-none"
                placeholder={
                  recipientId
                    ? "Send a private message..."
                    : "Message the team..."
                }
                value={message}
                onChange={handleTyping}
                onKeyPress={handleKeyPress}
                rows={1}
              />
            </div>

            <button
              onClick={sendMessage}
              disabled={loading || !message.trim()}
              className="px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-md disabled:opacity-50 hover:scale-105 transition"
            >
              {loading ? (
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
