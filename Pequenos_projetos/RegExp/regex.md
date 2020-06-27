# Aplicações das RegEx nas linguagens de programação.

ER Clássicas:
-------------------------------
a+b => {a, b}
a.b => {a, b}
a* => {vazio, a, aa, aaa, aaaa, aaaaa, ...}

ER Estendidas
-------------------------------
a+ => aa*
a? = > a + vazio
[abcdef] = > a+b+c+d+e+f => [a-f]

RegEx
-------------------------------
Ao longo da construção das linguagens e das ferramentas, surgiu o RegEx (Regular Expressions)

* RegEx => Inicialmente eram compátiveis com as ER Clássicas;
* Algumas operações na RegEx ultrapassam os limites das linguagens regulares; 
* Inspiradas nos sistemas Unix

## Onde podemos aplicar

* Editores de Texto(ctrl+f)
* Ferrameta do Sistema (Grep, GAWK, AWK)
* Linguagens de Programação (JavaScript)
* Linguagens de Marcação (HTML)

