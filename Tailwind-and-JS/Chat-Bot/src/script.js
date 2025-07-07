const messageInput = document.querySelector("#message-input");
const sendBtn = document.querySelector("#send");
const userMsgTemplate = document.querySelector("#userMessage");
const chatForm = document.getElementById("chat-form");
const aiMessageLoadingTemplate = document.getElementById("AI-message-loading");
const aiMessageResponse = document.getElementById("AI-message-response");
const chatBody = document.querySelector("#messages");

const productsAndOwner = [
  {
    id: 1,
    name: "ACER Aspire 5 A515-58P-55NF 16GB/512GB – i5-1335U – Intel Iris Xe Graphics – 15.6 Inch FHD",
    stock: 40,
    price: "NRS.89999",
  },
  {
    id: 2,
    name: "Acer TravelMate P2 14 Intel Core 5 120U, 8GB RAM, 512GB SSD, 14″ WUXGA",
    stock: 25,
    price: "NRS.99999",
  },
  {
    id: 3,
    name: "ASUS VivoBook 16 2023 Intel Core i5-13420H 16 inch FHD Display, 8GB RAM, 512GB SSD",
    stock: 45,
    price: "NRS.79999",
  },
  {
    id: 4,
    name: "ASUS VivoBook Flip S 14 2023 i9‑13900H Intel Iris Xe Graphics 14 inch Touch, 16GB RAM, 1TB SSD",
    stock: 25,
    price: "NRS.162999",
  },
  {
    id: 5,
    name: "Asus VivoBook S Copilot + PC Q423SA-U5512 (Core Ultra 5 226V, Intel Arc Graphics)| 16GB/256GB",
    stock: 30,
    price: "NRS.111999",
  },
  {
    id: 6,
    name: "ASUS Zenbook 14 OLED Ultra 7 255H | Intel Arc Graphics, 14 inch 3K OLED 120Hz, 16GB RAM, 512GB SSD",
    stock: 40,
    price: "NRS.192999",
  },
  {
    id: 7,
    name: "Dell Inspiron 16 5635 2023 (AMD Ryzen 7 7730U | AMD Radeon) 16″ FHD+ Display, 16GB RAM, 512GB SSD, 1 Year Warranty",
    stock: 40,
    price: "NRS.89999",
  },
  {
    id: 8,
    name: "Dell Vostro 3530 (Intel Core i7 1355U | Intel Iris/UHD), 8GB RAM, 512GB SSD, 15.6 FHD IPS Display",
    stock: 40,
    price: "NRS.99999",
  },
  {
    id: 9,
    name: "Lenovo IdeaPad Slim 3i 2023 13th Gen i5-13420H, Intel UHD, 8GB/16GB, 512GB, 15.6 FHD",
    stock: 40,
    price: "NRS.79999",
  },
  {
    id: 10,
    name: "Lenovo IdeaPad 1 15AMN7 (AMD Ryzen 5 7520U | AMD Radeon 610M) | 8GB RAM, 512GB SSD, 15.6 FHD IPS Display",
    stock: 40,
    price: "NRS.55999",
  },
  {
    id: 11,
    name: "Lenovo IdeaPad Slim 3 (Intel Core 5-120U | Intel Graphics) |  8GB RAM, 512GB SSD, 15.6 FHD",
    stock: 40,
    price: "NRS.74999",
  },
  {
    id: 12,
    name: "Lenovo LOQ 15 (Intel Core i5-12450H; RTX 2050, 8C/12T, up to 4.4 GHz)) | 16GB RAM, 512GB SSD, 15.6 FHD",
    stock: 40,
    price: "NRS.79999",
  },
  {
    OwnersContact: {
      email: "bibekpyakurel7@gmail.com",
      phone: 9843430676,
    },
  },
];

let userMessage = {
  message: "",
};

let chatHistory = JSON.parse(localStorage.getItem("Chat-History")) || [
  {
    role: "model",
    parts: [
      {
        text: `You are an e-commerce assistant for 'Girish Tech Store' and your name is Girish AI.Only answer questions about products, orders, owner's contact (only if the user asked) and shipping.Provide the every response as well as Product details in Proper user understandable format. Recognize the specification of the product from the name and give response. If a question is out of scope, politely decline.
        Here is the Product and the owner's info in JSON format:
      ${JSON.stringify(productsAndOwner, null, 2)}
    `,
      },
    ],
  },
];

