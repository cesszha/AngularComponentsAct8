import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
export const routes: Routes = [
	{
		title: 'Component #1: Display Hello World',
		component: DisplayhelloworldComponent,
		path: 'hello-world',
	},
	{
		title: 'Component #2: Show Hello Button',
		component: ShowhellobuttonComponent,
		path: 'hello-button',
	},
	{
		title: 'Component #3: Display Name',
		component: DisplaynameComponent,
		path: 'display-name',
	},
	{
		title: 'Component #4: Counter',
		component: CounterComponent,
		path: 'counter',
	},
	{
		title: 'Component #5: Simple Form',
		component: SimpleFormComponent,
		path: 'simple-form',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}