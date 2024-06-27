import { __decorate, __param } from "tslib";
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
let RandomShowsComponent = class RandomShowsComponent {
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnInit() {
        this.loadRandom();
    }
    loadRandom() {
        if (isPlatformBrowser(this.platformId)) {
            const RandomDiv = document.getElementById("RandomShowsDiv");
            if (RandomDiv) {
                fetch("http://localhost:3000/netflix/random")
                    .then(response => {
                    return response.json();
                })
                    .then(res => {
                    let data = res;
                    // console.log(data);
                    RandomDiv.innerHTML = "";
                    for (let i = 0; i < 10; i++) {
                        RandomDiv.innerHTML += `<div ng-reflect-ng-class="p-card p-component" 
     ng-reflect-ng-style="[object Object]" 
     data-pc-name="card" 
     class="p-card p-component" 
     style="width: 280px; height: 415px;">
  <div class="p-card-header ng-star-inserted">
    <img _ngcontent-ng-c3007106397="" 
         alt="Card" 
         style="width: 100%; max-height: 200px;" 
         src="` + data[i].Image_URL + `" 
         class="ng-tns-c3007106397-0 ng-star-inserted">
  </div>
  <div class="p-card-body">
    <div class="p-card-title ng-star-inserted" 
         style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"> 
      ` + data[i].title + ` 
    </div>
    <div class="p-card-subtitle ng-star-inserted" 
         style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> 
      ` + data[i].type + ` 
    </div>
    <div style="overflow-wrap: break-word; overflow-y: auto; max-height: 100px;">
      <p _ngcontent-ng-c3007106397>
        ` + data[i].listed_in + ` 
      </p>
    </div>
  </div>
</div>`;
                    }
                })
                    .catch(error => {
                    console.log(error);
                });
            }
        }
    }
};
RandomShowsComponent = __decorate([
    Component({
        selector: 'app-random-shows',
        standalone: true,
        imports: [CommonModule, CardModule,],
        templateUrl: './random-shows.component.html',
        styleUrl: './random-shows.component.css',
    }),
    __param(0, Inject(PLATFORM_ID))
], RandomShowsComponent);
export { RandomShowsComponent };
//# sourceMappingURL=random-shows.component.js.map