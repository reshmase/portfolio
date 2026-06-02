async function loadMessage() {

    const response = await fetch("https://portfolio-9rts.onrender.com/api/http");

    const data = await response.json();

    document.getElementById("message").innerHTML = data.message;
}