export default {
    resources: {
        auth: {
            login: '/api/login'
        },
        users: {
            getUserInfo: '/api/v1/users/{userId}',
            updateAvator: '/api/v1/users/{userId}',
            updateGender: '/api/v1/users/'
        }
    }
} 