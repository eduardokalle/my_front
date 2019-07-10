import { getToken, authenticationService } from '../services/auth';
import instance from "../services/instance";

const auth = {
    state: {
        loading: false
    },
    effects: {
        setAuthenticated: (state, payload) => ({
            ...state,
            ...payload,
            isAuthenticated: !!payload.token,
        }),
        async authentication(credentials) {
            try {
                this.setLoading(true);
                const promise = await authenticationService(
                    credentials.userName,
                    credentials.password);
                const { user, token } = await promise.data;
                this.setAuthenticated({ user, token });
                instance.setToken(token);
            } catch (err) {
                this.setAuthenticated({ user: {}, token: null });
            } finally {
                this.setLoading(false);
            }
        },
        logout() {
            instance.removeToken();
            this.setLogout();
        },
    },
    reducers: {
        setLoading: (state, loading) => ({
            ...state,
            loading
        }),
        setAuthenticated: (state, payload) => ({
            ...state,
            ...payload,
            isAuthenticated: !!payload.token
        }),
        setLogout: () => ({
            token: null,
            user: {},
            isAuthenticated: false
        })
    }
};

export default auth;