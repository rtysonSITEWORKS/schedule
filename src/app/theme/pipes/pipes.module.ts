import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPicturePipe } from './appPicture/appPicture.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { SearchPipe } from './search/search.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AppPicturePipe, ProfilePicturePipe, SearchPipe ],
    exports: [ AppPicturePipe, ProfilePicturePipe, SearchPipe ]
})
export class PipesModule { }
