async function loadMessage() {

    const response = await fetch("https://your-backend-url.onrender.com/api");

    const data = await response.json();

    document.getElementById("message").innerHTML = data.message;
}