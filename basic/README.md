# Microfrontends Made Simple

This project demonstrates a simple and lightweight microfrontend architecture without using any bundlers like Webpack or tools like Babel. Each microfrontend is served independently and integrated via standard HTML and JavaScript.

##  Project Structure

```python
# Microfrontend Project Structure

index.html  /* Entry point for Microfrontend */
app.js  
Gladiator/  
  ├── Gladiator.js  
Warrior/  
  ├── Warrior.js  
  ├── index.html  /* Entry point for Warrior application */  
  ├── warrior-scripts.js  

```


## 🚀 Getting Started

To run this project locally, follow the steps below. You'll start two local servers: one for the main shell and one for a microfrontend (`Warrior`).

---

### 🔹 1. Start the Main Microfrontend Shell

1. Open a terminal and navigate to the main project directory:

    ```bash
    cd /path/to/microfrontends
    ```

2. Start a simple HTTP server on port `3000`:

    ```bash
    python3 -m http.server 3000
    ```

3. Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

### 🔹 2. Start the Warrior Microfrontend

1. Open a **new terminal** and navigate to the `Warrior` directory:

    ```bash
    cd /path/to/microfrontends/Warrior
    ```

2. Start another HTTP server on port `3001`:

    ```bash
    python3 -m http.server 3001
    ```

3. Access the Warrior microfrontend directly at: [http://localhost:3001](http://localhost:3001)

---

## 💡 How It Works

- The main `index.html` dynamically loads other microfrontends using `<script type="module">`.
- Each microfrontend (e.g., `Warrior`, `Gladiator`) is developed and deployed independently.
- This approach allows for better scalability and separation of concerns in frontend architecture.

---

