import { TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
describe('MoviesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MoviesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MoviesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movies.component.spec.js.map