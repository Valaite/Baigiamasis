const itemList = document.querySelector('main');
let allItems;

document.getElementById('buttonField').addEventListener("click", () => {
    window.location.replace("./add.html");
});

const displayItem = (item) => {

    const divForItem = document.createElement('div');
    divForItem.setAttribute("class", "itemList");
    itemList.append(divForItem);
    divForItem.innerHTML = "";

    const city = document.createElement('p');
    city.innerText = item.city;

    const divForCity = document.createElement('div');
    divForCity.setAttribute("class", "citySector");
    divForCity.append(city);
    divForItem.append(divForCity);

    const image = document.createElement('div');
    image.setAttribute("class", "photo");
    image.style.backgroundImage = `url(${item.img})`;
    divForItem.append(image);

    const name = document.createElement('h2');
    name.innerText = item.name;

    const description = document.createElement('p');
    description.innerText = item.description;

    const price = document.createElement('h4');
    price.innerText = `${item.price} Eur`;

    const divForInfo = document.createElement('div');
    divForInfo.setAttribute("class", "itemInfo");
    divForInfo.append(name, description, price);
    divForItem.append(divForInfo);

    divForInfo.addEventListener("click", () => {
        localStorage.setItem("itemId", item.id);
        window.location.replace("./item.html");
    })
}


const fetchItems = async () => {
    allItems = await fetch(
        'https://63443bcd242c1f347f81f6bf.mockapi.io/skelbiu/p1/Items'
    ).then((response) => {
        return response.json();
    });
    console.log('all', allItems);

    allItems.sort((a, b) => a.price - b.price);

    allItems.forEach((items) => {

        displayItem(items);

    });
}
fetchItems();