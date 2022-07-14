const senders = document.querySelector('#sender');
const receivers = document.querySelector('#receiver');

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
                <option value='${e.email}'>${e.email}</option>
            `;
        });
        senders.innerHTML = newData.join('');
        senders.addEventListener('change', eve => {
            receivers.innerHTML = allData.data.response.map(e => {
                if (e.email == eve.target.value) {
                    allData.data.response.slice(allData.data.response.indexOf(e), 1);
                } else {
                    return `
                        <option value=${e.email}>${e.email}</option>
                    `;
                }
            })
        })
    } catch (err) {
        console.log(`Error. ${err.message}`);
    }
}
viewAllCustomers();
document.querySelector('nav ul li a#transfer').style.borderBottom = "4px solid #FFF";