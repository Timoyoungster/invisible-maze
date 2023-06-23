section .data
  hello: db "Hello "
  ending: db "!", 10
section .bss
  input: resb 16
section .text
  global _start
  
_start:

  call exit

exit:
  mov rax, 60 
  mov rdi, 0
  syscall
