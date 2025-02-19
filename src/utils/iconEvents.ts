import { MouseEvent as ReactMouseEvent } from 'react';

export function handleImageClick(event: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.currentTarget as HTMLElement;
    target.style.color = '#FB7B48';
    console.log('Imagen icon clicked');
    // Agrega aquí la lógica que deseas ejecutar cuando se haga clic en el icono de imagen
}

export function handlePersonClick(event: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.currentTarget as HTMLElement;
    target.style.color = '#FB7B48';
    console.log('Person icon clicked');
    // Agrega aquí la lógica que deseas ejecutar cuando se haga clic en el icono de persona
}

export function handleAspectRatioClick(event: ReactMouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.currentTarget as HTMLElement;
    target.style.color = '#FB7B48';
    console.log('Aspect ratio icon clicked');
    // Agrega aquí la lógica que deseas ejecutar cuando se haga clic en el icono de aspect ratio
}