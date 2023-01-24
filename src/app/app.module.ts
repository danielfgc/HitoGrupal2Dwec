import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
/* import { AngularFireModule } from 'angularfire2';
 *//* import { AngularFirestoreModule } from 'angularfire2/firestore';
 */import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
/* import { firebaseConfig } from './database/credentials';
 */import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
