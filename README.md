# cake_factory

- [Live Link](http://ec2-13-235-71-128.ap-south-1.compute.amazonaws.com/)

-  [SRS Document](https://docs.google.com/document/d/1xxq_HDyZgQQXE9Ql2p_ONqY0hUvuF4eadkP6IVx8N5k/edit?usp=sharing)

## Steps to Execute

```bash
git clone https://github.com/prasantmahato/cake_factory.git
cd cake_factory
```

- ### Create necessary .env variables and config file
```bash
touch client/.env
# Content of .env file
PORT=3000
VITE_APP_ORIGIN = "http://localhost:5500"   # Backend server API endpoint
```

```bash
touch backend/.env
# Content of .env file
PORT=5500
NODE_ENV=development    # or Production
SECRET_KEY="BIG-*SS-SECRET-KEY"
TOKEN_KEY="BIG-*SS-SECRET-KEY"
ORIGIN="http://ec2-13-235-71-128.ap-south-1.compute.amazonaws.com/"
```

```bash
touch config/config.js
#Content of config.js
PORT = 5500
MONGO_URI = 'YOUR_MONGO_DB_CONNECTION_URI'
```

- ### Install packages, and start client & server

```bash
cd client
npm install
npm run dev # Running in development mode
# or
npm run build   # Build for production
```

```bash
cd ../backend
npm install
node server.js  # local
# or 
pm2 start server.js # Run on ec2 instance
```



## Screenshots

- Homepage with navbar
<img width="1792" alt="Homepage" src="https://github.com/prasantmahato/cake_factory/assets/62459775/f31a477a-e107-4fa5-8185-51a90a4d7ecf">

- Homepage with Footer
<img width="1792" alt="Homepage footer" src="https://github.com/prasantmahato/cake_factory/assets/62459775/abb1f36f-f4f4-4fe3-8579-df82ff29d7f9">

- Cart
<img width="1792" alt="Cart" src="https://github.com/prasantmahato/cake_factory/assets/62459775/8e32cc14-a87a-4434-a6c5-6b30d2eb4e0d">

- Checkout
<img width="1792" alt="Checkout" src="https://github.com/prasantmahato/cake_factory/assets/62459775/43ee038c-34ec-4695-b049-6ec195f7fe55">

- Register
<img width="1792" alt="Register" src="https://github.com/prasantmahato/cake_factory/assets/62459775/f4311fda-5b77-4d72-a21a-63831335cbe1">

- Login
<img width="1792" alt="Login" src="https://github.com/prasantmahato/cake_factory/assets/62459775/d04b90b1-e196-4fd0-adb9-71628b08f672">


[comment]: <> (<img width="1792" alt="Screenshot_home" src="https://github.com/prasantmahato/cake_factory/assets/62459775/c6746ee1-b07c-4c97-b9e0-0fc5b8c14810">)

[comment]: <> (<img width="1792" alt="Screenshot_product" src="https://github.com/prasantmahato/cake_factory/assets/62459775/44311d26-43d2-4d4a-af9d-90e4c4abaca9">)

#### Things to do

- [x] Set development and prodcution url
- [ ] Implement Authentication
- [x] Implement checkout
