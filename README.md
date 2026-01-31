# IT23204898
# Swift Translator Automation Suite 🚀
# LINK- https://github.com/Pasinduhapuachchige/IT23204898

This project contains an automated test suite for the **Swift Translator** web application (Singlish to Sinhala converter). It utilizes **Playwright** with **JavaScript** to verify functional correctness and UI responsiveness across various linguistic scenarios.

**Student Name:** DILMIN H.A.P  
**Student ID:** IT23204898
**Subject:** ITPM

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Test Scenarios Covered](#test-scenarios-covered)
- [Project Structure](#project-structure)

---

## 🧐 Project Overview
The goal of this assignment is to automate the testing of the `swifttranslator.com` application. The suite verifies that "Singlish" (phonetic English) inputs are correctly translated into Sinhala text.

It includes **35 Total Tests**:
* **24 Positive Functional Test Cases:** Validating correct translations for grammar, numbers, contexts, and mixed languages.
* **10 Negative Test Cases:** Verifying system behavior with invalid inputs, empty states, and special characters.
* **1 UI Test Case:** Verifying input field interactions (typing and clearing).

---

## 🛠 Prerequisites
Ensure you have the following installed on your machine:
* **Node.js** (v14 or higher) - [Download Here](https://nodejs.org/)
* **NPM** (Included with Node.js)
* **Visual Studio Code** (Recommended editor)

---

## ⚙️ Installation

1.  **Clone or Unzip** the project folder.
2.  Open a terminal in the project root directory.
3.  Install the required dependencies:
    ```bash
    npm install
    ```
4.  Install the Playwright browsers:
    ```bash
    npx playwright install
    ```

---

## ▶️ Running the Tests

You can run the tests using the following commands in your terminal:

### 1. Run All Tests (Headless Mode)
Runs all tests in the background without opening a browser window.
```bash
npx playwright test
