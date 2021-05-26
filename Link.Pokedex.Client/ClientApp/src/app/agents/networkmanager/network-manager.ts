import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostParameters } from './post-parameters';
import { Observable } from 'rxjs';
import { BaseResponse } from '../core/base-response';
import { Constants } from '../../shared/constants';
import { Notifications } from '../../shared/notifications';

@Injectable()
export class NetworkManager {

  constructor(
    private httpClient: HttpClient,
    private notificator: Notifications
  ) {
  }

  Post(postParameters: PostParameters): Observable<BaseResponse> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const options = { headers: headers };
    const parameters = postParameters.RequestParameter || null;

    return Observable.create(observer => {
      try {
        this.httpClient.post(`${postParameters.PathOperation}`, JSON.stringify(parameters), options).subscribe(
          response => {
            try {
              const baseResponse: BaseResponse = <BaseResponse>response;

              if (baseResponse.StateResponse.Error) {
                this.notificator.Error(baseResponse.StateResponse.MensajeError);
                observer.error(baseResponse);
              } else {
                observer.next(response);
              }
              
            } catch (e) {
              this.notificator.Error(e.message);
              observer.error(e);
              
            }
          },
          httpError => {
            this.notificator.Error(Constants.Messages.ERROR_NO_CONTROLADO);
            observer.error(httpError);
            
          },
          () => {
            observer.complete();
            
          });
      } catch (xx) {
       
      }


    });

  }


  PostBlob(postParameters: PostParameters): Observable<Blob> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    const parameters = postParameters.RequestParameter || null;

    return Observable.create(observer => {
      const operationUrl = `${postParameters.PathOperation}`;
      this.httpClient.post(operationUrl, JSON.stringify(parameters), { headers: headers, responseType: 'blob' }).subscribe(
        response => {
          try {
            const blobResponse: Blob = new Blob([response], { type: postParameters.ContentType });
            observer.next(blobResponse);
          } catch (e) {
            this.notificator.Error(e.message);
            observer.error(e);
          }
        },
        httpError => {
          this.notificator.Error(Constants.Messages.ERROR_NO_CONTROLADO);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        }
      );
    });
  }

  PostFile(pathOperation: string, formData: FormData): Observable<BaseResponse> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    const options = { headers: headers };

    return Observable.create(observer => {
      this.httpClient.post(`${pathOperation}`, formData, options).subscribe(
        data => {
          try {
            const response: BaseResponse = <BaseResponse>data;
            if (response.StateResponse.Error) {
              this.notificator.Error(response.StateResponse.MensajeError);
              observer.error(response);
            } else {
              observer.next(data);
            }
          } catch (e) {
            this.notificator.Error(e.message);
            observer.error(e);
          }
        },
        httpError => {
          this.notificator.Error(Constants.Messages.ERROR_NO_CONTROLADO);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }

  PostFileBlob(pathOperation: string, formData: FormData, postParameters: PostParameters): Observable<Blob> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return Observable.create(observer => {
      this.httpClient.post(`${pathOperation}`, formData, { headers: headers, responseType: 'blob' }).subscribe(
        data => {
          try {
            const response: Blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            observer.next(response);
          } catch (e) {
            this.notificator.Error(e.message);
            observer.error(e);
          }
        },
        httpError => {
          this.notificator.Error(Constants.Messages.ERROR_NO_CONTROLADO);
          observer.error(httpError);
        },
        () => {
          observer.complete();
        });
    });
  }

}
