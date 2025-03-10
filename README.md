# 📌 Text Enhancement API

## 🚀 Overview
The **Text Enhancement API** is a RESTful service that enhances and modifies user-provided text using **Google's Gemini AI**. It supports:
- **Enhance:** Improves text clarity, vocabulary, and structure.
- **Modify:** Adjusts text by shortening, lengthening, or changing tone (**formal/casual**).

This project is built with **Node.js and Express.js** and integrates **Google Gemini API** for AI-driven text processing.

---

## 📂 Project Structure
```
text-enhancer-api/
│── src/
│   │── controllers/        # API Logic
│   │── routes/             # API Endpoints
│   │── services/           # Google Gemini API Integration
│   │── middleware/         # Error Handling
│── config/
│── .env                    # API Keys & Config
│── package.json             # Dependencies
│── server.js                # Main Server File
│── README.md                # Documentation
```

---

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
https://github.com/Sandeepk14/Text-Enhancer-Api.git
cd text-enhancer-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables (`.env`)**
```sh
PORT=8080
GEMINI_API_KEY=your_google_gemini_api_key
```

### **4️⃣ Start the Server**
```sh
npm run dev  # Uses Nodemon (recommended)
```
OR  
```sh
node server.js
```

---

## 📌 API Endpoints

### **1️⃣ Enhance Text**
🔹 **Endpoint:**  `POST /api/enhance`
- **Request Body:**
  ```json
  {
    "text": "She walked into the room and sat down."
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Text enhancement successful",
    "enhancedText": "Entering the room, she seated herself."
  }
  ```

### **2️⃣ Modify Text**
🔹 **Endpoint:** `POST /api/modify`
- **Request Body Example (Formal Modification):**
  ```json
  {
    "text": "Hey, can you send me that report real quick?",
    "modification": "formal"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Text modified successfully - formal",
    "modifiedText": "Having swiftly completed her tasks, she departed the office."
  }
  ```

---

## 🛠 Supported Modifications

| Type       | Example Input                                      | Expected Output                                           |
|------------|---------------------------------------------------|----------------------------------------------------------|
| **Shorten** | "She quickly finished her work and left the office." | "Having swiftly completed her tasks, she departed the office." |
| **Lengthen** | "AI is transforming the world."                 | "Artificial intelligence is revolutionizing global society..." |
| **Formal** | "Hey, can you send me that report real quick?"   | "Could you please send me the report at your earliest convenience?" |
| **Casual** | "The meeting has been scheduled in the conference room." | "The conference room is reserved for the meeting." |

---

## ⚠️ Error Handling
| **Error** | **Reason** | **Response Example** |
|-----------|-----------|----------------------|
| **400 Bad Request** | Missing `text` field | `{ "error": "Text is required." }` |
| **400 Bad Request** | Invalid `modification` type | `{ "error": "Invalid modification type. Allowed values: shorten, lengthen, formal, casual" }` |
| **500 Internal Server Error** | API failure | `{ "error": "Internal Server Error" }` |

---

## 🎯 Next Steps
- ✅ **Deploy API on Render, Vercel, or AWS**
- ✅ **Add authentication (JWT, API Keys)**
- ✅ **Optimize API performance with caching & rate limiting**

---

## 🤝 Contributing
1. **Fork the repository**
2. **Create a feature branch (`git checkout -b feature-name`)**
3. **Commit changes (`git commit -m "Added new feature"`)**
4. **Push to branch (`git push origin feature-name`)**
5. **Open a Pull Request**

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 📞 Contact
For support, contact **[Your Name]** at **skraj5873@gmail.com**  
GitHub: **[Your GitHub Profile](https://github.com/Sandeepk14/)**

