import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatchsComponent } from './pages/matchs/matchs.component';
import { JoueursComponent } from './pages/joueurs/joueurs.component';
import { ClassementComponent } from './pages/classement/classement.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'matchs', component: MatchsComponent, canActivate: [AuthGuard] },
  { path: 'joueurs', component: JoueursComponent, canActivate: [AuthGuard] },
  { path: 'classement', component: ClassementComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
