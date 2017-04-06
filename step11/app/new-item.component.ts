import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'new-item-info',
    template: `<h3>Модель {{id}}</h3>
                <div>Товар: {{product}}</div>
                <div>Цена: {{price}}</div>`
})
export class NewItemComponent implements OnDestroy {

    private id: number;
    private product: string;
    private price: string;

    private routeSubscription: Subscription;
    private querySubscription: Subscription;
    constructor(private route: ActivatedRoute){

        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.product = queryParam['product'];
                this.price = queryParam['price'];
            }
        );
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
        this.querySubscription.unsubscribe();
    }
}
