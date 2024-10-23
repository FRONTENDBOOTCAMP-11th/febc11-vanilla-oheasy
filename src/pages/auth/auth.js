import axios from 'axios';

const getUserEmail = async function () {
    try {
        const response = await axios.get('https://11.fesp.shop/users/login', {
            headers: {
                'client-id': 'vanilla05',
            },
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}