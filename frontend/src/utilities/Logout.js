const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userCPF");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
};


export default logout;