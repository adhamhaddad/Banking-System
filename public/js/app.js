const table = document.querySelector('main table tbody');
const butt = document.querySelector('button');

// Generate Data
const donate = () => {
    getUsers('http://localhost:8000/api/users');
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
        table.innerHTML = newData;
    } catch (err) {
        console.log(`Error. ${err.message}`);
    }
}

// Donate Button
butt.addEventListener('click', donate);