# Variables
FLEX = flex
CC = gcc
OUTPUT = a.out
SRC = array.c
OBJ = array.o

# Default target: run flex, compile source files, and link them
all: $(OUTPUT)

# Compile the lex.yy.c using flex
lex.yy.c: scanner.l
	$(FLEX) scanner.l

# Compile the array source file into object file
array.o: array.c array.h
	$(CC) -c array.c

# Link the object files and lex.yy.c to create the final executable
$(OUTPUT): lex.yy.c $(OBJ)
	$(CC) lex.yy.c $(OBJ) -o $(OUTPUT)

# Clean up the generated files
clean:
	rm -f lex.yy.c $(OBJ) $(OUTPUT)
