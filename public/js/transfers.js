const table = document.querySelector('main table tbody');

// Generate Data
const viewAllTransfers = () => {
    getData('http://localhost:8000/api/transfer');
}

// GET Request
const getData = async (url) => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        const newData = allData.data.response.map(e => {
            return `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.sender}</td>
                    <td>${e.receiver}</td>
                    <td>${e.balance}</td>
                </tr>
            `;
        });
        table.innerHTML = newData.join(' ');
    } catch (err) {
        console.log(`Error. ${err.message}`);
    }
}
viewAllTransfers();