import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CMFService {

  key: string = '33657ff33d26390cf11bcca5300b7db6686fdfe0';

  constructor(private http: HttpClient) {}

  loadDataList(id: string) {
    
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - 30));

    let resource: string;
    if (id === 'dolar' || id == 'euro' || id === 'uf') {
      resource = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${id}/posteriores/${priorDate.getFullYear()}/${priorDate.getUTCMonth()
      + 1}/dias/${priorDate.getDate() - 1}?apikey=${this.key}&formato=json`;
    } else if (id === 'utm' || id === 'ipc') {
      resource = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${id}/${priorDate.getFullYear()}?apikey=${this.key}&formato=json`;
    }

    return this.http.get(resource)
  }

  loadDataChart(id: string) {
    
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - 15));

    let resource: string;
    if (id === 'dolar' || id == 'euro' || id === 'uf') {
      resource = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${id}/posteriores/${priorDate.getFullYear()}/${priorDate.getUTCMonth()
      + 1}/dias/${priorDate.getDate()}?apikey=${this.key}&formato=json`;
    } else if (id === 'utm' || id === 'ipc') {
      resource = `https://api.cmfchile.cl/api-sbifv3/recursos_api/${id}/posteriores/${priorDate.getFullYear()
      - 1}/${priorDate.getUTCMonth()}?apikey=${this.key}&formato=json`;
    }

    return this.http.get(resource)
  }
}
