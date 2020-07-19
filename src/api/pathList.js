export default {
    resources: {
        auth: {
            login: '/userAPI/login'
        },
        users: {
            getUserInfo: '/userAPI/v1/users/{userId}',
            updateAvator: '/userAPI/v1/users/{userId}',
            updateGender: '/userAPI/v1/users/',
        },
        receiverAddresses: {
            getReceiverAddressList: '/receiverAddressAPI/v1/receiverAddress/user/{userId}'
        }
    }
} 