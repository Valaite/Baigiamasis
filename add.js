
const form = document.querySelector("form");

document.getElementById('logo').addEventListener("click", () => {
    window.location.replace("./index.html");
});

function addItem(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const city = document.getElementById('city').value;
    const image = document.getElementById('img').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    const newProperty = {
        name: title,
        city: city,
        img: image,
        price: price,
        description: description,

    }
    fetch('https://63443bcd242c1f347f81f6bf.mockapi.io/skelbiu/p1/Items',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProperty),
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const element = document.createElement("h3");
            element.innerHTML = ("Prekė sėkmingai išsaugota!");
            document.body.append(element);
        })
        .catch((error) => {
            console.log(error)

        })
}
form.addEventListener("submit", addItem);