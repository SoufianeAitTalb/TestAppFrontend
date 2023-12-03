import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fileUploaderComponent } from './fileUploader.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: fileUploaderComponent }

	])],
	exports: [RouterModule]
})
export class fileUploaderRoutingModule { }
