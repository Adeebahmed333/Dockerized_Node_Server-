# Node Usage With Docker

This project aims to demonstrate the usage of Node.js with Docker. It provides a basic setup for running a Node.js application within a Docker container.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Docker
- Node.js

## Getting Started

To run the Node.js application using Docker, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Build the Docker image by running the following command:

    ```docker
    docker build -t node-docker .

    ```docker

4. Once the image is built, start the Docker container by executing the following command:

    ```docker
    docker run -p 3000:3000 node-docker
    ```

5. Open your web browser and visit `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
