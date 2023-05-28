import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatsComponent } from "./components/chats/chats.component";


const routes: Routes = [
  { path: 'chats', component: ChatsComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
