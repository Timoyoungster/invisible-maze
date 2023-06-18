all: game.asm
	nasm -f elf64 game.asm
	ld -o game game.o
	rm game.o
