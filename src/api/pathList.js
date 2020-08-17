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
            getReceiverAddressList: '/receiverAddressAPI/v1/receiverAddress/user/{userId}',
            addReceiverAddress: '/receiverAddressAPI/v1/receiverAddress/',
            updateReceiverAddress: '/receiverAddressAPI/v1/receiverAddress/',
            setDefaultAddress: '/receiverAddressAPI/v1/receiverAddress/default',
            deleteReceiverAddressList: '/receiverAddressAPI/v1/receiverAddress/{id}',
            getReceiverAddress: '/receiverAddressAPI/v1/receiverAddress/{id}',
        }
    }
} 