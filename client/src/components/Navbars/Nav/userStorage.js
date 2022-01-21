function loadData({ key }) {
    try {
        let data = JSON.parse(localStorage.getItem("user"));
        console.log("data", data);
        return data;
    } catch (err) {
        return undefined;
    }
}

function saveData({ key }, data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export { loadData, saveData };