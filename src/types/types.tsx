import { ComponentType } from 'react';

export interface CardProps {
    icon: ComponentType<{ size: number }>;
    text: string;
    link: string;
    linkText: string;
}

export interface CarouselProps {
    cards: CardProps[];
    quantidadePorVez: number;
}