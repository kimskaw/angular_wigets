import {Type} from '@angular/core';

export interface Wiget {
    id: number;
    label: string;
    content: Type<unknown>;
}