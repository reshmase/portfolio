
async function sendMessage() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageInput").value;

    const response = await fetch("https://portfolio-9rts.onrender.com/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    });

    const data = await response.json();

    document.getElementById("response").innerHTML = data.status;
}