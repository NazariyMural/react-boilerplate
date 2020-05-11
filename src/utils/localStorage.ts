export const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return token;
};

export const getRefreshToken = () => {
    const refreshData = localStorage.getItem("refreshData");
    if (!refreshData) return null;
    return JSON.parse(refreshData);
};

type RefreshData = {
    expired?: Date;
    refreshToken: string;
};
export const saveToken = (token: string, data: RefreshData) => {
    if (!token) return null;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshData", JSON.stringify(data));
};

export const deleteToken = () => {
    localStorage.removeItem("refreshData");
    localStorage.removeItem("token");
};
