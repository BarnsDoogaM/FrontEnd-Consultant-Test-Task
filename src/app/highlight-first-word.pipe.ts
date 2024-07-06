// highlight-first-word.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightFirstWord'
})
export class HighlightFirstWordPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    if (!value) {
      return value;
    }

    // Split the string by spaces
    const words = value.split(' ');

    // Highlight the first word
    if (words.length > 0) {
      words[0] = `<span class="highlight">${words[0]}</span>`;
    }

    // Join the words back into a single string
    const highlightedValue = words.join(' ');

    // Return the sanitized HTML
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }

}
