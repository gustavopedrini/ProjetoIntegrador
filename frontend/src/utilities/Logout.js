const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userCPF");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
};


export default logout;