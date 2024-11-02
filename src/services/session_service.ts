export function checkUserSession() {
    const token = localStorage.getItem('token');
    
    if(token == null) {
        localStorage.clear();
        return false;
    }

    return true;
}

export function storeSession(info: any, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('info', JSON.stringify(info));
}

export function getUserInfo() {
    JSON.parse(localStorage.getItem('info') ?? "{}");
}