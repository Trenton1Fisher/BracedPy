all: echo

echo: echo.o
	gcc echo.o -o echo

echo.o: echo.c
	gcc -c echo.c

clean:
	rm -f echo echo.o
