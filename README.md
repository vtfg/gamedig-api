<h1 align="center">
    Gamedig API
</h1>

<h4 align="center">
  Get information about your favorite server without enter ingame
</h4>
<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/vitogd/gamedig-api.svg">
</p>

<p align="center">
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

---

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/]) or higher + [Yarn v1.13](https://yarnpkg.com/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/vitogd/gamedig-api gamedig-api

# Go into the repository
$ cd gamedig-api

# Install dependencies
$ npm install

# Run the api
$ npm run start:dev
```

The default port is 3000, you can change it editing the server.js file:

```js
const port = process.env.PORT || 3000; // change the 3000 to your favorite port
```

## How to get the information?

Base URL: `localhost:3000/`

| Method | Endpoint | Params           | Return             |
| ------ | -------- | ---------------- | ------------------ |
| GET    | `/info/` | `game, ip, port` | server info object |

[List of supported games](https://github.com/gamedig/node-gamedig#games-list)

The param port is optional depending of the game.

## Example usage:

GET `localhost:3000/info/?game=css&ip=177.54.144.126&port=27212`

Return:

```json
{
    "info": {
        "name": "HyperHops [WL]",
        "map": "bhop_malabar7",
        "password": false,
        "raw": {14 items},
        "maxplayers": 12,
        "players": [1 item],
        "bots": [1 item],
        "connect": "177.54.144.126:27212",
        "ping": 30
    }
}
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/vitogd/gamedig-api/blob/master/LICENSE) for more information.

---
