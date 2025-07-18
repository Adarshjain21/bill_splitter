# 🧾 Smart Bill Splitter for Roommates

A full-stack MERN application to split grocery or utility bills easily among roommates. Upload a photo or scanned copy of your bill, and the app uses OCR (Optical Character Recognition) to extract item names and prices. You can assign items to individuals and the app calculates how much each person owes based on Splitwise logic. Settle payments easily with UPI or PayPal.

---

## 📸 Demo

> (Insert GIF or screenshot of the app here once it's ready)

---

## ⚙️ Features

- 📤 Upload scanned or photo bills
- 🔍 OCR extraction of items and prices using [OCR.space](https://ocr.space/)
- 👥 Assign items to each roommate
- 💰 Automatic cost splitting
- 💳 UPI/PayPal integration (optional)
- 📈 Track previous splits and settlements

---

## 🛠️ Tech Stack

**Frontend**
- React
- Tailwind CSS
- Shadcn/UI (for UI components)

**Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)

**APIs**
- [OCR.space API](https://ocr.space/ocrapi) for text recognition

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/bill_splitter.git
cd bill_splitter
