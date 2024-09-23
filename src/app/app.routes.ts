import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DisplayhelloworldComponent } from './displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { UserageComponent } from './userage/userage.component';
import { UsergreetingComponent } from './usergreeting/usergreeting.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextlengthComponent } from './textlength/textlength.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './wordreverser/wordreverser.component';
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
    {
		title: 'Component #6: User Age',
		component: UserageComponent,
		path: 'user-age',    
	},
    {
		title: 'Component #7: User Greeting',
		component: UsergreetingComponent,
		path: 'user-greeting',
	},
    {
		title: 'Component #8: Calculator',
		component: CalculatorComponent,
		path: 'calculator',
	},
    {
		title: 'Component #9: Text Length',
		component: TextlengthComponent,
		path: 'textLength',
	},
    {
		title: 'Component #10: Currency Converter',
		component: CurrencyconverterComponent,
		path: 'currency-converter',
	},
    {
		title: 'Component #11: Even or Odd',
		component: EvenoddcheckerComponent,
		path: 'evenodd',
	},
    {
		title: 'Component #12: Reverse Word',
		component: WordreverserComponent,
		path: 'word-reverser',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}