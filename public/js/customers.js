const table = document.querySelector('main table tbody');

// Generate Data
const viewAllCustomers = () => {
    getUsers('http://localhost:8000/api/customer');
}

// GET Request
const getUsers = async (url) => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        const newData = allData.data.response.map(e => {
            return `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.username}</td>
                    <td>${e.email}</td>
                    <td>${e.current_balance}</td>
                </tr>
            `;
        });
        table.innerHTML = newData.join('');
    } catch (err) {
        console.log(`Error. ${err.message}`);
    }
}

viewAllCustomers();
document.querySelector('nav ul li a#customers').style.borderBottom = "4px solid #FFF";