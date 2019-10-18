import {
    LOGIN, LOGOUT
} from '../constants/ActionTypes'

const initialState = [
    {
        userName: '',
        password: ''
    }
];

export default function profile(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return [
                ...state,
                {
                    userName: action.userName,
                    password: action.password
                }
            ];
        case LOGOUT:
        return [
            ...state,
            {
                username: '',
                password: ''
            }
        ];

        default:
            return state
    }
}
