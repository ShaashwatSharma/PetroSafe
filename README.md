# ⛽ Petrol Sensor Monitoring Dashboard

A full-stack web application that monitors fuel usage from a petrol tank sensor in real-time, helping detect theft, optimize consumption, and track history and alerts.

---

## 🚀 Features

- 📈 **Live Fuel Monitoring** – View fuel level in real-time via charts.
- 🔔 **Smart Alerts** – Get notified on potential theft, low fuel, or sudden drops.
- 📅 **Usage History** – Track fuel consumption by time and date.
- 👤 **User Accounts** – Sign up, sign in, and manage personal sensor data.
- 🛠️ **Calibration Tools** – Adjust for sensor offsets and scaling errors.

---

## 🖼️ Preview

Coming soon...

---

## ⚙️ Tech Stack

### Frontend
- **React + TypeScript**
- **Tailwind CSS**
- **Recharts** (for data visualization)
- **React Router**

### Backend
- **Node.js + Express**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **WebSockets** (for real-time updates)

---

## 🧱 Database Models

Using Prisma ORM:

- `User` – Account details
- `SensorData` – Fuel level logs
- `Alert` – Theft or usage notifications
- `Calibration` – User-specific calibration settings

---

## 🛠️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/ShaashwatSharma/PetroSafe.git
cd petrol-sensor-dashboard
```