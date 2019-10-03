import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Permet de sauvegarder
   * nos contacts dans le storage.
   */
  saveContacts(contacts: Contact[]) {
    // LocalStorage.setItem("cle","valeur")
    localStorage.setItem('contact', JSON.stringify(contacts));
  }

  /**
   * Permet de récupérer les
   * contacts du storage.
   */
  getContacts(): Contact[] {

    const contacts = JSON.parse(
      localStorage.getItem('contact')
    );
    if ( contact !== null) {
      return contacts;
    } else{
      return [];
    }
  }
}
