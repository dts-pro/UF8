# 1. Relacions entre classes

Com hem vist fins ara, es poden ocultar i encapsular diferents atributs i funcions del nostre programa dins les classes, estos seran cridats i tractats des de el programa principal, però estes classes queden aïllades entre sí, imaginem que hi tenim una classe Assignatura i un altra Professors, és lògic pensar que cada Assignatura estarà impartida per un o més professors, però si no les relacionem entre sí, mai hi tindrem forma de saber qui imparteix què.

Ara veurem com es poden relacionar les classes entre sí, i a més a més, veurem que segons el tipus de dependència entre les classes, les relacions poden ser de distints tipus.

## 1.1 Associacions

L'associació és el **procés d'agrupament d'un o diversos objectes i valors dins d'una classe**. Aquesta associació pot ser de dos tipus principals:

- **Agregació**: S'utilitza quan una classe "té" diferents objectes d'una altra classe independent. En aquest cas, els objectes agregats poden existir de manera independent a la classe que els conté.

- **Composició**: Com el nom indica, una classe està composta per altres objectes que li donen sentit. Si la classe principal desapareix, els objectes que la componen també perden la seva raó de ser, ja que depenen completament d'ella per a la seva existència.

La composició crea una relació **'té'** o **'està compost per'**.

Un compte bancari té un titular i un o més autoritzats (tots són persones amb DNI, nom, adreça, telèfon, etc.). A més del saldo, el compte està compost per una sèrie de moviments (cada moviment té associats un tipus, una data, una quantitat, un concepte, un origen o una destinació, etc.). La diferència és que, si el compte desapareix, les persones poden continuar sent clients del banc, tenir altres comptes o passar a formar part del personal del banc. En canvi, els moviments només tenen sentit per a eixe compte concret, de manera que, si el compte desapareix, aquests moviments perden el seu valor.

```java
public class CompteBancari {
  Persona titular;
  double saldo;
  Moviment moviments[];
  Persona autoritzats[];
  ...
}
public class Persona {
  String dni, nom, adreça, telèfon;
  ...
}
public class Moviment {
  int tipus;
  Date data;
  double quantitat;
  String concepte, origen, destinació;
  ...
}
```
