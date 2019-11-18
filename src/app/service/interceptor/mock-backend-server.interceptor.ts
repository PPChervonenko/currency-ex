import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import {LoginResponse} from '../../model/user.model';



@Injectable()
export class MockBackendServerInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('/login') && request.method === 'POST') {
            return (
                of(null)
                    .pipe(
                        mergeMap(() => {
                            const testUser = [
                                {
                                    username: 'user',
                                    password: 'user',
                                    fullName: 'Jon Connor',
                                },
                                {
                                    username: 'user1',
                                    password: 'user1',
                                    fullName: 'Den Reeves',
                                },
                            ];

                            request = request.clone();

                            if (
                                (request.body.username === testUser[0].username &&
                                    request.body.password === testUser[0].password) ||
                                (request.body.username === testUser[1].username &&
                                    request.body.password === testUser[1].password)
                            ) {
                                const body: LoginResponse = {
                                    token:
                                    'lpEpfCuyuD2g5lI88cJ4eT1VpRQo538e' +
                                  'Rxyfs2dmPxqPQ6VinXJy3su6SF49nUZS' +
                                  'EsyTM7RTmWb7dADtAKbmVj7D4VD85JF4' +
                                  'llBtovJLrdK0j58OUx9Pb3eWoshCVjdN' +
                                  'HjZEbyRg4UrGYDks335HWbpZhmGMZX69' +
                                  'V5lNl2VmSgxfPQQrt9PZkH7FBtWjWsCC' +
                                  'LbuiOUnnuBOGGRz9TohVPKxR0CQ7amfg' +
                                  '0km96YcJi5tq27zpQ4hsCC01IJhuJDha' +
                                  'S9DiWEXSf4h57Gmg33wux3ulTHfi1CQy' +
                                  'jtCv5KqJYKHQT2vlCat80A6eeU0273Dq',
                                    user: {
                                        fullName:
                                            request.body.username === testUser[0].username ? 'Jon Connor' : 'Den Reeves',
                                        username: request.body.username === testUser[0].username ? 'user' : 'user1',
                                    },
                                };

                                // if login details are valid return 200 OK with a hypothetical JWT
                                return of(
                                    new HttpResponse({
                                        status: 200,
                                        body,
                                    }),
                                );
                            } else {
                                // else return error
                                return throwError('Username or password is wrong!');
                            }
                        }),
                    )
                    // Called RxJS Materialize() and Dematerialize() methods
                    // to ensure delay which simulates server response
                    .pipe(
                        materialize(),
                        delay(1000),
                        dematerialize(),
                    )
            );
        }

        return next.handle(request);
    }
}
