"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type OrderStage = "GATHERING" | "PROCESSING" | "COMPLETED";
type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  uiOnly?: boolean;
  pending?: boolean;
};

const HERO_SIZE = 172;

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Welcome to CAFEMO. Tell me what you’d like today and I’ll help finalize your order.",
  },
];

function createId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

export default function KioskPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [orderStage, setOrderStage] = useState<OrderStage>("GATHERING");
  const [processingStep, setProcessingStep] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (orderStage !== "PROCESSING") {
      return;
    }

    setProcessingStep("Checking inventory…");

    const inventoryTimer = window.setTimeout(() => {
      setProcessingStep("Pushing order to kitchen queue…");

      const kitchenTimer = window.setTimeout(() => {
        setProcessingStep("");
        setOrderStage("COMPLETED");
        setMessages((previous) => [
          ...previous,
          {
            id: createId("assistant"),
            role: "assistant",
            content:
              "Your order is confirmed and in progress. Thanks for ordering with CAFEMO!",
            uiOnly: true,
          },
        ]);
      }, 1700);

      return () => {
        window.clearTimeout(kitchenTimer);
      };
    }, 1500);

    return () => {
      window.clearTimeout(inventoryTimer);
    };
  }, [orderStage]);

  const canSend = useMemo(
    () => input.trim().length > 0 && orderStage === "GATHERING" && !isThinking,
    [input, orderStage, isThinking],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userContent = input.trim();
    if (!userContent || !canSend) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createId("user"),
      role: "user",
      content: userContent,
    };

    const placeholderId = createId("assistant-pending");
    const placeholderMessage: ChatMessage = {
      id: placeholderId,
      role: "assistant",
      content: "...",
      uiOnly: true,
      pending: true,
    };

    const nextMessages = [...messages, userMessage, placeholderMessage];
    setInput("");
    setIsThinking(true);
    setMessages(nextMessages);

    const historyForApi = nextMessages
      .filter(
        (message) =>
          !message.uiOnly &&
          (message.role === "user" || message.role === "assistant"),
      )
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: historyForApi }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch assistant response.");
      }

      const data = (await response.json()) as {
        reply?: string;
        isFinalized?: boolean;
      };

      const assistantReply =
        data.reply?.trim() ||
        "I’m sorry, I couldn’t process that. Please tell me your order one more time.";

      setMessages((previous) =>
        previous.map((message) =>
          message.id === placeholderId
            ? {
                id: createId("assistant"),
                role: "assistant",
                content: assistantReply,
              }
            : message,
        ),
      );

      if (data.isFinalized) {
        setOrderStage("PROCESSING");
      }
    } catch {
      setMessages((previous) =>
        previous.map((message) =>
          message.id === placeholderId
            ? {
                id: createId("assistant"),
                role: "assistant",
                content:
                  "I’m having trouble reaching the kitchen system right now, but I’m still here to help. Could you repeat your order in one message?",
              }
            : message,
        ),
      );
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <main className="page-shell min-h-screen px-4 py-8 md:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row">
        <aside className="glass-card flex flex-col items-center justify-center rounded-3xl p-6 text-center lg:w-[340px]">
          <div
            className="relative"
            style={{ width: HERO_SIZE, height: HERO_SIZE }}
          >
            <Image
              src={isThinking ? "/hero.gif" : "/hero.svg"}
              alt="CAFEMO assistant"
              fill
              className="object-contain"
              unoptimized={isThinking}
              priority
            />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-[var(--color-charcoal)]">
            CAFEMO Kiosk
          </h1>
          <p className="mt-2 text-sm text-[var(--color-charcoal)]/80">
            Stage: <span className="font-semibold">{orderStage}</span>
          </p>
          {orderStage === "PROCESSING" && (
            <p className="mt-3 text-sm font-medium text-[var(--color-violet)]">
              {processingStep}
            </p>
          )}
          {orderStage === "COMPLETED" && (
            <p className="mt-3 text-sm font-medium text-[var(--color-violet)]">
              Order completed. Input is now locked.
            </p>
          )}
        </aside>

        <div className="glass-card flex min-h-[70vh] flex-1 flex-col rounded-3xl p-4 md:p-6">
          <div
            ref={scrollContainerRef}
            className="flex-1 space-y-3 overflow-y-auto rounded-2xl p-4"
            style={{ backgroundColor: "#9bb29e" }}
          >
            {messages.map((message) => {
              const fromUser = message.role === "user";
              return (
                <div
                  key={message.id}
                  className={`flex ${fromUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed text-[var(--color-charcoal)] md:max-w-[70%] ${
                      fromUser ? "rounded-br-sm" : "rounded-bl-sm"
                    }`}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 flex gap-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={
                orderStage === "COMPLETED"
                  ? "Order completed"
                  : orderStage === "PROCESSING"
                    ? "Processing order..."
                    : "Type your order here"
              }
              disabled={orderStage !== "GATHERING" || isThinking}
              className="flex-1 rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] outline-none transition focus:border-[var(--color-violet)]"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-55"
              style={{ backgroundColor: "#5b5fd0" }}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
