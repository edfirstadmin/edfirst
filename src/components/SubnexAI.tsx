import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string; streaming?: boolean };

const SubnexAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      const el = chatRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    });
  };

  useEffect(scrollToBottom, [messages.length]);

  async function handleSend() {
    const message = input.trim();
    if (!message || sending) return;

    setInput("");
    setSending(true);

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setMessages((prev) => [...prev, { role: "assistant", content: "", streaming: true }]);

    try {
      const res = await fetch("https://h39mqkcwve.execute-api.ap-south-1.amazonaws.com/dev/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, system_prompt: "", stream: true }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let full = "";

      if (reader) {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;

            try {
              const data = JSON.parse(line.substring(6));
              if (data.text) {
                full += data.text;
                setMessages((prev) => {
                  const copy = [...prev];
                  const idx = copy.findIndex((m) => m.role === "assistant" && m.streaming);
                  if (idx !== -1) copy[idx] = { ...copy[idx], content: full };
                  return copy;
                });
              }

              if (data.done) {
                setMessages((prev) => {
                  const copy = [...prev];
                  const idx = copy.findIndex((m) => m.role === "assistant" && m.streaming);
                  if (idx !== -1) copy[idx] = { ...copy[idx], streaming: false };
                  return copy;
                });
              }
            } catch {}
          }
        }
      } else {
        const json = await res.json().catch(() => ({}));
        const text = json?.text || "No response";

        setMessages((prev) => {
          const copy = [...prev];
          const idx = copy.findIndex((m) => m.role === "assistant" && m.streaming);
          if (idx !== -1) copy[idx] = { role: "assistant", content: text };
          return copy;
        });
      }
    } catch (e: any) {
      setMessages((prev) => {
        const copy = [...prev];
        const idx = copy.findIndex((m) => m.role === "assistant" && m.streaming);
        if (idx !== -1)
          copy[idx] = { role: "assistant", content: `Error: ${e?.message || "Failed to fetch"}` };
        return copy;
      });
    } finally {
      setSending(false);
    }
  }

  // Basic formatter: paragraphs and bullet lists with bold (**text**)
  function renderInline(text: string) {
    const parts = text.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={`b-${i}`}>{part}</strong> : part
    );
  }

  function renderFormatted(text: string) {
    const lines = text.split(/\r?\n/);
    const blocks: Array<{ type: "list"; items: string[] } | { type: "paragraph"; text: string }> = [];
    let list: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (/^(\*|-)\s+/.test(trimmed)) {
        list.push(trimmed.replace(/^(\*|-)\s+/, ""));
      } else {
        if (list.length) {
          blocks.push({ type: "list", items: list });
          list = [];
        }
        if (trimmed) {
          blocks.push({ type: "paragraph", text: trimmed });
        }
      }
    }
    if (list.length) blocks.push({ type: "list", items: list });

    return (
      <div className="space-y-2">
        {blocks.map((b, idx) =>
          b.type === "list" ? (
            <ul key={idx} className="list-disc pl-5 space-y-1">
              {b.items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ul>
          ) : (
            <p key={idx} className="whitespace-pre-wrap">{renderInline(b.text)}</p>
          )
        )}
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
        <div className="mx-auto w-[700px] max-w-full">

          {/* MAIN CHAT WRAPPER: overflow-hidden ensures inner content is clipped to rounded corners */}
          <div className="bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden relative pt-8 pb-2">

            {/* TOP-RIGHT BRANDING */}
            <span className="absolute right-4 top-3 z-30 text-[10px] sm:text-xs text-gray-500 pointer-events-none">
              Powered by SubNexAI
            </span>

            {/* MESSAGE AREA */}
            <div
              ref={chatRef}
              className="max-h-[180px] overflow-auto p-3 space-y-3"
            >
              {messages.length === 0 ? (
                <div className="text-center py-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Explore more about EdfIRST - Ask SubNexAI !
                  </h2>
                </div>
              ) : (
                messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gray-900 text-white"
                        : "bg-white border border-gray-200 text-gray-900 shadow-sm"
                    }`}
                  >
                    {m.role === "assistant" ? renderFormatted(m.content) : m.content}
                    {m.streaming && (
                      <span className="ml-1 inline-block animate-pulse">▋</span>
                    )}
                  </div>
                  </div>
                ))
              )}
            </div>

            {/* INPUT ROW */}
            <div className="flex items-center bg-white border-t border-gray-200">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Ask anything about EdfIRST"
                className="flex-1 pl-5 pr-3 py-1 bg-transparent outline-none placeholder:text-gray-400 text-gray-900"
                disabled={sending}
              />

              <div className="ml-auto flex flex-col items-center gap-1 pr-2">
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    aria-label="Send"
                    onClick={handleSend}
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-50 leading-none"
                    disabled={sending}
                  >
                    <ArrowUp className="w-5 h-5 text-gray-700 block shrink-0" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SubnexAI;