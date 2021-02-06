const axios = require("axios");

const fn  = {};
fn.client_id = "zkFPfNmvfsHLm7x6ge-HA94uxAuHqUjsBv7YaXdWDEw"

fn.api = axios.create({
    baseURL: "https://api.unsplash.com",
});


module.exports = fn;