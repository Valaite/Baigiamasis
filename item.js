const itemId = localStorage.getItem("itemId");

document.getElementById('logo').addEventListener("click", () => {
    window.location.replace("./index.html");
});

document.getElementById('buttonField').addEventListener("click", () => {
    window.location.replace("./add.html");
});

const getOneItem = () => {
    fetch(
        `https://63443bcd242c1f347f81f6bf.mockapi.io/skelbiu/p1/Items/${itemId}`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            const itemPhoto = document.getElementById('foto');
            itemPhoto.src = data.img;

            const itemPrice = document.getElementById('price')
            itemPrice.innerHTML = `${data.price} Eur`

            const itemTitle = document.getElementById('title');
            itemTitle.innerHTML = data.title;

            const itemCity = document.getElementById('city');
            itemCity.innerHTML = data.city;

            const itemDsc = document.getElementById('description');
            itemDsc.innerHTML = data.description;

            deleteButton.addEventListener('click', () => {
                deleteItem(data.id);
            });
        })
};
getOneItem();

const deleteItem = (_id) => {
    fetch(
        `https://63443bcd242c1f347f81f6bf.mockapi.io/skelbiu/p1/Items/${itemId}`,
        {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    )
        .then((res) => {
            
            setTimeout(() => {
                console.log('Product was deleted successfully');
                const element = document.createElement("h1");
                element.innerHTML = ("Prekė sėkmingai ištrinta!");
                document.body.append(element);
            }, 2000);
            setTimeout(() => {
                window.location.replace("./index.html");
            }, 4000);
            
        })
        .catch((err) => {
            console.log('err', err);
        });
}


