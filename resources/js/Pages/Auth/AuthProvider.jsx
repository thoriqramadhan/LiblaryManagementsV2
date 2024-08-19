import React, { createContext } from "react";

export const AuthContext = createContext(null);
export function AuthProvider({ auth, children }) {
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
