module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/Kiosk.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-rsc] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-rsc] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/frown.js [app-rsc] (ecmascript) <export default as Frown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-rsc] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-rsc] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-rsc] (ecmascript) <export default as Play>");
;
;
;
const mockContext = {
    weather: 'hot / sunny',
    userMood: 'tired',
    pastOrders: [
        'Iced Caramel Macchiato',
        'Blueberry Muffin'
    ]
};
const TypewriterMessage = ({ text, onComplete, onUpdate, fastForward })=>{
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    const isFinished = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isFinished.current) return;
        if (fastForward) {
            setDisplayed(text);
            isFinished.current = true;
            if (onComplete) onComplete();
            if (onUpdate) onUpdate();
            return;
        }
        let index = 0;
        let currentText = ''; // Accumulating locally to avoid React asynchronous state closure leakage!
        setDisplayed('');
        // Safely decompose Unicode arrays to ensure emojis do not split!
        const characters = Array.from(text);
        const timer = setInterval(()=>{
            // 🐞 CRITICAL FIX: Using an explicitly bound local accumulator ensures 
            // React's staggered state-flush queues never read 'undefined' out-of-bounds indices!
            if (index < characters.length) {
                currentText += characters[index];
                setDisplayed(currentText);
                index++;
                if (onUpdate) onUpdate();
            } else {
                clearInterval(timer);
                isFinished.current = true;
                if (onComplete) onComplete();
            }
        }, 15);
        return ()=>clearInterval(timer);
    }, [
        text,
        onComplete,
        onUpdate,
        fastForward
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: displayed
    }, void 0, false, {
        fileName: "[project]/src/components/Kiosk.jsx",
        lineNumber: 50,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const Kiosk = ()=>{
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fastForward, setFastForward] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            sender: 'Koda',
            text: "Hello welcome to the cafe! Looking for something?",
            typewriter: true
        }
    ]);
    const [orderStage, setOrderStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])('GATHERING');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsTyping(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isTyping) {
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [
        messages,
        isTyping
    ]);
    const handleTypingComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsTyping(false);
    }, []);
    const handleTypingUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'auto'
        });
    }, []);
    const handleSend = async (overrideText)=>{
        const textToProcess = typeof overrideText === 'string' ? overrideText : inputText;
        if (isTyping) {
            // Instantly fast-forward text and unlock interface instead of silently blocking
            setFastForward(true);
            return;
        }
        if (!textToProcess.trim()) return;
        if (textToProcess === inputText) setInputText('');
        const userMsg = {
            id: Date.now(),
            sender: 'user',
            text: textToProcess
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setMessages((prev)=>[
                ...prev,
                {
                    id: 'temp-thought',
                    sender: 'Koda',
                    text: "...",
                    typewriter: false
                }
            ]);
        try {
            const chatHistory = messages.filter((m)=>m.sender !== 'System' && m.id !== 'temp-thought').map((m)=>({
                    role: m.sender === 'user' ? 'user' : 'assistant',
                    content: m.text
                }));
            // AI Context Payload
            const activePrompt = `Current Context - Weather: ${mockContext.weather}, User Mood: ${mockContext.userMood}. User past favorite orders: ${mockContext.pastOrders.join(', ')}. User Message: "${textToProcess}"`;
            // Master system prompt commanding Llama3
            const systemPrompt = `You are Koda, an intelligent, friendly barista mascot at The Seamless Cafe acting as an interactive AI kiosk. Keep responses strictly under 3 sentences. Be cheerful and use emojis. Tailor recommendations directly to the user's context and order history. 
CRITICAL: When the customer has confirmed their customized order and is fully ready to place it (or if they agree to your upsell and you tell them you will ring them up), you MUST append the exact string '[FINALIZED]' at the very end of your response so the system can process the active transaction. Never use markdown formatting like **.`;
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        {
                            role: "system",
                            content: systemPrompt
                        },
                        ...chatHistory,
                        {
                            role: "user",
                            content: activePrompt
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 150
                })
            });
            const data = await res.json();
            let aiResponse = data.choices[0].message.content.trim().replace(/\*/g, '');
            // Evaluates if Llama3 triggered the internal logic confirmation to end the transaction
            let isFinalized = false;
            if (aiResponse.includes('[FINALIZED]')) {
                isFinalized = true;
                aiResponse = aiResponse.replace(/\[FINALIZED\]/g, '').trim();
            }
            setMessages((prev)=>prev.filter((m)=>m.id !== 'temp-thought'));
            setFastForward(false); // Reset fast-forward tracker for new message
            setIsTyping(true);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        sender: 'Koda',
                        text: aiResponse,
                        typewriter: true
                    }
                ]);
            // If Llama3 marked the transaction complete, immediately trigger the backend inventory execution sequence
            if (isFinalized) {
                setOrderStage('PROCESSING');
                const timeToWait = aiResponse.length * 15 + 500;
                setTimeout(()=>{
                    setMessages((prev)=>[
                            ...prev,
                            {
                                id: Date.now() + 2,
                                sender: 'System',
                                isSystem: true,
                                text: "⚙️ System: Executing [CHECK_INVENTORY]... Status: ITEMS_AVAILABLE"
                            }
                        ]);
                    setTimeout(()=>{
                        setMessages((prev)=>[
                                ...prev,
                                {
                                    id: Date.now() + 3,
                                    sender: 'System',
                                    isSystem: true,
                                    text: "⚙️ System: Executing [PUSH_TO_KITCHEN_QUEUE]... Status: SUCCESS"
                                }
                            ]);
                        setTimeout(()=>{
                            setFastForward(false);
                            setIsTyping(true);
                            setMessages((prev)=>[
                                    ...prev,
                                    {
                                        id: Date.now() + 4,
                                        sender: 'Koda',
                                        text: "Alright, everything is perfectly in stock and your order has been sent to the kitchen! 🎉 Your estimated wait time is about 4 minutes. Just head to the pickup counter on the right when they call your name!",
                                        typewriter: true
                                    }
                                ]);
                            setOrderStage('COMPLETED');
                        }, 1500);
                    }, 1500);
                }, timeToWait);
            }
        } catch (e) {
            console.error("Groq API Error:", e);
            setMessages((prev)=>prev.filter((m)=>m.id !== 'temp-thought'));
            setFastForward(false);
            setIsTyping(true);
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        sender: 'Koda',
                        text: "Oops! My brain got disconnected from the server. Can you repeat that?",
                        typewriter: true
                    }
                ]);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    const handleBubbleClick = ()=>{
        if (isTyping) {
            setFastForward(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full bg-[#fcfcfc] items-center justify-center overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`
            }, void 0, false, {
                fileName: "[project]/src/components/Kiosk.jsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'linear-gradient(#00a8e8 1px, transparent 1px), linear-gradient(90deg, #00a8e8 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Kiosk.jsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-7xl h-full flex flex-row items-end z-10 px-4 md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[28%] md:w-[25%] h-full flex items-end justify-center pointer-events-none z-20 pb-2 md:pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: isTyping ? "/placeholder.gif" : "/placeholder.png",
                            alt: "Mascot Avatar",
                            className: "w-full max-w-[350px] object-contain drop-shadow-2xl mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Kiosk.jsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Kiosk.jsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[72%] md:w-[75%] h-full flex flex-col justify-center py-4 md:py-8 z-30 relative min-w-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: handleBubbleClick,
                            className: `relative w-full h-full max-h-[85vh] bg-white border-[5px] border-[#00a8e8] rounded-[2.5rem] p-6 md:p-10 flex flex-col shadow-2xl ${isTyping ? 'cursor-pointer' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[20%] -left-[40px] w-0 h-0 border-y-[30px] border-y-transparent border-r-[40px] border-r-[#00a8e8]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Kiosk.jsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[20%] mt-[6px] -left-[30px] w-0 h-0 border-y-[24px] border-y-transparent border-r-[34px] border-r-white z-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Kiosk.jsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-[#00a8e8] tracking-wider mb-4 md:mb-6 font-sans select-none drop-shadow-sm shrink-0",
                                    children: "Mascot Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Kiosk.jsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto flex flex-col gap-6 pr-4 pl-2 mb-4 md:mb-6 no-scrollbar min-h-0",
                                    children: [
                                        messages.map((msg, index)=>{
                                            const isLatest = index >= messages.length - 2;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col ${msg.sender === 'user' ? 'items-end' : msg.isSystem ? 'items-center' : 'items-start'} ${!isLatest ? 'opacity-40 scale-[0.98]' : 'opacity-100'} transition-all duration-300 origin-left`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `
                     ${msg.sender === 'user' ? 'text-xl md:text-2xl font-bold text-slate-500 italic bg-slate-50 px-5 py-3 rounded-3xl border border-slate-100 shadow-sm' : ''}
                     ${msg.sender === 'Koda' ? `text-lg md:text-xl font-bold text-slate-800 leading-[1.6] tracking-tight drop-shadow-sm transition-all duration-300` : ''}
                     ${msg.isSystem ? 'text-sm md:text-lg font-bold text-slate-400 font-mono bg-slate-100/50 px-4 py-2 rounded-xl' : ''}
                   `,
                                                    children: msg.typewriter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TypewriterMessage, {
                                                        text: msg.text,
                                                        onComplete: handleTypingComplete,
                                                        onUpdate: handleTypingUpdate,
                                                        fastForward: fastForward
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Kiosk.jsx",
                                                        lineNumber: 259,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: msg.text
                                                    }, void 0, false)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 253,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, msg.id, false, {
                                                fileName: "[project]/src/components/Kiosk.jsx",
                                                lineNumber: 252,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesEndRef
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Kiosk.jsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Kiosk.jsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 md:gap-5 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 md:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSend("I want my usual"),
                                                    disabled: orderStage !== 'GATHERING',
                                                    className: "flex-1 py-3 md:py-4 border-[3px] md:border-[4px] border-[#e11d48] text-[#e11d48] hover:bg-rose-50 disabled:opacity-50 disabled:cursor-not-allowed font-extrabold text-xl md:text-2xl rounded-2xl md:rounded-3xl transition-all cursor-pointer shadow-md active:scale-95",
                                                    children: "Recommended menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex-1 py-3 md:py-4 border-[3px] md:border-[4px] border-[#e11d48] text-[#e11d48] hover:bg-rose-50 font-extrabold text-xl md:text-2xl disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl md:rounded-3xl transition-all cursor-pointer shadow-md active:scale-95",
                                                    children: "Show all menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Kiosk.jsx",
                                            lineNumber: 270,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 md:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSend(mockContext.weather.includes('hot') ? "It's so hot today" : "It's cold and rainy"),
                                                    disabled: orderStage !== 'GATHERING',
                                                    className: "flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 bg-blue-50/80 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed text-blue-600 rounded-full text-sm md:text-lg font-bold border border-blue-100 transition-colors cursor-pointer",
                                                    children: [
                                                        mockContext.weather.includes('hot') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                            className: "w-4 h-4 md:w-5 md:h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Kiosk.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 59
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"], {
                                                            className: "w-4 h-4 md:w-5 md:h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Kiosk.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 103
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Based on current ",
                                                        mockContext.weather,
                                                        " weather..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSend("I feel kinda down today"),
                                                    disabled: orderStage !== 'GATHERING',
                                                    className: "flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 bg-rose-50/80 hover:bg-rose-100 disabled:opacity-50 disabled:cursor-not-allowed text-rose-600 rounded-full text-sm md:text-lg font-bold border border-rose-100 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__["Frown"], {
                                                            className: "w-4 h-4 md:w-5 md:h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Kiosk.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Based on your mood..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSend("Can I get an Iced Latte but make it half sweet with oat milk?"),
                                                    disabled: orderStage !== 'GATHERING',
                                                    className: "flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 bg-amber-50/80 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed text-amber-600 rounded-full text-sm md:text-lg font-bold border border-amber-100 transition-colors cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "w-4 h-4 md:w-5 md:h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Kiosk.jsx",
                                                            lineNumber: 305,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Complex Customization Test"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 300,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Kiosk.jsx",
                                            lineNumber: 283,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center border-[3px] md:border-[4px] border-[#00a8e8] rounded-full overflow-hidden bg-white mt-1 group focus-within:shadow-[0_0_0_5px_rgba(0,168,232,0.15)] transition-all shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 md:pl-6 pr-2 text-[#00a8e8]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-6 h-6 md:w-8 md:h-8 fill-transparent stroke-[#00a8e8] stroke-[2.5px] outline-none",
                                                        style: {
                                                            fill: "transparent"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Kiosk.jsx",
                                                        lineNumber: 312,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: inputText,
                                                    onChange: (e)=>setInputText(e.target.value),
                                                    onKeyDown: handleKeyDown,
                                                    disabled: orderStage === 'COMPLETED',
                                                    placeholder: orderStage === 'COMPLETED' ? "Order finished!" : "Text here...",
                                                    className: "w-full bg-transparent py-3 md:py-4 text-xl md:text-2xl outline-none font-bold text-[#00a8e8] placeholder:text-[#00a8e8]/50 disabled:bg-slate-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleSend(inputText),
                                                    disabled: orderStage === 'COMPLETED' || isTyping,
                                                    className: "absolute right-2 md:right-3 p-2 md:p-3 bg-white hover:bg-blue-50 border-[3px] border-[#00a8e8] disabled:border-blue-300 text-[#00a8e8] rounded-full transition-colors cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "w-5 h-5 md:w-6 md:h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Kiosk.jsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Kiosk.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Kiosk.jsx",
                                            lineNumber: 310,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Kiosk.jsx",
                                    lineNumber: 269,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Kiosk.jsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Kiosk.jsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Kiosk.jsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Kiosk.jsx",
        lineNumber: 218,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Kiosk;
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Kiosk$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Kiosk.jsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Kiosk$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__064_-72._.js.map