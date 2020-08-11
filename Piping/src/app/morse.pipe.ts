import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let a: string;
    for (let index = 0; index < value.length; index++) {
      const i = value[index];
      switch (i) {
        case 'a':
          a += '.-'
          break;
        case 'b':
          a += '-...'
          break;
        case 'c':
          a += '-.-.'
          break;
        case 'd':
          a += '-..'
          break;
        case 'e':
          a += '.'
          break;
        case 'f':
          a += '..-.'
          break;
        case 'g':
          a += '--.'
          break;
        case 'h':
          a += '....'
          break;
        case 'i':
          a += '..'
          break;
        case 'j':
          a += '.---'
          break;
        case 'k':
          a += '-.-'
          break;
        case 'l':
          a += '.-..'
          break;
        case 'm':
          a += '--'
          break;
        case 'n':
          a += '-.'
          break;
        case 'o':
          a += '---'
          break;
        case 'p':
          a += '.--.'
          break;
        case 'q':
          a += '--.-'
          break;
        case 'r':
          a += '.-.'
          break;
        case 's':
          a += '...'
          break;
        case 't':
          a += '-'
          break;
        case 'u':
          a += '..-'
          break;
        case 'v':
          a += '...-'
          break;
        case 'w':
          a += '.--'
          break;
        case 'x':
          a += '-..-'
          break;
        case 'y':
          a += '-.--'
          break;
        case 'z':
          a += '--..'
          break;
        case 'æ':
          a += '.-.-'
          break;
        case 'ø':
          a += '---.'
          break;
        case 'å':
          a += '.--.-'
          break;
        case '1':
          a += '.----'
          break;
        case '2':
          a += '..---'
          break;
        case '3':
          a += '...--'
          break;
        case '4':
          a += '....-'
          break;
        case '5':
          a += '.....'
          break;
        case '6':
          a += '-....'
          break;
        case '7':
          a += '--...'
          break;
        case '8':
          a += '---..'
          break;
        case '9':
          a += '----.'
          break;
        case '0':
          a += '-----'
          break;
        case '.':
          a += '.-.-.-'
          break;
        case ',':
          a += '--..--'
          break;
        case ':':
          a += '---...'
          break;
        case '?':
          a += '..--..'
          break;
        case '\'':
          a += '.----.'
          break;
        case '/':
          a += '-....-'
          break;
        case '(':
          a += '-.--.'
          break;
        case ')':
          a += '-.--.-'
          break;
        case '\"':
          a += '.-..-.'
          break;
        case '\n':
          a += '.-.-'
          break;
        case '-..-':
          a += '.-'
          break;
        case '@':
          a += '.--.-.'
          break;

        default:
          a += ' ';
          break;
      }
      a += ' ';
    }

    return a;

  }

}
