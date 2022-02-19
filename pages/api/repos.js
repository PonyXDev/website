const fetch = require('isomorphic-unfetch')

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/PonyXDev/repos', {
        headers: {}
    })).json();

    let __ = await (await fetch('https://api.github.com/users/TeamMagnet/repos', {
        headers: {}
    })).json();
    try {
        res.send([..._, ...__])
    } catch {
        res.status(500);
    }
}
