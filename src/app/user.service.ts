import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userProfile } from './userProfile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<userProfile[]> {
    return this.http.get<userProfile[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(user: userProfile): Observable<userProfile> {
    user.appUserRole = 'USER';
    return this.http.post<userProfile>(`${this.apiServerUrl}/user/add`, user);
  }

  public updateUser(user: userProfile): Observable<userProfile> {
    user.appUserRole = 'USER';
    return this.http.put<userProfile>(`${this.apiServerUrl}/user/update`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }

}
