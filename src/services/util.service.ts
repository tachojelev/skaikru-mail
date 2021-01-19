import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  extractPlaceholders(message: string): Array<string> {
    /* Get all substrings starting with "%(" and ending with ")" */
    const regexResult = message.match(/%\(.*?\)/gm);
    return Array.from(new Set(regexResult.map(regexResultEntry => regexResultEntry.substring(2, regexResultEntry.length - 1))));
  }
}
