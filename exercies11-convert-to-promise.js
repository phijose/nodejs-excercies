// function fetchUserData(callback) {
//     setTimeout(() => {
//         const user = { id: 1, name: 'John Doe' };
//         callback(user);
//     }, 2000);
// }

// fetchUserData((user) => {
//     console.log('User data fetched:', user);
// });

function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = { id: 1, name: 'John Doe' };
            resolve(user);
        }, 2000);
    });
}

fetchUserData()
    .then((user) => {
        console.log('User data fetched:', user);
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
    });

