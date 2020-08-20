
/**
 * Fetches the computers from json file
 */
const getComputers = async () => {
    return await fetchData("data/computers.json");
}

/**
 * Fetches bank acount from json file
 */
const getAccount = async () => {
    return await fetchData("data/account.json");
}

/**
 * Fetches work account from json file
 */
const getWork = async () => {
    return await fetchData("data/work.json");
}

/**
 * Fetches data from url
 * @param  url 
 */
const fetchData = async (url) => {
    console.log(window.location.pathname)
    const baseurl = await window.location.origin + window.location.pathname;
    const data = await fetch(baseurl + url);
    const json_data = await data.json();
    return json_data;
}