FROM gcc:latest

# Install flex (if necessary)
RUN apt-get update && apt-get install -y flex

# Set the working directory
WORKDIR /app

# Create the necessary directories before running the make command
RUN mkdir -p /app/compiler

# Copy the source code into the container
COPY . /app

# Run the make command
RUN make
