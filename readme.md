# Bit Repository Manager

![Bit Logo](https://github.com/user-attachments/assets/32e1d998-54d0-413a-a1af-0477a4349841)

Bit Repository Manager is a simple and efficient command-line tool designed to help you manage your Bit repositories with ease. It allows you to initialize a new Bit repository, add files, read files, and hash files seamlessly.

## Features

✅ Initialize a new Bit repository  
✅ Add files to the Bit repository  
✅ Read file contents from the repository  
✅ Generate a hash for files  
✅ Simple and lightweight command-line tool  
✅ Easy setup and installation  

## Installation (User)

[![npm version](https://img.shields.io/npm/v/bitshit.svg)](https://www.npmjs.com/package/bitshit)
[![npm downloads](https://img.shields.io/npm/dt/bitshit.svg)](https://www.npmjs.com/package/bitshit)
[![npm install globally](https://img.shields.io/badge/npm%20install%20-g%20bitshit-brightgreen)](https://www.npmjs.com/package/bitshit)

```sh
npm i -g bitshit
```

## Installation (Development)

To install **Bit Repository Manager**, follow these steps:

```bash
# Clone the repository
git clone https://github.com/TheAvtarSingh/bit

# Navigate to the project directory
cd bit

# Install dependencies
npm install
```

## Usage

Once installed, you can use the following commands to manage your Bit repository:

### Initialize a new Bit repository

```bash
bit init
```

This command initializes a new Bit repository in your current directory.
* Support till v1.0.0

### Add files to the Bit repository

```bash
bit add <filename>
```

Replace `<filename>` with the name of the file you want to add to the repository.

### Read file contents from the repository

```bash
bit read-file <hash>
```

This command retrieves the contents of a file stored in the repository using its hash.

### Generate a hash for a file

```bash
bit hash-my-file <filename>
```

This command generates a unique hash for a file and stores it in the Bit repository.

## Example Workflow

1. Initialize a new Bit repository:
   ```bash
   bit init
   ```
   _Output:_ "Bit repository initialized successfully!"

   <img width="373" alt="Screenshot 2025-02-16 at 1 03 04 PM" src="https://github.com/user-attachments/assets/b6195564-2c5e-4e6a-a1e6-ef554d6e84f3" />


3. Add a file to the repository:
   ```bash
   bit add example.txt
   ```
   _Output:_ "File 'example.txt' added to the repository."

5. Read file contents using its hash:
   ```bash
   bit read-file a1b2c3d4e5f6g7h8i9j0k
   ```
   _Output:_ "File content: Hello, world!"

   <img width="750" alt="Screenshot 2025-02-16 at 1 04 07 PM" src="https://github.com/user-attachments/assets/d4381b47-7026-4732-99ba-900ec0711ff2" />

7. Generate a hash for a file:
   ```bash
   bit hash-my-file example.txt
   ```
   _Output:_ "Generated hash for example.txt: a1b2c3d4e5f6g7h8i9j0k"

   <img width="642" alt="Screenshot 2025-02-16 at 1 03 40 PM" src="https://github.com/user-attachments/assets/c2ee4743-6771-43e6-94c1-2692f4fd0322" />


## Screenshots

### Initializing a Bit Repository

[Initialize Bit Repo](https://github.com/TheAvtarSingh/bit/edit/master/readme.md#usage)

<img width="352" alt="Screenshot 2025-02-14 at 10 48 19 PM" src="https://github.com/user-attachments/assets/a675a6aa-877d-4b3b-8e77-80653093d4b1" />
<br>
<img width="171" alt="Screenshot 2025-02-14 at 10 46 28 PM" src="https://github.com/user-attachments/assets/1748cdd1-4cd6-4126-a624-c054a9f1cca6" />

### Adding and Reading Files from the Repository
[Adding Files](https://github.com/TheAvtarSingh/bit/edit/master/readme.md#features)

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-<yourname>-<feature>`).
3. Commit your changes (`git commit -m '<yourname>-<Feature Description>'`).
4. Push to the branch (`git push origin feature-<yourname>-<feature>`).
5. Open a Pull Request.



## License

This project is licensed under the [MIT License](LICENSE).

## Support

For any issues or feature requests, feel free to open an [issue](https://github.com/theavtarsingh/bit/issues) or contact us at singha2k2@gmail.com.

