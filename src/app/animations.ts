import { trigger, state, transition, style, animate, query, stagger, animateChild, group } from '@angular/animations';


export const navAnim =
    trigger('navAnim', [
        state('hidden', style({ transform: 'translateY(-90%)'})),

        transition('* <=> hidden', [
            animate('0.2s ease-in-out')
        ])
    ])
