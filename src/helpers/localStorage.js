export function storeReadSettings(settings) {
    localStorage.setItem('read-settings', JSON.stringify(settings));
}

export function getReadSettingsFromStore() {
    let settings = null;
    try {
        settings = JSON.parse(localStorage.getItem('read-settings'));
    } catch (e) {
        console.log("Getting 'read-settings' from localStorage failed.");
    }
    return settings;
}
