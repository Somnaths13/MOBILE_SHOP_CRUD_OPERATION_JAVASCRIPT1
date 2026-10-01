# Mobile Shop Management System (JavaScript CLI)

A simple console-based **Mobile Shop Management System** built with **JavaScript (Node.js)** using the standard `readline` interface. This application performs full **CRUD (Create, Read, Update, Delete)** operations to manage mobile inventory records directly from the terminal.

---

## 🚀 Features

* **Add Mobile**: Register new mobile devices with unique ID, Brand, Model, Price, and Quantity.
* **Display All Mobiles**: Formatted tabular view displaying all saved mobile records.
* **Search Mobile**: Quick lookup by Mobile ID to display specific item details.
* **Update Mobile**: Modify existing details (Brand, Model, Price, Quantity) for any mobile record.
* **Delete Mobile**: Safely remove records with a user confirmation prompt (`Y/N`).
* **Interactive CLI Dashboard**: Menu-driven interface using Node.js `async/await` for seamless interaction.

---

## 🛠️ Prerequisites

* **Node.js** (v12.0 or higher) installed on your system.

---

## 📥 Installation & Usage

1. **Clone the repository:**
```bash
git clone https://github.com/Somnaths13/MOBILE_SHOP_CRUD_OPERATION_JAVASCRIPT1.git

```


2. **Navigate to the project folder:**
```bash
cd MOBILE_SHOP_CRUD_OPERATION_JAVASCRIPT1

```


3. **Run the application:**
```bash
node app.js

```



---

## 📸 Menu Operations & Output Screenshots

### 1. Add Mobile (Choice 1)

Allows adding a new mobile record into the inventory after checking that the Mobile ID is unique.

---

### 2. Display All Mobiles (Choice 2)

Displays all currently stored mobile records in a formatted clean table layout.

---

### 3. Search Mobile (Choice 3)

Searches for a mobile entry by ID and displays its complete details if found.

---

### 4. Update Mobile (Choice 4)

Updates existing attributes (Brand, Model, Price, Quantity) for a specific Mobile ID.

---

### 5. Delete Mobile (Choice 5)

Prompts for a Mobile ID and asks for confirmation before removing the item from records.

---

### 6. Exit System (Choice 6)

Terminates the program execution safely.

---

## 📄 File Structure

```text
MOBILE_SHOP_CRUD_OPERATION_JAVASCRIPT1/
│
├── app.js          # Core Node.js CLI Application source code
├── README.md       # Project Documentation
├── choice1.png     # Screenshot for Add Mobile operation
├── choice2.png     # Screenshot for Display Mobiles operation
├── choice3.png     # Screenshot for Search Mobile operation
├── choice4.png     # Screenshot for Update Mobile operation
├── choice5.png     # Screenshot for Delete Mobile operation
└── choice6.png     # Screenshot for Exit operation

```
