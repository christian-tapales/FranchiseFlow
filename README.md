# FranchiseFlow 🚍

**FranchiseFlow** is a modern, role-based ServiceNow application designed to digitize and streamline the LTFRB (Land Transportation Franchising and Regulatory Board) franchise application process. 

Built as a capstone project for **CSIT440 - Industry Trends**, this application demonstrates how modern web technologies (React) can be integrated with enterprise platforms (ServiceNow SDK) to solve real-world bureaucratic bottlenecks.

---

## ✨ Key Features

*   **🎭 Persona-Based Architecture**: Instant toggle between the **Operator View** (for submitting applications) and the **Officer View** (for reviewing and approving applications).
*   **🤖 AI-Ready Documentation**: Built-in architecture to support Optical Character Recognition (OCR) for automatic extraction of OR/CR numbers from uploaded documents.
*   **🛡️ Smart Validation**: Enforces LTFRB-specific business rules on the front-end (e.g., verifying that Region 3 plates start with the letter 'C').
*   **📊 Transparency Dashboard**: A premium, glassmorphism-inspired UI featuring a dynamic Progress Bar (Draft → AI Check → LTFRB Review → Approved) to keep applicants informed.
*   **🔁 Integrated Workflow Loop**: Officers can reject applications with specific remarks, sending them back to the operator for immediate correction.

## 🛠️ Technology Stack

*   **Platform**: ServiceNow (Vancouver/Washington Release)
*   **Framework**: ServiceNow Fluent SDK, React.js
*   **Styling**: Pure Vanilla CSS with CSS Variables (Custom Design System)
*   **Typography**: Google Fonts (Inter, Outfit, JetBrains Mono)
*   **Version Control**: Git & GitHub

## 🚀 How to Run Locally / Deploy

### Prerequisites
1. Node.js installed on your machine.
2. The ServiceNow CLI (`now-sdk`) installed globally.
3. A ServiceNow Developer Instance.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/christian-tapales/FranchiseFlow.git
   ```
2. Navigate to the project directory and install dependencies:
   ```bash
   cd FranchiseFlow
   npm install
   ```
3. Authenticate with your ServiceNow instance:
   ```bash
   npx now-sdk auth --add https://devXXXXX.service-now.com --type basic --alias dev
   ```
4. Build the React application:
   ```bash
   npm run build
   ```
5. Deploy to your ServiceNow instance:
   ```bash
   npm run deploy
   ```

## 💻 Viewing the Application
Once deployed, navigate to the custom UI Page endpoint on your instance:
`https://devXXXXX.service-now.com/x_1985693_franchis_manager.do`

---
*Developed for CSIT440 - Industry Trends.*
