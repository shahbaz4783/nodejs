```bash
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "custom": "node app.js"
  },
```

start is preserverd node word,
by runing:

```bash
npm start
```

it will run the command specifed in it.

We can also make custom scripts, like:
```bash
"custom:" "node app.js"
```

To run this script:

```bash
npm run custom
```