if (JSON.parse(localStorage.getItem("Chat-History"))) {
  document.addEventListener("DOMContentLoaded", function () {
    const localMsg = JSON.parse(localStorage.getItem("Chat-History"));

    localMsg.forEach((each, index) => {
      if (each.role === "user") {
        each.parts.forEach((msg) => {
          createUserMessage(msg.text.trim());
        });
      } else {
        if (each.role === "model") {
          if (index === 0) {
            return;
          }
          each.parts.forEach((msg) => {
            createBotResponse(msg.text.trim());
          });
        }
      }
    });
  });
}

// API setup
const API_KEY = "AIzaSyD3dkqSV9XHZ86aJUj6dKmChypAcC8urM0";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

function showHideSend() {
  const loading = document.querySelector("#ai-message-loading");
  if (messageInput.value.trim().length > 0 && !loading) {
    sendBtn.removeAttribute("disabled");
  } else {
    sendBtn.setAttribute("disabled", "");
  }
}

messageInput.addEventListener("input", showHideSend);

messageInput.addEventListener("keydown", function (event) {
  const loading = document.querySelector("#ai-message-loading");
  if (event.key === "Enter" && !loading) {
    event.preventDefault();
    userMessage.message = event.target.value.trim();
    let { message } = userMessage;
    if (message) {
      chatHistory.push({
        role: "user",
        parts: [{ text: userMessage.message.trim() }],
      });
      localStorage.setItem("Chat-History", JSON.stringify(chatHistory));
      createUserMessage(message);
      showHideSend();
      generateResponse();
    } else {
      return;
    }
  }
});

function createUserMessage(userMessage) {
  messageInput.value = "";
  const userMsgDiv = document.importNode(userMsgTemplate.content, true);
  userMsgDiv.querySelector("#message").textContent = userMessage;
  document.querySelector("#messages").appendChild(userMsgDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
}
sendBtn.addEventListener("click", function (event) {
  event.preventDefault();
  userMessage.message = messageInput.value.trim();
  let { message } = userMessage;
  const loading = document.querySelector("#ai-message-loading");
  if (message) {
    chatHistory.push({
      role: "user",
      parts: [{ text: userMessage.message.trim() }],
    });
    createUserMessage(message);
    localStorage.setItem("Chat-History", JSON.stringify(chatHistory));
    if (loading) {
      sendBtn.setAttribute("disabled", "");
      return;
    }
    generateResponse();
  }
  showHideSend();
});

function loadingState() {
  const aiMessageLoading = document.importNode(
    aiMessageLoadingTemplate.content,
    true
  );
  document.querySelector("#messages").appendChild(aiMessageLoading);
  sendBtn.setAttribute("disabled", "");
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  return true;
}

function createBotResponse(response) {
  const aiResponse = document.importNode(aiMessageResponse.content, true);
  response = response.replace(/[^a-zA-Z0-9\s.,?!:;"'()-]/g, "");
  aiResponse.querySelector("#botMessage").textContent = response.trim();
  document.querySelector("#messages").appendChild(aiResponse);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
}

async function generateResponse() {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": " application/json",
    },
    body: JSON.stringify({
      contents: JSON.parse(localStorage.getItem("Chat-History")),
    }),
  };
  try {
    const loading = loadingState();
    const loadingElement = document.querySelector("#ai-message-loading");
    const response = await fetch(API_URL, requestOptions);
    if (response.ok) {
      if (loading) {
        const data = await response.json();
        console.log(data);
        loadingElement.remove();
        chatHistory.push({
          role: "model",
          parts: [{ text: data.candidates[0].content.parts[0].text.trim() }],
        });
        localStorage.setItem("Chat-History", JSON.stringify(chatHistory));
        createBotResponse(data.candidates[0].content.parts[0].text.trim());
      }
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  } catch (error) {
    console.error(error.message);
  }
}
