import { trigger, state, transition, style, animate, query, stagger, animateChild, group } from '@angular/animations';


export const navAnim =
    state('hidden', style({ height: '10px'}))
    trigger('navAnim', [
        transition('* <=> hidden', [
            animate('0.3s .05s ease-in-out')
        ])
    ])